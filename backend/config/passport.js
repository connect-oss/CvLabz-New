const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.API_BASE_URL || 'http://localhost:5001'}/api/v1/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;

        // Find user by googleId
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          return done(null, user);
        }

        // Find user by email (but no googleId)
        user = await User.findOne({ email });
        if (user) {
          user.googleId = profile.id;
          user.provider = 'google';
          user.isEmailVerified = true;
          await user.save();
          return done(null, user);
        }

        // Create new user
        user = await User.create({
          name: profile.displayName,
          email,
          googleId: profile.id,
          provider: 'google',
          isEmailVerified: true,
          role: 'user',
        });

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

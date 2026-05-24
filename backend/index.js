require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const connectDB = require('./config/db');
const seedAdmin = require('./seeders/adminSeeder');
const seedMedia = require('./seeders/mediaSeeder');

// Passport config
require('./config/passport');

const app = express();

// Middleware
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(morgan('dev'));
app.use(cors({
  origin: [process.env.FRONTEND_URL, process.env.CLIENT_BASE_URL, 'http://localhost:3000', 'http://localhost:5173'].filter(Boolean),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(passport.initialize());

// Routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/admin/users', require('./routes/adminUsers'));
app.use('/api/v1/admin/blogs', require('./routes/adminBlogs'));
app.use('/api/v1/admin/content', require('./routes/adminContent'));
app.use('/api/v1/admin/media', require('./routes/adminMedia'));
app.use('/api/v1/admin/dashboard', require('./routes/adminDashboard'));
app.use('/api/v1/content', require('./routes/publicContent'));
app.use('/api/v1/public', require('./routes/public'));

// Static file serving for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ success: false, message: err.message || 'Internal Server Error' });
});

// Start
const PORT = process.env.PORT || 5001;
connectDB().then(async () => {
  await seedAdmin();
  const User = require('./models/User');
  const admin = await User.findOne({ role: 'admin' });
  if (admin) await seedMedia(admin._id);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

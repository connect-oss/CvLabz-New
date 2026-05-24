FROM node:20-alpine

WORKDIR /app

COPY package.json ./

# Install without lockfile to avoid platform-specific native bindings
# and force resolve correct linux packages
RUN npm install --no-package-lock --force

COPY . .

EXPOSE 3000

ENV NEXT_PUBLIC_API_URL=http://localhost:5001

CMD ["npm", "run", "dev"]

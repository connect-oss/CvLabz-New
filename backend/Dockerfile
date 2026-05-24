FROM node:20-slim

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "run", "dev"]

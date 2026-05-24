FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 3000

ENV NEXT_PUBLIC_API_URL=http://localhost:5001

CMD ["npm", "run", "dev"]

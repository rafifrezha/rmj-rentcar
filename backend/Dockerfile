<<<<<<< HEAD
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev  # hapus dependency dev seperti nodemon

COPY . .

ENV PORT=5000
EXPOSE 5000

CMD ["node", "index.js"]
=======

FROM node:18-alpine
WORKDIR /app
ENV PORT 5000
COPY . .
RUN npm install
EXPOSE 5000
CMD [ "npm", "run", "dev"]
>>>>>>> f574b70bfa51830aa3afbbf1fb739e7e725c4b00

FROM node:12.22.4-alpine
RUN mkdir -p /app
WORKDIR /app

COPY ./mern/client/package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
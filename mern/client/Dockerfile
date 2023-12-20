# Dockerfile stage PRODUCTION
FROM node:12.22.4-alpine

WORKDIR /app

COPY ./mern/client ./

COPY . .
RUN npm install
# remove command build stage DEV
RUN npm run build

EXPOSE 3001
# change CMD ["npm", "run", "dev"] stage DEV
CMD ["npm", "start"]
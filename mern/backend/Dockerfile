FROM node:12.22.4-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["./mern/backend/package.json", "./mern/backend/package-lock.json*", "./mern/backend/npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 5000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
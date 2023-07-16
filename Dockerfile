FROM node:16.14.0
MAINTAINER mauroslucios@gmail.com
RUN mkdir -p /var/www/app/node_modules && chown -R node:node /var/www/app
WORKDIR /var/www/app
COPY package.json ./
RUN npm install
COPY . .
COPY --chown=node:node . .
USER node
EXPOSE 3000
CMD ["node","app.js"]
ENTRYPOINT ["npm","start"]


FROM node:alpine
WORKDIR /app
COPY package.json ./

ADD . .

EXPOSE 3000

CMD [ "npm", "start" ]
FROM node:latest

COPY package*json ./

RUN npm i

COPY server.js .

CMD [ "node", "server.js" ]


FROM node:10.0.0

RUN mkdir /usr/src/server
WORKDIR /usr/src/server

ENV PATH /usr/src/server/node_modules/.bin:$PATH

COPY package.json /usr/src/server/package.json


RUN npm install
COPY node_modules /usr/src/server/node_modules
CMD npm run server



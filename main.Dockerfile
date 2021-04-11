FROM node:12-alpine

WORKDIR /app

COPY . .

RUN npm i

USER nobody

CMD node .

EXPOSE 3000

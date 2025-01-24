FROM node:20-alpine3.20

RUN mkdir -p /home
WORKDIR /home

ENV HOST 0.0.0.0

COPY ./.output /home

EXPOSE 3000/tcp

CMD ["node", "server/index.mjs"]

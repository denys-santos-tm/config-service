FROM node:12-alpine as builder
WORKDIR /app
COPY . .
RUN yarn --pure-lockfile
RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production --pure-lockfile

FROM alpine:3.12.0

RUN apk add --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/v3.12/main/ nodejs=12.17.0-r0 git && \
    ln -snf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && echo "America/Sao_Paulo" > /etc/timezone

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
ENTRYPOINT ["node", "build/index.js"]

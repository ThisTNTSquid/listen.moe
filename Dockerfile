FROM node:lts-alpine
RUN apk add python2 \
&& apk add make \
&& apk add gcc \
&& apk add g++ \
&& npm install -g node-gyp \
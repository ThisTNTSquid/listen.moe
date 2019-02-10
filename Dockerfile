# Node-gyp image for audio aupport
FROM thistntsquid/node-gyp
# Pack app into container
COPY src/ /app/
WORKDIR /app/
CMD [ "node","index.js" ]
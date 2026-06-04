FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY .output ./.output

RUN cd .output/server && npm install --production

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

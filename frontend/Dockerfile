FROM node:22-slim

WORKDIR /app

ENV NODE_ENV=production

COPY .output ./.output

RUN cd .output/server && npm install --production

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

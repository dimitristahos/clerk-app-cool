FROM node:lts-slim
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .
RUN npm i
RUN npm cache clean --force

EXPOSE 4174

CMD ["npm", "run", "preview"]

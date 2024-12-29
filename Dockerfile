FROM node:lts-slim
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .
RUN npm i
RUN npm cache clean --force
RUN npm run build

EXPOSE 4173 

CMD ["npm", "run", "preview"]

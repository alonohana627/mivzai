FROM node:gallium-bullseye
WORKDIR /pricer-ts
COPY ./ ./
RUN npm install -g yarn --force && yarn install
EXPOSE 8080:8080
CMD yarn start

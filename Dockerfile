FROM node:gallium-bullseye
WORKDIR /pricer-ts
COPY ./ ./
RUN npm install -g yarn --force && yarn install
CMD yarn start
EXPOSE 7000:7000

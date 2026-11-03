FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

FROM alpine:3.19
WORKDIR /srv
COPY --from=build /app /srv
CMD ["node", "src/app.js"]

FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

FROM python:3.12-slim@sha256:0000000000000000000000000000000000000000000000000000000000000000
WORKDIR /srv
COPY --from=build /app /srv
CMD ["node", "src/app.js"]

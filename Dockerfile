FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

FROM node:20-slim
WORKDIR /srv
COPY --from=build /app /srv
CMD ["node", "src/app.js"]

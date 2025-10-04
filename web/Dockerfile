FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm ci

COPY . .

RUN npm run build

FROM node:24-alpine AS runtime

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

COPY --from=builder /app/build ./build

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs

EXPOSE 3000

CMD ["node", "build/index.js"]

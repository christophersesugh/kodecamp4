# base node image
FROM node:20-bookworm-slim AS base

FROM base AS deps

# install dependencies

WORKDIR /app

ADD package.json package-lock.json ./
RUN npm install --include=dev

FROM deps AS production-deps
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY package.json package-lock.json ./
RUN npm prune --omit=dev


FROM base

WORKDIR /data
RUN touch sqlite.db


FROM base AS build
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN npm run build

FROM base

ENV DATABASE_URL="file:./data/sqlite.db"
ENV PORT="8080"
ENV NODE_ENV="production"

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

ADD . .

CMD ["npm", "start"]
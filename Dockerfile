FROM node:alpine AS builder
WORKDIR /app

ARG NUXT_APP_BASE_URL=/
ARG NUXT_PUBLIC_SITE_URL=https://jude.jkantech.net
ARG NUXT_PUBLIC_WHATSAPP_NUMBER=243975889135

ENV NUXT_APP_BASE_URL=${NUXT_APP_BASE_URL}
ENV NUXT_PUBLIC_SITE_URL=${NUXT_PUBLIC_SITE_URL}
ENV NUXT_PUBLIC_WHATSAPP_NUMBER=${NUXT_PUBLIC_WHATSAPP_NUMBER}

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build && \
    if [ ! -d "dist" ] && [ -d ".output/public" ]; then cp -r .output/public dist; fi

FROM node:alpine
WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist /app

ENV PORT=3000
EXPOSE ${PORT}

CMD ["sh", "-c", "serve -s . -l ${PORT:-3000}"]

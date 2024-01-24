FROM node:18 AS build

WORKDIR /app

COPY . .

RUN npm i -f

RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=build /app/package*.json ./

COPY --from=build /app/.next/ ./.next

COPY --from=build /app/public  ./public

COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]

########################################################

# FROM nginx:1.21-alpine AS web-server

# RUN apk add python3 python3-dev py3-pip build-base libressl-dev musl-dev libffi-dev rust cargo

# RUN pip3 install pip --upgrade

# RUN pip3 install certbot-nginx

# RUN mkdir /etc/letsencrypt

# COPY nginx.conf /etc/nginx/conf.d/default.conf

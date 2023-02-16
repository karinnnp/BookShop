FROM docker.io/node:lts-alpine AS builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH

# install app dependencies
COPY . ./

RUN npm i
RUN npm run build:stag

# add app

FROM docker.io/nginx:alpine

COPY --from=builder /app/build/ /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

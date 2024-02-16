FROM node:current-alpine as builder

WORKDIR /app
COPY . .
RUN yarn && yarn build


FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

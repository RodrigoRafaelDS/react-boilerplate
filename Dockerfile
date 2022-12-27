# ==== CONFIGURE =====
FROM node:16.18.0
WORKDIR /Users/rodri/Desktop/projects/react-boilerplate
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.12-alpine
COPY --from=build-deps /Users/rodri/Desktop/projects/react-boilerplate /usr/share/nginx/html
EXPOSE 4000
CMD ["nginx", "-g", "daemon off;"]
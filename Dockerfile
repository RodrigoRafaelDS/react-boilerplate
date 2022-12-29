FROM node:16.16.0-alpine
WORKDIR /Users/app
COPY package.json .
RUN yarn
COPY . ./
CMD ["yarn", "dev", "--host", "0.0.0.0", "--port", "3221"]

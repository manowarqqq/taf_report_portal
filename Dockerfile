FROM node:18

#WORKDIR /usr/src/app

COPY package*.json ./

RUN NODE_ENV=development npm ci
RUN npm i typescript
RUN npm run build

COPY . .

EXPOSE 8080
CMD ["npm", "run","api_test" ]

FROM node:18

#WORKDIR /usr/src/app

COPY package*.json ./

RUN NODE_ENV=development npm i
RUN npm i tsc
RUN npm run build

COPY . .

EXPOSE 8080
CMD ["npm", "run","api_test" ]

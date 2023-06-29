FROM node:18

#WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm build

COPY . .

EXPOSE 8080
CMD ["npm", "run","api_test" ]

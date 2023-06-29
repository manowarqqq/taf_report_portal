FROM node:18

#WORKDIR /usr/src/app

COPY package*.json ./

ENV NODE_ENV=development
#RUN NODE_ENV=development npm i
RUN npm install && npm install --only=dev
#ENV NODE_ENV=production
RUN npm run build

COPY . .

EXPOSE 8080
CMD ["npm", "run","api_test" ]

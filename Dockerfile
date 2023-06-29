FROM node:18

#WORKDIR /usr/src/app

COPY package*.json ./

ENV NODE_ENV=development
RUN #NODE_ENV=development npm ci
RUN npm install --only=production && npm cache clean --force && npm install -g typescript
ENV NODE_ENV=production
RUN npm run build

COPY . .

EXPOSE 8080
CMD ["npm", "run","api_test" ]

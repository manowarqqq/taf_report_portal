FROM node:18
COPY . /app
WORKDIR /app
#COPY . .
ENV NODE_ENV=development
RUN NODE_ENV=development npm install --include=dev
RUN npm run build
#COPY . .
EXPOSE 8080
CMD ["npm", "run","api_test" ]

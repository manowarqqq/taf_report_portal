FROM node:18

COPY . /app

WORKDIR /app

ENV NODE_ENV=development
#RUN NODE_ENV=development npm i
#RUN npm install
RUN NODE_ENV=development npm install --include=dev
#RUN npm ls
#RUN npm run clean
#RUN tsc
# && copyfiles testconfig.json ./build
RUN npm run build

COPY . .

EXPOSE 8080
CMD ["npm", "run","api_test" ]

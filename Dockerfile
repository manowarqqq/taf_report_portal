FROM node:18
COPY . /app
WORKDIR /app

ENV NODE_ENV=development
RUN NODE_ENV=development npm install --include=dev
RUN npm run build
RUN npx playwright install
COPY . .
EXPOSE 8080
CMD ["npm", "run","filters_test" ]

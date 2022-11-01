FROM node:16.14-alpine

WORKDIR /app-backend	

COPY package.json .

ENTRYPOINT [ "npm", "update", "-g" ]

RUN npm install

COPY . .

CMD ["npm", "start"]
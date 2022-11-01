FROM node:16.14-alpine

WORKDIR /app-frontend

ENTRYPOINT [ "npm", "update", "-g" ]
COPY package.json .

RUN npm install


COPY . .

CMD ["npm", "start"]
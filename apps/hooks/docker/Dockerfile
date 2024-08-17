FROM node

WORKDIR /home/app

# installing dependecies 
COPY package.json package.json
RUN npm install

# coping everything and building
COPY . .
RUN npm run build

CMD [ "npm","run","start" ]
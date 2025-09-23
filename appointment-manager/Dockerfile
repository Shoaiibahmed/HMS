FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon  # Install nodemon globally
COPY . .
EXPOSE 3004
CMD ["node", "app.js"]

FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

RUN npm run build

# Start the app
CMD ["npm", "run", "start:prod"]


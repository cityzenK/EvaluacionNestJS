FROM node:22-alpine as build

WORKDIR /app
# Copy package.json and install dependencies

COPY package*.json ./
RUN npm install

# Install TailwindCSS build tools
RUN npm install -D tailwindcss postcss autoprefixer
# Copy the rest of the Angular application files
COPY . .

# Build the Angular app in production mode, which will include TailwindCSS processing
RUN npm run build --prod

# Step 2: Serve the built Angular app using Nginx

FROM nginx:alpine

# Copy the built Angular files to the Nginx container
COPY --from=build /app/dist/your-angular-project-name /usr/share/nginx/html

# Expose the port Nginx is running on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


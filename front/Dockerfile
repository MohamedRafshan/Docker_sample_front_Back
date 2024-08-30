# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application for production
RUN npm run build

# Serve the built application using a simple static file server
# You can use 'serve' or similar static server package
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5173

# Start the application
CMD ["serve", "-s", "dist", "-l", "5173"]

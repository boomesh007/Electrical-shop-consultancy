# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port (change if needed)
EXPOSE 5000

# Start the app
CMD ["node", "server.js"]

# Use Node.js 18 slim base image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Set environment variables
ENV BACK_URL=http://0.0.0.0:5000

# Expose port 3000
EXPOSE 3000

# Run the Express server
CMD ["npm", "start"]

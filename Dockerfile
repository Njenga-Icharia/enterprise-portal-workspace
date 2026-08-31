# Use the official Node.js image as the base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of your project files
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose the port Next.js uses
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "start"]

FROM node:19.6.0-alpine
# Set the working directory within the container
WORKDIR /website

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the container
COPY . .

# Build the React app
EXPOSE 3000
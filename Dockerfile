FROM node:22-bullseye-slim

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json /app/

# Copy the entire codebase to the working directory
COPY backend /app/backend/
COPY build /app/build/

# Install dependencies
RUN apt-get update && apt-get install -y \
    bash &&\
    npm install &&\
    ls -a

# Expose the port your app runs on (replace <PORT_NUMBER> with your app's actual port)
EXPOSE 9000

# Define the command to start your application (replace "start" with the actual command to start your app)
CMD ["node", "./backend/server.js"]
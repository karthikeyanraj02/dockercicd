# official bun image
FROM oven/bun:1

# set work directory 
WORKDIR /app

# Copy only package files first (for better caching)
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install

# Copy rest of the code
COPY . .

# Expose port 
EXPOSE 3000

# Run your app
CMD ["bun", "run", "start"]

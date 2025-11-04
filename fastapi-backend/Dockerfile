# Use official Python image
FROM python:3.11-slim

# Set working directory inside the container
WORKDIR /app

# Copy all backend files
COPY . .

# Install required Python packages
RUN pip install fastapi uvicorn

# Expose port for the FastAPI server
EXPOSE 8000

# Run the FastAPI server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

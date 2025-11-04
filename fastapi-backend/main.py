from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import blog

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(blog.router)

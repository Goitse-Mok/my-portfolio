from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import json
import os

router = APIRouter()

DATA_FILE = "data/blog_posts.json"

class BlogPost(BaseModel):
    id: int
    title: str
    description: str
    date: str
    tags: list[str]
    content: str

def load_posts():
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, "r") as f:
        return json.load(f)

def save_posts(posts):
    with open(DATA_FILE, "w") as f:
        json.dump(posts, f, indent=2)

@router.get("/blog-posts")
def get_blog_posts():
    return load_posts()

@router.post("/blog-posts")
def create_blog_post(post: BlogPost):
    posts = load_posts()
    posts.append(post.dict())
    save_posts(posts)
    return {"message": "Post saved"}

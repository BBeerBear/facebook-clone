# uvicorn app.main:main --reload (dev)
# uvicorn app.main:app (prod)
from fastapi import FastAPI, Depends
from .dependencies import get_query_token, get_token_header
from .routers import posts, users

app = FastAPI(dependencies=[Depends(get_query_token)])
# app = FastAPI()


# app.include_router(users.router)
# app.include_router(posts.router)


@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}

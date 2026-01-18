from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.auth import router as auth_router
from routes.predict import router as predict_router
from routes.history import router as history_router
from routes.contact import router as contact_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Disease Prediction API"}

app.include_router(auth_router)
app.include_router(predict_router)
app.include_router(history_router)
app.include_router(contact_router)

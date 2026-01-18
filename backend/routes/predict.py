from fastapi import APIRouter, HTTPException, Depends, Request
from pydantic import BaseModel
from datetime import datetime
from jose import jwt
from bson import ObjectId
from database import users_collection, history_collection
from code2 import predict_disease

router = APIRouter(prefix="/prediction", tags=["Prediction"])

SECRET_KEY = "SUPER_SECRET_KEY_CHANGE_THIS"
ALGORITHM = "HS256"


class PredictionRequest(BaseModel):
    symptoms: str


def validate_user(request: Request):
    auth = request.headers.get("Authorization")

    if not auth or not auth.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid token")

    token = auth.split(" ")[1]

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload["user_id"]
    except:
        raise HTTPException(status_code=401, detail="Invalid token")

    if not users_collection.find_one({"_id": ObjectId(user_id)}):
        raise HTTPException(status_code=401, detail="Invalid user")

    return user_id


@router.post("/predict")
def predict(data: PredictionRequest, user_id: str = Depends(validate_user)):
    disease = predict_disease(data.symptoms)

    history_collection.insert_one({
        "user_id": user_id,
        "symptoms": data.symptoms,
        "disease": disease,
        "created_at": datetime.utcnow()
    })

    return {"predicted_disease": disease}

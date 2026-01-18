from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from datetime import datetime
from database import contact_collection

router = APIRouter(prefix="/contact", tags=["Contact"])

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str


@router.post("/")
def submit_contact(data: ContactRequest):
    try:
        contact_collection.insert_one({
            "name": data.name,
            "email": data.email,
            "message": data.message,
            "created_at": datetime.utcnow()
        })
        return {"message": "Contact message saved"}
    except:
        raise HTTPException(status_code=500, detail="Failed to save contact")

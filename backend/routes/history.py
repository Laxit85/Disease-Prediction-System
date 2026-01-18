from fastapi import APIRouter
from database import history_collection

router = APIRouter(prefix="/history", tags=["History"])

@router.get("/{user_id}")
def get_history(user_id: str):
    return list(history_collection.find(
        {"user_id": user_id},
        {"_id": 0}
    ))

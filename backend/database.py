import os
import certifi
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

USE_MOCK_DB = False

try:
    client = MongoClient(
        MONGO_URI,
        tls=True,
        tlsCAFile=certifi.where(),
        serverSelectionTimeoutMS=5000
    )

    client.admin.command("ping")
    print("✅ MongoDB connected successfully")

    db = client["healthai"]

    users_collection = db["users"]
    history_collection = db["history"]
    contact_collection = db["contact_messages"]

except Exception as e:
    print("❌ MongoDB connection failed:", e)
    USE_MOCK_DB = True

    # 🔁 FALLBACK MOCK DB (SERVER CRASH NA HO)
    users_collection = []
    history_collection = []
    contact_collection = []

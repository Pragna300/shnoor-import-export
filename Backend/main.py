from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import traceback
import asyncio

from database import engine, Base
from tracking_service.service import listen_to_pg_tracking

# Routers
from auth.routes import router as auth_router
from document_service.routes import router as document_router
from shipment_service.routes import router as shipment_router
from analytics_service.routes import router as analytics_router
from ai_service.routes import router as ai_router
from hsn_service.routes import router as hsn_router
from risk_service.routes import router as risk_router
from duty_service.routes import router as duty_router
from tracking_service.routes import router as tracking_router

app = FastAPI(title="AI Import-Export Unified Gateway")

# ---------------- CORS ----------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- ROUTES ----------------
app.include_router(auth_router)
app.include_router(document_router)
app.include_router(shipment_router)
app.include_router(analytics_router)
app.include_router(ai_router)
app.include_router(hsn_router)
app.include_router(risk_router)
app.include_router(duty_router)
app.include_router(tracking_router)

# ---------------- ROOT ----------------
@app.get("/")
async def root():
    return {"message": "Unified Gateway is active. All services integrated."}

# ---------------- STARTUP (FIXED) ----------------
@app.on_event("startup")
async def startup():
    print("🚀 App starting safely (no DB blocking)")

    # DO NOT block startup with DB connection
    # Tables should be created manually or via migration tool

    # Start background tracking safely
    try:
        asyncio.create_task(listen_to_pg_tracking())
        print("📡 Tracking service started")
    except Exception as e:
        print("⚠️ Tracking service failed to start:", e)

# ---------------- GLOBAL ERROR HANDLER ----------------
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    print("=== GATEWAY ERROR ===")
    print(traceback.format_exc())
    return {"detail": "Internal Server Error"}

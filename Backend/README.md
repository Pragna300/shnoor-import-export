# Shnoor Logistics Backend ⚙️🧠

This is the backend for the Shnoor AI Import-Export System, a high-performance **FastAPI** application designed for speed, scalability, and AI integration.

## 🌟 Key Services
- **🔐 Auth Service**: Secure user management with JWT and HTTP-only cookie support.
- **📄 Document Service**: Handles asynchronous processing of invoices via OCR (Tesseract) and NLP.
- **📦 Shipment Service**: Manages shipment lifecycles and tracking updates.
- **🤖 AI & HSN Service**: Predicts HSN codes and provides a logistics-focused chatbot using Gemini/LLMs.
- **📊 Analytics Service**: Aggregates data for real-time dashboard insights.
- **📍 Tracking Service**: Provides live shipment updates via WebSockets.

## 🛠️ Tech Stack
- **FastAPI**: Modern, fast (high-performance), web framework.
- **SQLAlchemy (Async)**: Database toolkit and ORM.
- **PostgreSQL**: Robust relational database.
- **OpenRouter API**: Integration with state-of-the-art LLMs (Gemini, etc.).
- **Tesseract & PDFPlumber**: Document OCR and parsing.
- **Redis & Kafka**: Message brokering and event-driven tasks.

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- PostgreSQL
- Redis Server (optional but recommended for background tasks)

### Installation
1. Clone the repository and navigate to `Backend`.
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   ```
3. Install required packages:
   ```bash
   pip install -r requirements.txt
   ```

### Database Setup
1. Create a PostgreSQL database (e.g., `shnoor_db`).
2. Update the `DATABASE_URL` in your `.env` file.
3. Run migrations or initial schema setup:
   ```bash
   python main.py  # Automatically creates tables on startup
   ```

### Execution
Start the server using Uvicorn:
```bash
uvicorn main:app --reload
```
The API documentation will be available at `http://127.0.0.1:8000/docs`.

## 📂 Project Structure
- `/auth`: Logic for user registration, login, and security.
- `/models`: Shared SQLAlchemy database models.
- `/document_service`: Invoice processing logic and OCR.
- `/ai_service`: Integration with AI models and chatbot logic.
- `/shipment_service`: Shipment management APIs.
- `/duty_service`: Customs duty calculation logic.
- `/risk_service`: Risk assessment algorithms.
- `/tracking_service`: WebSocket signaling for live tracking.

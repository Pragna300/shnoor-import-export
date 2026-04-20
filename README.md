# Shnoor AI Import-Export System 🚢🤖

A comprehensive, AI-driven logistics platform designed to streamline import-export operations through automated document processing, intelligent classification, and real-time tracking.

## 🏗️ Project Architecture

The system is built using a modern decoupled architecture:
- **Backend**: A modular FastAPI application providing specialized services for AI, Analytics, Shipments, and Tracking.
- **Frontend**: A high-performance React application built with Vite and styled with Tailwind CSS.

---

## 🚀 Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: React Hooks & Context API
- **Icons**: Lucide React
- **Charts**: Recharts

### Backend
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/)
- **ORMs/Database**: SQLAlchemy (Async), PostgreSQL
- **AI Models**: Integrated via OpenRouter (Gemini / LLM Support)
- **Document Processing**: PyTesseract, PDFPlumber, Pillow
- **Real-time**: WebSockets for Live Tracking
- **Message Queues**: Redis & Kafka (Integration ready)

---

## 🛠️ Key Features

- **📄 Document Service**: Automated extraction of invoice data using OCR and AI.
- **🔍 HSN Classification**: AI-powered prediction of Harmonized System codes for products.
- **💰 Duty Calculation**: Real-time calculation of customs duties and taxes.
- **⚠️ Risk Assessment**: Intelligent evaluation of shipment risks based on multiple parameters.
- **📍 Live Tracking**: Real-time shipment status updates via WebSockets.
- **📊 Analytics Dashboard**: Comprehensive visualization of logistics data and trends.
- **💬 AI Chatbot**: Intelligent assistant for resolving logistics queries.

---

## 🚥 API Endpoints

### 🔐 Authentication (`/auth`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Login and receive JWT tokens |
| `POST` | `/auth/refresh` | Get a new access token |
| `POST` | `/auth/logout` | Clear session cookies |
| `POST` | `/auth/forgot-password` | Request password reset |
| `POST` | `/auth/reset-password` | Reset password with token |

### 📄 Documents (`/documents`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/documents/upload` | Upload and process an invoice |
| `GET` | `/documents/` | List all processed documents |
| `GET` | `/documents/{id}` | Get detailed document info |

### 📦 Shipments (`/shipments`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/shipments/` | Create a new shipment |
| `GET` | `/shipments/` | List all shipments |
| `GET` | `/shipments/{id}` | Get shipment details |
| `POST` | `/shipments/{id}/tracking` | Add a tracking update |
| `WS` | `/shipments/ws/tracking` | WebSocket for live updates |

### 🤖 AI & HSN (`/ai`, `/hsn`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/ai/chatbot` | Chat with the logistics assistant |
| `POST` | `/hsn/` | Predict HSN code for a product |
| `GET` | `/hsn/{id}` | Retrieve HSN classification result |

### 📈 Analytics (`/analytics`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/analytics/summary` | Get dashboard overview data |
| `GET` | `/analytics/risk` | Get risk-related analytics |
| `GET` | `/analytics/hsn` | Get HSN trend analytics |

### 💰 Duty & Risk (`/duty`, `/risk`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/duty/` | Calculate duty breakdown for a shipment |
| `POST` | `/risk/assess/` | Perform risk assessment |

---

## ⚙️ Setup & Installation

### Backend Setup
1. Navigate to the `Backend` directory.
2. Create a virtual environment: `python -m venv venv`
3. Activate it: `source venv/bin/activate` (or `venv\Scripts\activate` on Windows).
4. Install dependencies: `pip install -r requirements.txt`
5. Create a `.env` file based on the environment variables section below.
6. Run the server: `uvicorn main:app --reload`

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

---

## 🔑 Environment Variables

Required variables for the `.env` file in the `Backend` directory:
```env
DATABASE_URL=postgresql+asyncpg://user:pass@localhost:5432/db_name
SECRET_KEY=your_access_token_secret
REFRESH_SECRET_KEY=your_refresh_token_secret
OPEN_ROUTER_API_KEY=your_open_router_api_key
```

---

## 📂 Folder Structure

```text
.
├── Backend/                # FastAPI Microservices
│   ├── ai_service/         # NLP & Chatbot Logic
│   ├── auth/               # User Authentication
│   ├── document_service/   # OCR & Invoice Processing
│   ├── shipment_service/   # Shipment Management
│   └── ...                 # Other core services
├── frontend/               # React (Vite) Application
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── pages/          # View Layouts
│   │   └── ...
├── README.md               # Main Documentation
└── ...
```

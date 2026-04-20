# Shnoor Logistics Frontend 🚛💻

This is the frontend application for the Shnoor AI Import-Export System, built using **React 19** and **Vite**.

## ✨ Features
- **📊 Real-time Dashboard**: Interactive charts and data summaries using Recharts.
- **📄 Document Processing**: Upload and track invoice status.
- **📍 Live Shipment Tracking**: Real-time status updates via WebSockets.
- **🛡️ Secure Auth**: JWT-based authentication with protected routes.
- **📱 Responsive UI**: Optimized for all screen sizes using Tailwind CSS.

## 🛠️ Tech Stack
- **React 19**: Core framework.
- **Vite**: Modern frontend build tool.
- **Tailwind CSS**: Utility-first CSS framework.
- **Lucide React**: For beautiful iconography.
- **React Router**: For client-side routing.
- **Recharts**: For data visualization.

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/khaleel-shnoor/AI-Import-Export-System.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```

### Build
Generate a production-ready bundle:
```bash
npm run build
```

The output will be in the `dist` folder, which can be served by any static host.

## 📂 Project Structure
- `src/components`: Reusable UI elements (Buttons, Tables, Modals).
- `src/pages`: Main view layouts (Dashboard, Shipments, Login).
- `src/assets`: Static assets like images and icons.
- `src/hooks`: Custom React hooks for data fetching and state.
- `src/context`: Application-wide state management.

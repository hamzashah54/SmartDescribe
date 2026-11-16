# 🚀 SmartDescribe – AI-Powered YouTube Description Generator

## 📖 Description

SmartDescribe is an AI-powered web application designed to generate engaging, informative, and SEO-friendly YouTube video descriptions using Google Gemini AI.

Users can simply enter their video title and Call-to-Action (CTA) text, choose whether to include hashtags and emojis, and generate a professional YouTube description within seconds.

The application features a modern and responsive interface built with React and Tailwind CSS, while the Flask backend handles AI-powered description generation through the Google Gemini API.

## ✨ Features

🤖 **AI-Powered Description Generation** using Google Gemini AI

📝 **Custom Video Titles** – Generate descriptions based on your YouTube video title.

🔗 **Custom CTA Integration** – Add your own Call-to-Action text at the end of the generated description.

#️⃣ **Hashtag Control** – Choose whether to include relevant hashtags in your description.

😀 **Emoji Control** – Enable or disable emojis according to your preference.

📋 **Copy to Clipboard** – Easily copy the generated description with one click.

⚡ **Fast AI Processing** – Generate engaging descriptions within seconds.

📱 **Responsive UI** – Modern and responsive layout using Tailwind CSS.

🔔 **Form Validation & Notifications** – Validates required fields and displays success or error notifications.

🧩 **Reusable Components** – Clean and maintainable component-based architecture.

## 🧰 Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui, Radix UI |
| Icons | Lucide React |
| Backend | Python, Flask |
| AI Integration | Google Gemini API |
| Notifications | Sonner, React Toast |
| Code Quality | ESLint |

## ⚙️ How to Run

To run the SmartDescribe application locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/hamzashah54/SmartDescribe.git
```

### 2. Navigate to the Project Directory

```bash
cd SmartDescribe
```

### 3. Install Frontend Dependencies

```bash
npm install
```

### 4. Start the Frontend Development Server

```bash
npm run dev
```

The frontend development server will start at:

```text
http://localhost:8080
```

### 5. Run the Backend

Open a separate terminal and navigate to the backend directory:

```bash
cd backend
```

Create and activate a Python virtual environment:

```bash
python -m venv venv
```

**Windows:**
```bash
venv\Scripts\activate
```

**macOS / Linux:**
```bash
source venv/bin/activate
```

Install the required backend dependencies:

```bash
pip install flask flask-cors python-dotenv google-genai gunicorn
```

Create a `.env` file inside the backend directory and add your Google Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Start the Flask backend:

```bash
python app.py
```

The backend will run at:

```text
http://localhost:5000
```

**Note:** The frontend currently uses the deployed backend API URL. To connect your local frontend to the local backend, update the API URL in `src/components/Generator.tsx` to `http://localhost:5000/generate-description`.

## 🏗️ Build

To build the frontend application for production, run:

```bash
npm run build
```

The production-ready build will be generated inside the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

To check code quality using ESLint:

```bash
npm run lint
```

## 🌐 Live Demo

Experience the live application:

[https://smart-describe.vercel.app/](https://smart-describe.vercel.app/)

## 👤 Author

SmartDescribe was collaboratively developed by:

Hamza Shah

Syed Arham Ali

Syeda Aqsa

Waiz Hussain Siddiqui

🧾 Forsit Admin Dashboard
A lightweight, responsive admin dashboard built using Vue 3. The application provides insights into revenue, inventory levels, and product registration — perfect for e-commerce or SaaS admin use cases.
🔗 Live Demo
🌐 https://fluffy-flan-70d454.netlify.app

📁 Project Structure
.
├── frontend/           	# Vue 3 SPA
│   ├── src/
│   ├── public/
│   └── package.json
│
└── backend/            	# Node.js mock backend
	├── index.js
	└── package.json



⚙️ Tech Stack



Layer
Stack
Frontend
Vue 3, Chart.js, Scoped CSS
Backend
Node.js (mock, simulated only)
Deployment
Netlify




✅ Features
📊 Revenue Dashboard


Total orders, total revenue, total products


Category & product filtering


Interactive chart (Chart.js)


Matching chart & card themes


📦 Inventory Management


Inline stock editing


Searchable product table


Low stock indicator with red background


🔴 Legend to clarify stock thresholds


➕ Product Registration


Add new products with image upload preview


Automatically updates inventory & revenue charts


🧭 Sidebar Navigation


Collapsible sidebar with active state


Simple UX toggle for compact mode


Header + Footer for complete layout polish


🚀 Getting Started

Frontend

cd frontend
npm install
npm run dev

Backend 

cd backend
npm install
node index.js


Note: Frontend currently runs and updates mocked data. Backend is optional.



📂 Assumptions
Simulated data used in place of real DB/API


Focused on clear UI/UX & component structure


Mobile responsiveness is minimal due to job scope


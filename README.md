# plainPay
# 💰 Expense Tracker & Budget Manager

> A full-stack web application to take complete control of your personal finances — track spending, manage budgets, and understand exactly where your money goes.

🎨 **[View Figma Prototype →](https://www.figma.com/proto/7RyTUBAMP9H0vqOYwsLbF3/Untitled?page-id=68%3A30&node-id=128-254&p=f&viewport=538%2C105%2C0.35&t=EpQiA5zIVrMJLCj7-1&scaling=contain&content-scaling=fixed&starting-point-node-id=117%3A1832)**

---

## 📌 About the Project

**Expense Tracker** is a full-stack personal finance management app designed to help you take charge of your monthly spending. Whether you want to know how much you spent on food this week, how much money you have left for the month, or where your salary actually disappeared to — this app has you covered.

The goal is simple: give users a clean, intuitive interface to log transactions, set budgets, and get a clear picture of their financial health — all in one place.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📊 **Dashboard Overview** | Monthly summary showing total income, total expenses, and remaining balance |
| ➕ **Expense Logging** | Add transactions with amount, category, date, and notes |
| 🎯 **Budget Management** | Set monthly budgets per category and track progress |
| 🔁 **Transaction History** | Full history with search, filter by date, category, and amount |
| 📈 **Spending Analytics** | Visual charts showing spending patterns and trends |
| 🗂️ **Category Breakdown** | See exactly how much you spent in each category (food, rent, travel, etc.) |
| 💵 **Balance Tracker** | Real-time display of how much money you have left this month |
| 🔐 **User Authentication** | Secure login so your data stays private |

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — Component-based UI
- **Tailwind CSS** — Utility-first styling
- **Chart.js / Recharts** — Data visualization
- **React Router** — Client-side routing
- **Axios** — API communication

### Backend
- **Node.js + Express.js** — REST API server
- **MongoDB + Mongoose** — Database & ODM
- **JWT** — Authentication & authorization
- **bcrypt** — Password hashing

---

## 📁 Planned Project Structure

```
expense-tracker/
├── client/                  # React frontend
│   ├── src/
│   │   ├── pages/           # Dashboard, History, Budget, Login, etc.
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # Global state (auth, expenses)
│   │   ├── hooks/           # Custom React hooks
│   │   └── utils/           # Helpers & formatters
│   └── public/
│
├── server/                  # Node.js backend
│   ├── routes/              # API route definitions
│   ├── controllers/         # Business logic
│   ├── models/              # Mongoose schemas
│   ├── middleware/          # Auth, error handling
│   └── config/              # DB connection, env config
│
└── README.md
```

---

## 🗺️ Roadmap

- [ ] Project setup & repo initialization
- [ ] Implement Figma designs into React components
- [ ] User authentication (register, login, JWT sessions)
- [ ] Expense CRUD — add, edit, delete, categorize transactions
- [ ] Dashboard with summary cards and charts
- [ ] Budget system with category limits and alerts
- [ ] Transaction history with filters and search
- [ ] Spending analytics & monthly reports
- [ ] Mobile responsiveness
- [ ] Deployment (Vercel + Render / Railway)

---

## 🎨 Design

The UI/UX design has been completed in Figma before development begins.

🔗 **[Open Figma Prototype](https://www.figma.com/proto/7RyTUBAMP9H0vqOYwsLbF3/Untitled?page-id=68%3A30&node-id=128-254&p=f&viewport=538%2C105%2C0.35&t=EpQiA5zIVrMJLCj7-1&scaling=contain&content-scaling=fixed&starting-point-node-id=117%3A1832)**

---

## 🚧 Project Status

**Currently in design phase.** Figma prototype is complete — development will begin shortly.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with intention · Expense Tracker © 2025</p>
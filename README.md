<div align="center">
  <h1 align="center">LeavePro - Leave Management System</h1>
  <p align="center">
    A modern, role-based Leave Management System built with React & Tailwind CSS.
    <br />
    <a href="#features"><strong>Explore the features »</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="#">Report Bug</a>
    ·
    <a href="#">Request Feature</a>
  </p>
</div>



---

## 📖 Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Demo Credentials](#-demo-credentials)
- [Folder Structure](#-folder-structure)
- [Contact & Author](#-contact--author)

---

## 🚀 About the Project

**LeavePro** is a lightweight, responsive, and intuitive web application designed to streamline the employee leave application and approval process. It eliminates paperwork by providing two distinct, role-based portals: one for **Employees** to apply and track leaves, and one for **Managers** to review and act on those requests.

Currently, the application operates entirely on the client side, utilizing `localStorage` to persist data seamlessly without requiring a backend server.

---

## ✨ Key Features

### 👨‍💻 Employee Portal
- **Dashboard Overview:** Quick glance at total, used, remaining, and pending leaves.
- **Apply for Leave:** Clean form validation for Casual, Sick, and Earned leaves.
- **Leave History:** Real-time tracking of request statuses (Pending, Approved, Rejected).
- **Leave Balance:** Tabular breakdown of allocated vs. used leaves.

### 👑 Manager Portal
- **Executive Dashboard:** Analytics for total requests and current status metrics.
- **One-Click Actions:** Approve or reject pending requests instantly.
- **Data Persistence:** Processed requests securely update in the browser's `localStorage` and instantly reflect on the employee's dashboard.

---

## 🛠 Tech Stack

* **Frontend:** [React.js](https://reactjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Routing:** [React Router DOM v6](https://reactrouter.com/)
* **State Management:** React Hooks (`useState`, `useEffect`) & Browser `localStorage`

---

## 🚦 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js and npm installed on your machine.
* npm
  ```sh
  npm install npm@latest -g
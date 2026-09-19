import React, { useState, useEffect } from "react";
import mockData from "./data/mockData.json";
import Sidebar from "./components/Slidebar";
import Header from "./components/Header";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import CreateTicket from "./pages/CreateTickets";
import TicketsDetails from "./pages/TicketsDetails";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard"); 
  const [selectedTicket, setSelectedTicket] = useState(null);
  
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem("helpdesk_tickets");
    return saved ? JSON.parse(saved) : mockData.tickets;
  });

  useEffect(() => {
    localStorage.setItem("helpdesk_tickets", JSON.stringify(tickets));
  }, [tickets]);

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar page={page} setPage={setPage} setIsLoggedIn={setIsLoggedIn} />
      <main className="flex-1 flex flex-col">
        <Header page={page} />
        <div className="p-6 flex-1 overflow-y-auto">
          {page === "dashboard" && <Dashboard tickets={tickets} />}
          {page === "list" && <Tickets tickets={tickets} setPage={setPage} setSelectedTicket={setSelectedTicket} />}
          {page === "create" && <CreateTicket tickets={tickets} setTickets={setTickets} setPage={setPage} />}
          {page === "details" && <TicketsDetails selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} tickets={tickets} setTickets={setTickets} setPage={setPage} />}
        </div>
      </main>
    </div>
  );
}
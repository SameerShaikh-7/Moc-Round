import mockData from '../data/mockData.json';

export const getUserName = (id) => {
  const user = mockData.users.find(u => u.id === id);
  return user ? user.name : "Unassigned";
};

export const getStatusColor = (status) => {
  switch(status) {
    case "Open": return "text-blue-700 bg-blue-100 border-blue-200";
    case "In Progress": return "text-yellow-700 bg-yellow-100 border-yellow-200";
    case "Resolved": return "text-green-700 bg-green-100 border-green-200";
    case "Closed": return "text-gray-700 bg-gray-100 border-gray-200";
    default: return "text-gray-700 bg-gray-100";
  }
};

export const getPriorityColor = (priority) => {
  switch(priority) {
    case "High": return "text-red-700 bg-red-100";
    case "Medium": return "text-orange-700 bg-orange-100";
    case "Low": return "text-green-700 bg-green-100";
    default: return "text-gray-700 bg-gray-100";
  }
};
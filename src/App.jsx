import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Users from "./pages/Users";
import Tasks from "./pages/Taskes";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/" index element={<Navigate replace to="dashboard" />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users" element={<Users />} />
        <Route path="/tasks" element={<Tasks />} />
      </Route>
    </Routes>
  );
}

export default App;

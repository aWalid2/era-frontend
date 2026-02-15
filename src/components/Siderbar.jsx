import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBriefcase,
  FiUsers,
  FiCheckSquare,
  FiLogOut,
  FiUser,
} from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    navigate("/login");
  };

  const linkClass = "flex items-center gap-3 p-2 rounded text-white w-full";

  const hoverBg = {
    backgroundColor: "rgba(255,255,255,0.5)",
  };

  return (
    <>
      {/* ================= Mobile Navbar ================= */}
      <div className="bg-primary relative z-40 flex h-16 flex-row-reverse items-center justify-between gap-3 px-4 shadow-md lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="shrink-0 rounded-md text-white"
        >
          <FiMenu size={26} />
        </button>
        <h1 className="text-lg font-bold text-white">Bower Boosting</h1>
      </div>

      {/* ================= Desktop Sidebar ================= */}
      <motion.div
        animate={{ width: isOpen ? 400 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-primary hidden h-screen flex-col justify-between overflow-hidden shadow-md lg:flex"
      >
        <div>
          {/* Header */}
          <div className="flex flex-row-reverse items-center justify-between border-b border-white/10 px-5 py-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer rounded-md p-2 text-2xl text-white"
            >
              {isOpen ? <FiMenu /> : <FiMenu />}
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="px-2 py-4 text-2xl font-bold text-white"
                >
                  Bower Boosting
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Links */}
          <nav className="mt-4 flex flex-col gap-2 px-3">
            <motion.div
              whileHover={hoverBg}
              transition={{ duration: 0.2 }}
              className="rounded px-2 py-3 text-xl"
            >
              <Link to="/profile" className={linkClass}>
                <FiUser />
                {isOpen && "Profile"}
              </Link>
            </motion.div>
            <motion.div
              whileHover={hoverBg}
              transition={{ duration: 0.2 }}
              className="rounded px-2 py-3 text-xl"
            >
              <Link to="/" className={linkClass}>
                <FiHome />
                {isOpen && "Dashboard"}
              </Link>
            </motion.div>

            <motion.div
              whileHover={hoverBg}
              transition={{ duration: 0.2 }}
              className="rounded px-2 py-3 text-xl"
            >
              <Link to="/projects" className={linkClass}>
                <FiBriefcase />
                {isOpen && "Projects"}
              </Link>
            </motion.div>

            <motion.div
              whileHover={hoverBg}
              transition={{ duration: 0.2 }}
              className="rounded px-2 py-3 text-xl"
            >
              <Link to="/users" className={linkClass}>
                <FiUsers />
                {isOpen && "Users"}
              </Link>
            </motion.div>

            <motion.div
              whileHover={hoverBg}
              transition={{ duration: 0.2 }}
              className="rounded px-2 py-3 text-xl"
            >
              <Link to="/tasks" className={linkClass}>
                <FiCheckSquare />
                {isOpen && "Tasks"}
              </Link>
            </motion.div>
          </nav>
        </div>

        {/* Logout */}
        <div className="mb-4 px-3">
          <motion.button
            whileHover={hoverBg}
            transition={{ duration: 0.2 }}
            onClick={handleLogout}
            className="flex w-full cursor-pointer items-center gap-3 rounded px-4 py-4 text-lg text-white"
          >
            <FiLogOut className="p-0" />
            {isOpen && "Log Out"}
          </motion.button>
        </div>
      </motion.div>

      {/* ================= Mobile Sidebar ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-primary fixed top-0 left-0 z-50 h-full w-64 shadow-xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <span className="px-3 py-3 text-lg font-bold text-white">
                  Bower Boosting
                </span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <FiX size={24} className="cursor-pointer text-white" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 p-4">
                <motion.div
                  whileHover={hoverBg}
                  transition={{ duration: 0.2 }}
                  className="rounded px-2 py-2 text-lg"
                >
                  <Link to="/" className={linkClass}>
                    <FiHome /> Dashboard
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={hoverBg}
                  transition={{ duration: 0.2 }}
                  className="rounded px-2 py-2 text-lg"
                >
                  <Link to="/projects" className={linkClass}>
                    <FiBriefcase /> Projects
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={hoverBg}
                  transition={{ duration: 0.2 }}
                  className="rounded px-2 py-2 text-lg"
                >
                  <Link to="/users" className={linkClass}>
                    <FiUsers /> Users
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={hoverBg}
                  transition={{ duration: 0.2 }}
                  className="rounded px-2 py-2 text-lg"
                >
                  <Link to="/tasks" className={linkClass}>
                    <FiCheckSquare /> Tasks
                  </Link>
                </motion.div>
              </nav>

              <div className="border-t border-white/10 p-4">
                <motion.button
                  whileHover={hoverBg}
                  transition={{ duration: 0.2 }}
                  onClick={handleLogout}
                  className="flex w-full cursor-pointer items-center gap-3 rounded p-3 text-white"
                >
                  <FiLogOut /> Log Out
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;

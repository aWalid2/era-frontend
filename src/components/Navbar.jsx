import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

function AppNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%", transition: { duration: 0.4 } },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-30 flex h-16 items-center justify-between bg-[#3e2723] px-6 py-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">bower bosting</div>

      {/* Mobile Icons */}
      <div className="relative z-[9999] flex items-center space-x-3 lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FiX size={28} className="text-white" />
          ) : (
            <FiMenu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden items-center space-x-6 lg:flex">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">
            Login
          </Link>
        </li>
        <li>
          <Link to="/About" className="text-white hover:text-gray-300">
            Abou US
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="fixed top-0 right-0 z-50 flex h-screen w-3/4 flex-col space-y-6 bg-[#3e2723] px-6 pt-20 sm:w-1/2"
            >
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex justify-center text-2xl font-bold text-white hover:text-gray-300"
              >
                bower boosting
              </Link>
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-white hover:text-gray-300"
              >
                Login
              </Link>

              <Link
                to="/About"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-white hover:text-gray-300"
              >
                Abou US
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default AppNavbar;

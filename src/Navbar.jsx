import { useState } from "react"
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 px-8 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <FaGlobe className="text-green-400 text-xl" />
          <span className="text-white font-bold text-xl">Afrolytics</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-zinc-400 text-sm">
          <Link to="/" className="hover:text-green-400 transition-colors">Dashboard</Link>
          <Link to="/about" className="hover:text-green-400 transition-colors">About</Link>
          <a href="https://github.com/NoCapBen/Afrolytics" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">GitHub</a>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-zinc-400 text-sm">
          <Link to="/" className="hover:text-green-400 transition-colors" onClick={() => setOpen(false)}>Dashboard</Link>
          <Link to="/about" className="hover:text-green-400 transition-colors" onClick={() => setOpen(false)}>About</Link>
          <a href="https://github.com/NoCapBen/Afrolytics" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">GitHub</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
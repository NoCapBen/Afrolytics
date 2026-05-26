import { FaGlobe } from "react-icons/fa"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <FaGlobe className="text-green-400 text-xl" />
        <span className="text-white font-bold text-xl">Afrolytics</span>
      </Link>
      <div className="flex items-center gap-6 text-zinc-400 text-sm">
        <Link to="/" className="hover:text-green-400 transition-colors">Dashboard</Link>
        <Link to="/about" className="hover:text-green-400 transition-colors">About</Link>
        <a href="https://github.com/NoCapBen/Afrolytics" target="_blank" className="hover:text-green-400 transition-colors">GitHub</a>
      </div>
    </nav>
  )
}

export default Navbar
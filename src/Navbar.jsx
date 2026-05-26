import { FaGlobe } from "react-icons/fa"

function Navbar() {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FaGlobe className="text-green-400 text-xl" />
        <span className="text-white font-bold text-xl">Afrolytics</span>
      </div>
      <div className="flex items-center gap-6 text-zinc-400 text-sm">
        <a href="#" className="hover:text-green-400 transition-colors">Dashboard</a>
        <a href="#" className="hover:text-green-400 transition-colors">Countries</a>
        <a href="#" className="hover:text-green-400 transition-colors">About</a>
        <a href="https://github.com/NoCapBen/Afrolytics" target="_blank" className="hover:text-green-400 transition-colors">GitHub</a>
      </div>
    </nav>
  )
}

export default Navbar
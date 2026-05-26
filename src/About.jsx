import { motion } from "framer-motion"
import Navbar from "./Navbar"

function About() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">About Afrolytics</h2>
          <p className="text-zinc-400 mb-8">Open-source African business and economic intelligence</p>
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mb-6">
            <h3 className="text-green-400 font-semibold mb-3">What is Afrolytics?</h3>
            <p className="text-zinc-300 leading-relaxed">
              Afrolytics is a free, open-source dashboard that visualizes economic and business data
              across African countries. It tracks GDP growth, inflation, tourism, startup funding,
              and more — all in one clean interface.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mb-6">
            <h3 className="text-green-400 font-semibold mb-3">Tech Stack</h3>
            <ul className="text-zinc-300 space-y-2">
              <li>React + Vite</li>
              <li>TailwindCSS</li>
              <li>Recharts</li>
              <li>Framer Motion</li>
              <li>Deployed on Vercel</li>
            </ul>
          </div>
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mb-6">
            <h3 className="text-green-400 font-semibold mb-3">Roadmap</h3>
            <ul className="text-zinc-300 space-y-2">
              <li>Live World Bank API data</li>
              <li>AI-generated country reports</li>
              <li>Interactive Africa map</li>
              <li>User authentication</li>
              <li>Mobile app</li>
            </ul>
          </div>
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <h3 className="text-green-400 font-semibold mb-3">Contribute</h3>
            <p className="text-zinc-300 mb-4">Afrolytics is open source and welcomes contributors!</p>
            
  <a href="https://github.com/NoCapBen/Afrolytics"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-full text-sm font-medium transition-all"
            >
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

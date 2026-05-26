import { useState } from "react"
import { countries } from "./data"
import { useWorldBank } from "./useWorldBank"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  LineChart, Line
} from "recharts"
import { motion } from "framer-motion"
import Navbar from "./Navbar"

function StatCard({ label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-zinc-900 rounded-2xl p-5 flex flex-col gap-2 border border-zinc-800"
    >
      <p className="text-zinc-400 text-sm">{label}</p>
      <p className="text-white text-2xl font-bold">{value}</p>
    </motion.div>
  )
}

function App() {
  const [selected, setSelected] = useState(countries[0])
  const { data: liveData, loading } = useWorldBank(selected.name)

  const display = liveData ? { ...selected, ...liveData } : selected

  const chartData = countries.map((c) => ({
    name: c.name,
    GDP: c.gdpGrowth,
  }))

  const fundingData = countries.map((c) => ({
    name: c.name,
    Funding: parseFloat((c.startupFunding / 1e9).toFixed(2)),
  }))

  const tourismData = countries.map((c) => ({
    name: c.name,
    Tourism: c.tourism,
  }))

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="p-8">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white">Dashboard</h2>
          <p className="text-zinc-400 mt-1">Select a country to explore its economic data</p>
        </motion.div>

        {/* Country Selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-3 flex-wrap mb-8"
        >
          {countries.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelected(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selected.name === c.name
                  ? "bg-green-500 text-white"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {c.name}
            </button>
          ))}
        </motion.div>

        {/* Stats Cards */}
        {loading ? (
          <div className="text-zinc-400 mb-8">Loading live data...</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard label="GDP Growth" value={`${display.gdpGrowth}%`} delay={0} />
            <StatCard label="Inflation" value={`${display.inflation}%`} delay={0.1} />
            <StatCard label="Tourism Visitors" value={display.tourism.toLocaleString()} delay={0.2} />
            <StatCard label="Currency" value={display.currency} delay={0.3} />
          </div>
        )}

        {/* GDP Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-zinc-900 rounded-2xl p-6 mb-8 border border-zinc-800"
        >
          <p className="text-green-400 text-sm font-semibold mb-4">GDP Growth by Country (%)</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="name" stroke="#71717a" tick={{ fontSize: 12 }} />
              <YAxis stroke="#71717a" tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#18181b", border: "none", borderRadius: "8px" }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar dataKey="GDP" fill="#22c55e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Startup Funding Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-zinc-900 rounded-2xl p-6 mb-8 border border-zinc-800"
        >
          <p className="text-green-400 text-sm font-semibold mb-4">Startup Funding by Country (USD Billions)</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={fundingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="name" stroke="#71717a" tick={{ fontSize: 12 }} />
              <YAxis stroke="#71717a" tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#18181b", border: "none", borderRadius: "8px" }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar dataKey="Funding" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Tourism Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-zinc-900 rounded-2xl p-6 mb-8 border border-zinc-800"
        >
          <p className="text-green-400 text-sm font-semibold mb-4">Tourism Visitors by Country</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={tourismData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="name" stroke="#71717a" tick={{ fontSize: 12 }} />
              <YAxis stroke="#71717a" tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#18181b", border: "none", borderRadius: "8px" }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar dataKey="Tourism" fill="#a855f7" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Inflation Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-zinc-900 rounded-2xl p-6 mb-8 border border-zinc-800"
        >
          <p className="text-green-400 text-sm font-semibold mb-4">
            Inflation Trend — {display.name} (2019–2024)
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={display.inflationHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="year" stroke="#71717a" tick={{ fontSize: 12 }} />
              <YAxis stroke="#71717a" tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#18181b", border: "none", borderRadius: "8px" }}
                labelStyle={{ color: "#fff" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={{ fill: "#f59e0b", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* AI Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800"
        >
          <p className="text-green-400 text-sm font-semibold mb-2">
            AI Summary {loading ? "" : "(Live Data)"}
          </p>
          <p className="text-zinc-300">
            {display.name} is showing a GDP growth of {display.gdpGrowth}% with an inflation rate of {display.inflation}%.
            The tourism sector recorded {display.tourism.toLocaleString()} visitors, and startup funding reached $
            {(display.startupFunding / 1e9).toFixed(2)}B USD.
          </p>
        </motion.div>

      </div>
    </div>
  )
}

export default App
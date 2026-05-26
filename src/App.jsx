import { useState } from "react"
import { countries } from "./data"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts"

function StatCard({ label, value }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-5 flex flex-col gap-2">
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  )
}

function App() {
  const [selected, setSelected] = useState(countries[0])

  const chartData = countries.map((c) => ({
    name: c.name,
    GDP: c.gdpGrowth,
  }))

  const fundingData = countries.map((c) => ({
    name: c.name,
    Funding: parseFloat((c.startupFunding / 1e9).toFixed(2)),
  }))

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-400">Afrolytics</h1>
        <p className="text-gray-400 mt-1">African Business & Economic Intelligence</p>
      </div>

      {/* Country Selector */}
      <div className="flex gap-3 flex-wrap mb-8">
        {countries.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelected(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selected.name === c.name
                ? "bg-green-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="GDP Growth" value={`${selected.gdpGrowth}%`} />
        <StatCard label="Inflation" value={`${selected.inflation}%`} />
        <StatCard label="Tourism" value={selected.tourism.toLocaleString()} />
        <StatCard label="Currency" value={selected.currency} />
      </div>

      {/* GDP Chart */}
      <div className="bg-gray-800 rounded-2xl p-6 mb-8">
        <p className="text-green-400 text-sm font-semibold mb-4">GDP Growth by Country (%)</p>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" tick={{ fontSize: 12 }} />
            <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar dataKey="GDP" fill="#22c55e" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Startup Funding Chart */}
      <div className="bg-gray-800 rounded-2xl p-6 mb-8">
        <p className="text-green-400 text-sm font-semibold mb-4">Startup Funding by Country (USD Billions)</p>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={fundingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" tick={{ fontSize: 12 }} />
            <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar dataKey="Funding" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* AI Summary Box */}
      <div className="bg-gray-800 rounded-2xl p-6">
        <p className="text-green-400 text-sm font-semibold mb-2">AI Summary</p>
        <p className="text-gray-300">
          {selected.name} is showing a GDP growth of {selected.gdpGrowth}% with an inflation rate of {selected.inflation}%.
          The tourism sector recorded {selected.tourism.toLocaleString()} visitors, and startup funding reached ${(selected.startupFunding / 1e9).toFixed(2)}B.
        </p>
      </div>

    </div>
  )
}

export default App
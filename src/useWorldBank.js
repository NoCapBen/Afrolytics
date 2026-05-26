import { useState, useEffect } from "react"

const fetchIndicator = async (countryCode, indicator) => {
  const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?format=json&mrv=1`
  const res = await fetch(url)
  const data = await res.json()
  return data[1]?.[0]?.value ?? null
}

const fetchHistory = async (countryCode, indicator) => {
  const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?format=json&mrv=6&date=2019:2024`
  const res = await fetch(url)
  const data = await res.json()
  return (data[1] || [])
    .reverse()
    .map((d) => ({ year: d.date, value: parseFloat(d.value?.toFixed(2)) || 0 }))
}

export function useWorldBank(countryCode) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!countryCode) return
    setLoading(true)
    Promise.all([
      fetchIndicator(countryCode, "NY.GDP.MKTP.KD.ZG"),
      fetchIndicator(countryCode, "FP.CPI.TOTL.ZG"),
      fetchIndicator(countryCode, "ST.INT.ARVL"),
      fetchHistory(countryCode, "FP.CPI.TOTL.ZG"),
    ]).then(([gdp, inflation, tourism, inflationHistory]) => {
      setData({
        gdpGrowth: parseFloat(gdp?.toFixed(1)) || 0,
        inflation: parseFloat(inflation?.toFixed(1)) || 0,
        tourism: tourism || 0,
        inflationHistory,
      })
      setLoading(false)
    })
  }, [countryCode])

  return { data, loading }
}
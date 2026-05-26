import { useState, useEffect } from "react"

export function useExchangeRate(currency) {
  const [rate, setRate] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!currency) return
    setLoading(true)
    fetch(`https://open.er-api.com/v6/latest/USD`)
      .then((res) => res.json())
      .then((data) => {
        const r = data.rates[currency]
        setRate(r ? parseFloat(r.toFixed(2)) : null)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [currency])

  return { rate, loading }
}
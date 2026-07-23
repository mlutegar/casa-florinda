import { useState, useEffect } from 'react'

export function useAvailability(slug) {
  const [blockedRanges, setBlockedRanges] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/availability.json')
      .then((r) => r.json())
      .then((data) => {
        setBlockedRanges(data[slug] || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [slug])

  /**
   * Verifica se um intervalo de datas está disponível.
   * @param {string} checkin  'YYYY-MM-DD'
   * @param {string} checkout 'YYYY-MM-DD'
   */
  const isRangeAvailable = (checkin, checkout) => {
    const start = new Date(checkin)
    const end = new Date(checkout)
    return !blockedRanges.some(({ from, to }) => {
      const bStart = new Date(from)
      const bEnd = new Date(to)
      return start < bEnd && end > bStart
    })
  }

  return { isRangeAvailable, loading }
}

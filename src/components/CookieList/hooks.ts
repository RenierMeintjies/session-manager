import { useEffect, useState } from 'react'
import chromeApi from '../../api/chrome'

// Cookie hooks

export const useCookies = () => {
  const [cookies, setCookies] = useState<any>([])
  const domain = useDomain()

  const fetchCookies = () => {
    chromeApi.fetchCookies(domain).then((results: object) => {
      setCookies(results)
    })
  }

  useEffect(() => {
    fetchCookies()
    chromeApi.onCookieChange(fetchCookies)
  }, [domain])

  return cookies
}

export const useDomain = () => {
  const [domain, setDomain] = useState<string>('')

  useEffect(() => {
    chromeApi.fetchDomain().then((result: string) => {
      setDomain(result)
    })
  }, [])

  return domain
}

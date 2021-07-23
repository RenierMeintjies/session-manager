import { useEffect, useState } from 'react'
import chromeApi from '../../api/chrome/'

// Cookie hooks

export const useCookies = () => {
  const [cookies, setCookies] = useState<any>([])
  const domain = useDomain()

  const fetchCookies = () => {
    chromeApi.fetchCookies(domain).then((results: any) => {
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
  const [domain, setDomain] = useState<any>('')

  useEffect(() => {
    chromeApi.fetchDomain().then((result: any) => {
      setDomain(result)
    })
  }, [])
  return domain
}

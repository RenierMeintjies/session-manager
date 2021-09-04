import { useEffect, useState } from 'react'
import chromeApi from '../api/chrome'

// Cookie hooks

export const useCookies = (overview = false) => {
  const [cookies, setCookies] = useState<any>([])
  const domain = useDomain()

  const fetchCookies = () => {
    chromeApi.fetchCookies(!overview ? domain : undefined).then((results: any) => {
      setCookies(results)
    })
  }

  useEffect(() => {
    fetchCookies()
    chromeApi.onCookieChange(fetchCookies)
  }, [domain, overview])
  return cookies
}

export const useDomain = () => {
  const [domain, setDomain] = useState<any>('')

  useEffect(() => {
    chromeApi.fetchDomain().then(result => {
      setDomain(result)
    })
  }, [])
  return domain
}

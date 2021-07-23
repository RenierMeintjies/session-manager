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

  useEffect(
    () => {
      chromeApi.onCookieChange(fetchCookies)
      // TODO why is this here? It makes TS and me cry :(
    } /* [domain] */
  )
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

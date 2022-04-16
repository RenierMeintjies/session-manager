import { useEffect, useState } from 'react'
import chromeApi from '../api/chrome'
import { groupBy } from 'lodash'

// Cookie hooks
export const useSiteCookies = (domain: string) => {
  const cookies = useAllCookies(true)
  const [siteCookies, setSiteCookies] = useState([])

  useEffect(() => {
    if (cookies.length) {
      setSiteCookies(cookies[domain])
    }
  }, [cookies, domain])

  return siteCookies
}

export const useAllCookies = (groupByDomain = false) => {
  const [cookies, setCookies] = useState<any>([])

  const fetchCookies = () => {
    console.log('Fetch cookies executed')
    chromeApi.fetchCookies(undefined).then((results: any) => {
      const _cookies = groupByDomain ? groupBy(results, 'domain') : results
      setCookies(_cookies)
    })
  }

  useEffect(() => {
    fetchCookies()
    chromeApi.onCookieChange(fetchCookies)
  }, [groupByDomain])

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

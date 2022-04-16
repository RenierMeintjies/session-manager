const jsonCookiesUrl = 'http://localhost:3001/cookies'

const deleteCookie = (cookie: any) => {
  httpRequest('delete', jsonCookiesUrl + `/${cookie.id}`)
  dispatchCookiesChangedEvent()
}

const fetchCookies = async (domain: any) => {
  return (await httpRequest('get', jsonCookiesUrl)).json()
}

const fetchDomain = async () => {
  return new Promise(resolve => {
    resolve('domain-1.com')
  })
}

const onCookieChange = (onChange: Function) => {
  window.addEventListener('onCookieChange', () => {
    onChange()
  })
}

// private

const dispatchCookiesChangedEvent = () => {
  window.dispatchEvent(new CustomEvent('onCookieChange', {}))
}

const httpRequest = async (method: string, url: string) => {
  const response = await fetch(url, {
    method: method.toUpperCase(),
    headers: {
      'Content-type': 'application/json',
    },
  })
  return response
}

export { fetchDomain, fetchCookies, deleteCookie, onCookieChange }

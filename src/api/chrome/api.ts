/*global chrome*/

const deleteCookie = (cookie: any) => {
  // TODO validate cookies actually deleted
  chrome.cookies.remove({
    name: cookie.name,
    url: cookieUrl(cookie),
    storeId: cookie.storeId,
  })
}

const fetchCookies = async (domain: any) => {
  return await chrome.cookies.getAll({ domain: domain })
}

const fetchDomain = async () => {
  const currentTabs = await chrome.tabs.query({ active: true, currentWindow: true })
  const url = new URL(currentTabs[0].url!).hostname
  return baseDomain(url)
}

const onCookieChange = (onChange: Function) => {
  chrome.cookies.onChanged.addListener((changeInfo) => {
    onChange(changeInfo)
  })
}

// private | extract these to common utils?

const baseDomain = (url: string) => {
  const ar = url.split('.')
  return ar.slice(-2).join('.')
}

const cookieUrl = (cookie: any) => {
  let domain = cookie.domain
  if (domain[0] === '.') {
    domain = domain.substring(1)
  }
  return 'http://' + domain
}

export default { deleteCookie, fetchCookies, fetchDomain, onCookieChange }

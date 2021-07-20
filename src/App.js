/*global chrome*/
import './App.css'
import { useEffect, useState } from 'react'
import EditIcon from './components/EditCookie'
import { CookieValue } from './components/CookieValue'

import { _cookies } from './seed'

const App = () => {
  const [cookies, setCookies] = useState(_cookies)
  const [domain, setDomain] = useState('')

  const fetchCookies = () => {
    if (domain) {
      // chrome.cookies.getAll({ domain: domain }).then((result) => {
      //   setCookies(result)
      // })
    }
  }

  const fetchDomain = () => {
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //   const url = new URL(tabs[0].url).hostname
    //   const domain = baseDomain(url)
    //   setDomain(domain)
    // })
  }

  // useEffect(fetchDomain, [])

  // useEffect(fetchCookies, [domain])

  const baseDomain = (url) => {
    const ar = url.split('.')
    return ar.slice(-2).join('.')
  }

  const ListCookies = () => {
    return cookies.map((cookie, index) => (
      <tr key={`cookies-${cookie.domain}-${index}`}>
        <td>{cookie.domain}</td>
        <td>{cookie.name}</td>
        <td>
          <span style={{ display: 'flex', flexDirection: 'row' }}>
            <CookieValue value={cookie.value} />
            <EditIcon />
          </span>
        </td>
      </tr>
    ))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Domain: </h4>
        <table>
          <tr>
            <th>Domain</th>
            <th>Key</th>
            <th>Value</th>
          </tr>
          <ListCookies />
        </table>
      </header>
    </div>
  )
}

export default App

/*global chrome*/
import './App.css'
// import _cookies from './seed.js'
import { useEffect, useState } from 'react'

const App = () => {
  const [cookies, setCookies] = useState([])
  const [domain, setDomain] = useState()

  const fetchCookies = () => {
    if (domain) {
      chrome.cookies.getAll({ domain: domain }).then((result) => {
        setCookies(result)
      })
    }
  }

  const fetchDomain = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const url = new URL(tabs[0].url).hostname
      const domain = baseDomain(url)
      setDomain(domain)
    })
  }

  useEffect(fetchDomain, [])

  useEffect(fetchCookies, [domain])

  const baseDomain = (url) => {
    const ar = url.split('.')
    return ar.slice(-2).join('.')
  }

  const togglePassword = (el) => {
    const type = el.target.parentElement.firstElementChild.type
    let newType = type === 'password' ? 'text' : 'password'
    el.target.parentElement.firstElementChild.type = newType
  }

  const ListCookies = () => {
    return cookies.map((cookie, index) => (
      <tr>
        <td>{cookie.domain}</td>
        <td>{cookie.name}</td>
        <td>
          <span style={{ display: 'flex', flexDirection: 'row' }}>
            <input type="password" value={cookie.value} />
            <button style={{ marginLeft: '3px' }} onClick={togglePassword}>
              X
            </button>
          </span>
        </td>
      </tr>
    ))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Domain: {domain}</h4>
        <table>
          <tr>
            <th>Domain</th>
            <th>Key</th>
            <th>Value</th>
          </tr>
          <ListCookies></ListCookies>
        </table>
      </header>
    </div>
  )
}

export default App

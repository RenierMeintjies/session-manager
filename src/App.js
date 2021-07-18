/*global chrome*/
import './App.css'
import { useEffect, useState } from 'react'

const App = () => {
  const [cookies, setCookies] = useState([])
  const [domain, setDomain] = useState()

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var url = new URL(tabs[0].url).hostname
      let domain = url.replace('www.', '.')
      setDomain(domain)
    })
  }, [])

  useEffect(() => {
    chrome.cookies.getAll({ domain: domain }).then((result) => {
      setCookies(result)
    })
  }, [domain])

  const ListCookies = () => {
    return cookies.map((cookie) => (
      <tr>
        <td>{cookie.domain}</td>
        <td>{cookie.name}</td>
        <td>{cookie.value}</td>
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

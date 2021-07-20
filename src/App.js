/*global chrome*/
import './App.css'
import { useEffect, useState } from 'react'
import { CookieValue } from './components/CookieValue'
import { CopyButton } from './components/CopyButton'
import DeleteButton from './components/DeleteButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditButton from './components/EditCookie'

import { _cookies } from './seed'

const App = () => {
  const [cookies, setCookies] = useState([])
  const [domain, setDomain] = useState('')

  const fetchCookies = () => {
    if (domain) {
      chrome.cookies.getAll({ domain: domain }).then((result) => {
        setCookies(result)
        console.log(result)
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

  const deleteCookie = (cookie) => {
    chrome.cookies
      .remove({
        name: cookie.name,
        url: 'http://' + domain,
        storeId: cookie.storeId,
      })
      .then((result) => {
        console.log('successfully deleted cookie', result)
        fetchCookies()
      })
  }

  const handleCookieDelete = (cookie) => {
    if (window.confirm(`Are you sure you want to delete all cookies for '${domain}'?`)) {
      deleteCookie(cookie)
    }
  }

  const handleDeleteAll = () => {
    if (window.confirm(`Are you sure you want to delete all cookies for '${domain}'?`)) {
      cookies.forEach((cookie) => {
        deleteCookie(cookie)
      })
    }
  }

  const editCookie = (cookie) => {
    chrome.cookies.set({
      name: cookie.name,
      url: 'http://' + domain,
    })
  }

  const handleCookieEdit = (cookie) => {
    editCookie(cookie)
  }

  const handleInputChange = (value, index) => {
    let newCookies = [...cookies]
    newCookies[index]['value'] = value
    setCookies(newCookies)
  }

  const ListCookies = () => {
    return cookies.map((cookie, index) => (
      <tr key={`cookies-${cookie.domain}-${index}`}>
        <td>{cookie.domain}</td>
        <td>{cookie.name}</td>
        <td>
          <span style={{ display: 'flex', flexDirection: 'row' }}>
            <CookieValue value={cookie.value} index={index} onInputChange={handleInputChange} />
            <EditButton cookieIndex={cookie} editHandler={handleCookieEdit} />
            <CopyButton value={cookie.value} />
            <DeleteButton cookieIndex={cookie} deleteHandler={handleCookieDelete} />
          </span>
        </td>
      </tr>
    ))
  }

  return (
    <div className="App">
      <header className="App-header">
        <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <h4>Domain: {domain}</h4>
          <DeleteIcon onClick={handleDeleteAll} />
        </span>
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

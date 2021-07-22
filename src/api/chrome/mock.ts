var _COOKIES = [
  { domain: 'github.com', name: 'cookie 1', value: '134235421352312374' },
  { domain: 'github.com', name: 'cookie 2', value: '32471342273355478398' },
  { domain: 'github.com', name: 'cookie 3', value: '2114247421342352234532' },
  { domain: 'github.com', name: 'cookie 4', value: '3246237234134235536345' },
  { domain: 'stackoverflow.com', name: 'cookie 5', value: '3425129350223453863' },
  { domain: 'stackoverflow.com', name: 'cookie 6', value: '1564564563212343547' },
  { domain: 'stackoverflow.com', name: 'cookie 7', value: '2345432543262364867' },
  { domain: 'stackoverflow.com', name: 'cookie 8', value: '6234623462346324811' },
  { domain: 'stackoverflow.com', name: 'cookie 9', value: '6342634263246342623' },
]

const deleteCookie = (cookie: any) => {
  return new Promise((resolve) => {
    resolve(true)
  })
}

const fetchCookies = async (domain: any) => {
  return new Promise((resolve) => {
    resolve(_COOKIES)
  })
}

const fetchDomain = async () => {
  return new Promise((resolve) => {
    resolve('github.com')
  })
}

const onCookieChange = (onChange: Function) => {
  return new Promise((resolve) => {
    resolve(onChange())
  })
}

export default { deleteCookie, fetchCookies, fetchDomain, onCookieChange }

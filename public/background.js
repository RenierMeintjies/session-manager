/*global chrome*/
const activeIcon = {
  path: {
    16: '/images/actual-cookie-cog-16.png',
    32: '/images/actual-cookie-cog-32.png',
    48: '/images/actual-cookie-cog-48.png',
    128: '/images/actual-cookie-cog-128.png',
  },
}

const passiveIcon = {
  path: {
    16: '/images/greyscale-cookie-cog-16.png',
    32: '/images/greyscale-cookie-cog-32.png',
    48: '/images/greyscale-cookie-cog-48.png',
    128: '/images/greyscale-cookie-cog-128.png',
  },
}

// Listen for tab change, and update icon accordingly
// Set greyscale icon if tab has no cookies
chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.query({ active: true, currentWindow: true }, currentTabs => {
    const domain = new URL(currentTabs[0].url).hostname
    chrome.cookies.getAll({ domain: domain }, cookies => {
      chrome.action.setIcon(cookies.length ? activeIcon : passiveIcon)
    })
  })
})

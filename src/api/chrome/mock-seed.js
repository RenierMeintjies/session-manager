// @ts-nocheck
module.exports = () => {
  const data = { cookies: [] }
  for (let i = 1; i < 12; i++) {
    const isLoggedInSeed = Math.floor(Math.random() * 11)
    data.cookies.push({
      id: i,
      name: `cookiethisisatestignorefornowpleasethanks-${i}`,
      domain: `domain-${i}.com`,
      value: Math.random().toString(36).substring(2),
      date: new Date(),
      isLoggedIn: isLoggedInSeed > 5 ? true : false,
    })
  }
  return data
}

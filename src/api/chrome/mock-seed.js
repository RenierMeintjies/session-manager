// @ts-nocheck
module.exports = () => {
  const data = { cookies: [] }
  for (let i = 1; i < 12; i++) {
    data.cookies.push({
      id: i,
      name: `cookie-${i}`,
      domain: `domain-${i}.com`,
      value: Math.random().toString(36).substring(2),
    })
  }
  return data
}

let getData = async (date, language) => {
  let api = `https://api.tvmaze.com/schedule?country=${language}&date=${date}`
  let res = fetch(api)
  return res
}

export default getData

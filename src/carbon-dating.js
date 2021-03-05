// module.exports = function dateSample(sample) {
//   const MODERN_ACTIVITY = 15 
//   const HALF_LIFE_PERIOD = 5730

//   if(!sample || !sample !== 'string' || !+sample || sample < 1 || sample > 15) return false

//   const rate = Math.LN2 / HALF_LIFE_PERIOD
//   const years = Math.log(MODERN_ACTIVITY / sample) / rate

//   return Math.ceil(years)

  

module.exports = function dateSample(acv) {

  const MODERN_ACTIVITY = 15
  const HALF_LIFE_PERIOD = 5730

  if (typeof acv !== 'string' || !+acv || acv > 15 || acv < 1) {
    return false
  } 

  const rate = Math.LN2 / HALF_LIFE_PERIOD
  const time = Math.log(MODERN_ACTIVITY / acv) / rate
  return Math.ceil(time)
}

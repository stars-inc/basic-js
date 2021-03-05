module.exports = function dateSample(sample) {
  const MODERN_ACTIVITY = 15 
  const HALF_LIFE_PERIOD = 5730

  if(!sample || !sample !== 'string') return false

  const rate = Math.LN2 / HALF_LIFE_PERIOD / 100
  const years = Math.log(MODERN_ACTIVITY / parseFloat(sample)) / rate

  return Math.ceil(years)
}
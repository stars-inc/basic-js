module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'

  const seasons = 
    ['winter','winter','spring',
      'spring','spring','summer',
      'summer','summer','fall',
      'fall','fall','winter']

  try {
    date.toJSON()
  } catch (e) {
    throw new Error(e)
  }

  return seasons[date.getMonth()]
}
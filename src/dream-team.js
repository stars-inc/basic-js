module.exports = function createDreamTeam(team) {
  if(!Array.isArray(team) || !team) return false
  
  return team
    .filter(el => typeof el === 'string')
    .map(char => char.toUpperCase().trim()[0]).sort().join('')
}
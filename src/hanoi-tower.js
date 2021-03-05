module.exports = function calculateHanoi(diskNumber, turnSpeed) {
  const turns = Math.pow(2, diskNumber) - 1
  const seconds = Math.floor((3600 / turnSpeed) * turns)
  const result = {turns, seconds}

  return result
}
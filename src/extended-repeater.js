module.exports = function repeater(str, options) {
  const {repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'} = options

  let first = [], second = []

  const strArr = first.fill(str, repeatTimes)
  const strDev = second.fill(addition, additionRepeatTimes).join(additionSeparator)

  return strArr.map(el => el + strDev).join(separator)

  // processing...
}
  
module.exports = function repeater(str, options) {
  options.addition = options.addition || ''

  const first = [], second = []

  const times = options.repeatTimes || 1
  const addTimes = options.additionRepeatTimes || 1

  for(let i = 0; i < times; i++) {
    first.push(str)
  }

  for(let i = 0; i < addTimes; i++) {
    second.push(options.addition)
  }

  const secondStr = second.join(options.additionSeparator || '|')
  const concat = first.map(el => el + secondStr).join(options.separator || '+')

  return concat
} 
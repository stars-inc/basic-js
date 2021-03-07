module.exports = function repeater(str, options) {
  options.repeatTimes = options.repeatTimes || 1
  options.separator = options.separator || '+'
  options.addition = options.addition || ''
  options.additionTimes = options.additionTimes || 1
  options.additionSeparator = options.additionSeparator || '||'
  
  const first = [], second = []

  const times = options.repeatTimes
  const addTimes = options.additionRepeatTimes

  for(let i = 0; i < times; i++) {
    first.push(str)
  }

  for(let i = 0; i < addTimes; i++) {
    second.push(options.addition)
  }

  const secondStr = second.join(options.additionSeparator)
  const concat = first.map(el => el + secondStr).join(options.separator)

  return concat
} 
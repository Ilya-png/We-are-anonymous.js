const onlyOdds = number => {
  return number.filter(number2 => {
      return number2 % 2 == 1
  })
}

const onlyEvens = number => {
  return number.filter(number2 => {
    return number2 % 2 == 0
  })
}

const shortNamesOnly = name => {
  return name.filter(name2 => {
    return name2.length < 7
  });
}

const sNames = name => {
  return name.filter(name2 => {
    return name2.startsWith('S')
  })
}

const tripleAll = number => {
  return number.map(number2 => {
    return number2 * 3
    })
}

const negativeValues = number => {
  return number.map(number2 => {
    return number2 > 0 ? number2 * -1 : number2
  })
}

const questionings = string => {
  return string.map(
    string2 => string2 + '?'
    )
} 

const changeToInitials = names => {
  return names.map(name => {
      return name[0] + name[name.indexOf(' ') + 1]
  })
}

const doubleEven = number => {
  return number.map(num => {
    return num % 2 === 0 ? num * 2 : num
  }
)}

const titleCaseNames = names => {
  return names.map(name => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
  })
}

const doubleEveryOther = number => {
  return number.map((num, i) => {
      return i % 2 == 1 ? num * 2 : num
      }
  )}

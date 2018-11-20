// http://kata-log.rocks/roman-numerals-kata
function convert (number) {
    let result = ''
    let decomposedNumber = []
  
    const romanNumerals = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    }
    const romanNumeralsMap = {
        1000: 'M',
        500: 'D',
        100: 'C',
        50: 'L',
        10: 'X',
        5: 'V',
        1: 'I'
      }
  
    for (var romanLetter in romanNumerals) {
      const romanValue = romanNumerals[romanLetter]
      while (number > 0 && (number >= romanValue || number == romanValue - 1)) {
        // Case for 4, 9 , 49, 999,...
        if (number > 1 && number == romanValue - 1) {
          decomposedNumber.push(romanNumerals[romanLetter] - 1)
          number = number - romanValue - 1
        } else {
          decomposedNumber.push(romanNumerals[romanLetter])
          number -= romanValue
        }
      }
    }
  
    return decomposedNumber.reduce(
        (acumulator, value) => {
            if (!romanNumeralsMap[value]) { return acumulator + 'I' + romanNumeralsMap[value + 1] }
            return acumulator + romanNumeralsMap[value]
        }, ''
      )
  }
  
  test('convert: given an arabic number translates it to roman number', () => {
    expect(convert(1)).toBe('I')
    expect(convert(2)).toBe('II')
    expect(convert(3)).toBe('III')
    expect(convert(4)).toBe('IV')
    expect(convert(5)).toBe('V')
    expect(convert(6)).toBe('VI')
    expect(convert(9)).toBe('IX')
    expect(convert(10)).toBe('X')
    expect(convert(11)).toBe('XI')
    expect(convert(20)).toBe('XX')
    expect(convert(49)).toBe('IL')
    expect(convert(50)).toBe('L')
    expect(convert(399)).toBe('CCCIC')
    expect(convert(400)).toBe('CCCC')
    expect(convert(999)).toBe('IM')
    expect(convert(2018)).toBe('MMXVIII')
  })
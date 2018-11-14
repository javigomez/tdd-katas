// http://kata-log.rocks/roman-numerals-kata
function convert(number) {
    romanNumber = ''

    while (number >= 10 ) {
        romanNumber += 'X'
        number = number -10      
    }
    while (number >= 9 ) {
        romanNumber += 'IX'
        number = number -9        
    }
    while (number >= 5 ) {
        romanNumber += 'V'
        number = number -5      
    }
    while (number >= 4 ) {
        romanNumber += 'IV'
        number = number -4        
    }
    while(number >= 1) {
        romanNumber += 'I'
        number--
    }
    
    return romanNumber
}

test('convert: given an arabic number translates it to roman number', () => {
    expect(convert(1)).toBe('I')
    expect(convert(2)).toBe('II')
    expect(convert(4)).toBe('IV')
    expect(convert(5)).toBe('V')
    expect(convert(6)).toBe('VI')
    expect(convert(9)).toBe('IX')
    expect(convert(11)).toBe('XI')
    expect(convert(28)).toBe('XXVIII')
})
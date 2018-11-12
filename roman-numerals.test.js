// http://kata-log.rocks/roman-numerals-kata
function convert(number) {
    romanNumber = ''

    if (number == 5 ) {
        romanNumber += 'V'
        number = number -5      
    }
    if (number == 4 ) {
        romanNumber += 'IV'
        number = number -4        
    }
    while(number > 0 && number < 3) {
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
})
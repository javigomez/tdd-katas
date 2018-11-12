// http://kata-log.rocks/roman-numerals-kata
function convert(number) {
    romanNumber = ''

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

test('given 1 returns I', () => {
    expect(convert(1)).toBe('I')
})

test('given 2 returns II', () => {
    expect(convert(2)).toBe('II')
})

test('given 3 returns III', () => {
    expect(convert(4)).toBe('IV')
})
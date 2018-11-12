// http://kata-log.rocks/roman-numerals-kata
function convert(arabicNumber) {
    romanNumber = ''
    while(arabicNumber > 0) {
        romanNumber += 'I'
        arabicNumber--
    }
    
    return romanNumber
}

test('given 1 returns I', () => {
    expect(convert(1)).toBe('I')
})

test('given 2 returns II', () => {
    expect(convert(2)).toBe('II')
})
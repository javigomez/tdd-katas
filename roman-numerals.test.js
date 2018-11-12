// http://kata-log.rocks/roman-numerals-kata
function convert(arabicNumber) {
    if (arabicNumber == 1) return 'I'
}

test('given 1 returns I', () => {
    expect(convert(1)).toBe('I')
})
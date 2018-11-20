// http://kata-log.rocks/bowling-game-kata
class Game {
    constructor() {
        this.actualScore = 0
    }

    roll(thrownPins) {
        this.actualScore += thrownPins
    }

    score() {
        return this.actualScore
    }
}

test('When I roll 10 times throwing 1 pin each', () => {
    const aGame = new Game()
    for(var i = 0; i < 10; i++) {
        aGame.roll(1)
    }
    expect(aGame.score()).toBe(10)
})
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
    const rollit = (game, rollTimes, Throwing) => {
        for(var i = 0; i < rollTimes; i++) {
            game.roll(Throwing)
        }
    }
    const aGame = new Game()
    rollit(aGame, 10, 1)
    expect(aGame.score()).toBe(10)
})
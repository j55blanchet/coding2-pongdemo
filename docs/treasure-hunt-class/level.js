class Level {

    constructor(barriers, 
                gems,
                enemies,
                playerCol, playerRow) {
        this.barriers = barriers || []
        this.gems = gems || []
        this.enemies = enemies || []
        this.playerCol = playerCol
        this.playerRow = playerRow
    }

    gameElements() {
        // Return barriers & gems
        return [].concat(this.barriers, this.gems, this.enemies)
    }
}

function barr(col, row) {
    return new Barrier(null, col, row)
}
function gemm(col, row) {
    return new Gem(null, col, row);
}
function enmy(col, row) {
    return new Monster(null, col, row);
}

let makeLevelOne = () => {
    let lvl1Barriers = [
        barr(1, 0), barr(1, 1), barr(1, 2), barr(1, 4), barr(1, 5), barr(1, 6), barr(1, 7), barr(1, 8), barr(1, 9),
        barr(2, 4),
        barr(3, 1), barr(3, 2), barr(3, 6), barr(3, 8),
        barr(4, 2), barr(4, 3), barr(4, 4), barr(4, 5), barr(4, 6), barr(4, 8),
        barr(5, 0), barr(5, 4), barr(5, 8),
        barr(6, 1), barr(6, 2), barr(6, 4), barr(6, 6),
        barr(7, 4), barr(7, 5), barr(7, 6), barr(7, 7), barr(7, 8), barr(7, 9),
        barr(8, 1), barr(8, 2), barr(8, 4), barr(8, 8),
        barr(9, 2), barr(9, 6)
    ]
    let lvl1Gems = [
        gemm(0, 9), gemm(6, 5), gemm(4, 9), gemm(7, 1), gemm(8, 7), gemm(8, 9)
    
    ]
    let lvl1Enemies = []
    return new Level(lvl1Barriers, lvl1Gems, lvl1Enemies, 0, 0);
}

let makeLevelTwo = () => {
    let lvl2Barriers = [];
    for(var c = 1; c < 9; c++) { lvl2Barriers.push(barr(c, 1))
                                 lvl2Barriers.push(barr(c, 8))}
    
    for(var r = 1; r < 9; r++) { lvl2Barriers.push(barr(1, r)),
                                 lvl2Barriers.push(barr(8, r))}
    

    return level2 = new Level(lvl2Barriers, [
        gemm(9, 9), gemm(0, 9), gemm(9, 0)
    ], [enmy(9, 9)], 0, 0)
}

var levelConstructors = [
    makeLevelOne,
    makeLevelTwo
]

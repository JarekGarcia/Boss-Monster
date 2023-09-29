const heroes = [
    {
        name: 'Cody',
        type: 'dwarf',
        damage: 5,
        gold: 20,
        health: 100
    },
    {
        name: 'Jarek',
        type: 'elf',
        damage: 10,
        gold: 20,
        health: 50
    }
]

const boss = {
    name: 'Alien',
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

function attackBoss() {
    boss.health -= 15
    console.log('before clamp', boss)
    if (boss.health < 0) {
        boss.health = 0
    }
    console.log('after clamp', boss)

    drawBossHp()
    // bossAttack()
}

function drawBossHp() {
    const bossHp = boss.health
    // @ts-ignore
    document.getElementById('bossHp').innerText = bossHp
}

function bossAttack() {
    heroes.forEach(hero => {
        hero.health -= 5
        if (hero.health <= 0) {
            hero.health = 0
        }
    })

    drawHeroHp()
}

function drawHeroHp() {
    heroes.forEach(hero => {
        // @ts-ignore
        document.getElementById(hero.name + '_HP').innerText = hero.health
        // @ts-ignore
        document.getElementById(hero.name + '_GOLD').innerText = hero.gold
    })
    // document.getElementById(boss.name + '_LVL').innerText = boss.level

}

setInterval(bossAttack, 5000)


/**NOTES */
// // we use the function word to declare vs run
// var x = 6
// function doSomething() { }

// /**
//  *
//  * @param {number} numberPlaceholder
//  * @param {string} stringPlaceholder
//  */
// function breakStuff(numberPlaceholder, stringPlaceholder) {

//     // numberPlaceholder++


// }


//         V argument
// breakStuff(2, 'hello')

// breakStuff(1000, 'world')

// breakStuff('true') //  == NO WAY I CANT DO THAT

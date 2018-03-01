new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        test: function() {
            return this.playerHealth = 0
        },
        startGame: function() {
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.turns = []
        },
        attack: function() {
            let damage = this.doingDamage(3, 10)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'you hit monster for ' + damage
            })
            this.playerHealth -= this.monsterRetaliate(5, 12)
            this.checkState() //monster can retaliate with health 0 

        },
        specialAttack: function() {
            let damage = this.doingDamage(10, 20)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'you hit monster badly for ' + damage
            })
            this.playerHealth -= this.monsterRetaliate(5, 12)
            this.checkState() //monster can retaliate with health 0 
        },
        heal: function() {
            if (this.playerHealth >= 90) {
                this.playerHealth = 100
                this.turns.unshift({
                    isPlayer: true,
                    text: 'you healed to  ' + this.playerHealth
                })
            } else {
                this.playerHealth += 10
                this.turns.unshift({
                    isPlayer: true,
                    text: 'you healed by  ' + 10
                })
            }
            this.playerHealth -= this.monsterRetaliate(5, 12)
            this.checkState() //monster can retaliate with health 0 
        },
        giveUp: function() {
            this.turns.unshift({
                isPlayer: true,
                text: 'you give up!'
            })
            this.gameIsRunning = false
        },
        doingDamage(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        checkState() {
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0
                this.turns.unshift({
                    isPlayer: true,
                    text: 'congratulations, you win!'
                })
                this.gameIsRunning = false
                return true
            } else if (this.playerHealth < 0) {
                this.playerHealth = 0
                this.turns.unshift({
                    isPlayer: true,
                    text: 'oops, you lose!'
                })
                this.gameIsRunning = false
                return true
            }
            return false
        },
        monsterRetaliate: function(min, max) {
            let damage = this.doingDamage(min, max)
            this.turns.unshift({
                isPlayer: false,
                text: 'monster hit you for ' + damage
            })
            return damage
        }
    }
})
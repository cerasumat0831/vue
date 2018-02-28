new Vue({
    el: '#app',
    data: {
        name: 'tang',
        counter: 0,
        secondcounter: 0,
        attachRed: false,
        color: 'blue'
    },
    methods: {
        result: function() {
            console.log('method')
            return this.counter > 5 ? 'greater than 5' : 'lesser than 5'
        }
    },
    computed: {
        output: function() {
            console.log('computed')
            return this.counter > 5 ? 'greater than 5' : 'lesser than 5'
        },
        divClasses: function() {
            return {
                red: this.attachRed,
                green: !this.attachRed
            }
        }
    },
    watch: {
        counter: function(value) {
            var vm = this; //equals to : var vm = new Vue()
            setTimeout(() => {
                vm.counter = 0 //this.counter will be fine too
            }, 1000);
        }
    }
})
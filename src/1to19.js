new Vue({
    el: '#app',
    data: {
        title: 'hello,world!',
        link: 'http://www.bing.com',
        finishedlink: '<a href="http://www.bing.com" target="_blank">bing_blank</a>',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value
        },
        sayHello: function() {
            return 'hello'
        },
        sayHelloThis: function() {
            return this.title
        },
        increase: function(event, step) {
            return this.counter += (event.clientX - event.clientY) * step
        },
        updateCoordinate: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        dummy: function(event) {
            event.stopPropagation()
        },
        alertMe: function(event) {
            let str = event.target.value
            alert(str)
        }
    }
})
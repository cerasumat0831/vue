Vue.component('component-test', {
    template: '<p>this is created by component</p>'
})

var vm1 = new Vue({
    data: {
        title: 'this is vm1\'s title'
    }
})

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'this is vm2\'s title '
    },
    methods: {
        onChange: function() {
            vm1.title = this.$refs.app2Title.innerText + ', changed by vm2'
        }
    }
})

var vm3 = new Vue({
    el: '#app3',
    data: {
        title: 'vue lifecycle test'
    },
    beforeCreate: function() {
        console.log('beforeCreate()')
    },
    created: function() {
        console.log('created()')
    },
    beforeMount: function() {
        console.log('beforeMount()')
    },
    mounted: function() {
        console.log('mounted')
    },
    beforeUpdate: function() {
        console.log('beforeUpdate')
    },
    updated: function() {
        console.log('updated()')
    },
    beforeDestroy: function() {
        console.log('beforeDestroy()')
    },
    destroyed: function() {
        console.log('destroyed()')
    },
    methods: {
        destroy: function() {
            this.$destroy();
        }
    }
})

vm1.$mount('#app1')

setTimeout(() => {
    vm1.title = 'the title has been changed by timer'
}, 1000)

const model = {
    text : '',
    loaded : es2020,
    active : false
}

const app = Vue.createApp({
    data() {
        return model;
    },
    methods: {
        clicked() {
            this.active = !this.active;
        },
    },

    mounted() {
        console.info(`The initial text is ${this.text}.`)
    }
});

app.mount('#app');









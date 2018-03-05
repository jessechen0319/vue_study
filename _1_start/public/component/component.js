Vue.component('my-component', {
    template: "<p>my name is {{name}}</p>",
    props: {
        name:{
            default:"undefine",
            type: String
        }
    }
});
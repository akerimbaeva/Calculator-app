const App = {
 
    data(){
      return {
          placeholder: "0",
          title: "Calculator",
          inputValue: ""
      }
    },
  
    methods: {
      // inputHandler(event) {   
      //   console.log('inputHandler', event.target.value)
      //     this.inputValue = event.target.value
      //  },

       getBtnValue(n) {
        this.inputValue += n 
       },

       getDot() {
         this.inputValue += "."
       },

       getDoubleZero() {
        this.inputValue += "00"
       },

       sumOperation() {
         this.inputValue += "+"
       },

       minusOperation() {
        this.inputValue += "-"
       },

       multiplyOperation() {
        this.inputValue += "*"
        return this.inputValue
      },

      divideOperation() {
         this.inputValue += "/"
       },

       sqrtOperation() {
          this.inputValue = eval( Math.sqrt(this.inputValue))
       },

       persentOperation() {
          this.inputValue = eval((this.inputValue)/100)
       },

       equalOperation() {
         this.inputValue = eval(this.inputValue)
       },

       clear() {
         this.inputValue = ""
       },

       keyPress(event) {
         if (event.key === "/") {
           this.divideOperation()
         }
       }
    }
  }
  const app = Vue.createApp(App).mount('#app')
  
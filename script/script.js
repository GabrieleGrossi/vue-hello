  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: "L'esercizio di oggi era quello di creare un messaggio da stampare in pagina come H1!"
      }
    }
  }).mount('#app')
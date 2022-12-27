export const mixin = {
  methods: {
    showName(){
      console.log(this.name);
    }
  },
  mounted() {
    console.log("挂载完毕！");
  },
}

export const mixin2 = {
  data() {
    return {
      x: 100,
      y: 200,
    }
  },
}
export const backMixins = {
  methods: {
    backHome() {
      // 也可使用物件 ex: routes.js中所定義
      this.$router.push("/");
    },
  },
};

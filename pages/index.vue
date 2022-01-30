<template>
  <section>
    <van-checkbox v-model="checked" shape="square">复选框</van-checkbox>
    <div>
      <van-button type="danger">危险按钮</van-button>
      <div style="width:100px; overflow:hidden">
        <img v-for="img in imageList" :key="img" v-lazy="img">
      </div>

      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation
          <IconLink/>
        </a>
        <NLink to="/about" class="button--grey">About</NLink>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import IconLink from "~/components/IconLink.vue";

export default {
  data() {
    return {
      checked: true,
      imageList: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  components: {
    Logo,
    IconLink
  }
};
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

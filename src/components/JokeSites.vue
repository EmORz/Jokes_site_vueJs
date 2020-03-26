<template>
  <div id="container">
    <div v-for="(j, i) in jokes_sites" class="joke" :key="i">
      <p>{{j.https}}</p>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "JokeSites",

  data: function() {
    return {
      jokes_sites: [
        {
          id: 0,
          https: "https://www.vesti.bg/vicove"
        },
        {
          id: 1,
          https: "https://www.haskovo.net/jokes"
        },
        {
          id: 2,
          https: "https://haha.bg/vicove/"
        },
        {
          id: 3,
          https: "http://www.vicove.biz/categories"
        },
        {
          id: 4,
          https: "https://fun.dir.bg/"
        }
      ]
    };
  },
  methods: {},
  computed: {
    count() {
      return this.jokes_sites.length;
    }
  }
};
</script>
<style scoped></style>

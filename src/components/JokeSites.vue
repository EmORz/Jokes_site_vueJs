<template>
  <div >
    <div v-for="(j, i) in jokes_sites" class="joke" :key="i">
      <!-- //<p>{{j.https}}</p> -->
      <h3> <a :href="j.https">{{j.https}}</a> </h3>
    
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
<style scoped>
div.joke {
  margin: 20px;
  border: 1px solid #ccc;
  float: left;
  width: 290px;
  background-color: greenyellow;
}
</style>

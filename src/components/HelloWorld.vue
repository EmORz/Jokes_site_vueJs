<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Ние разполагаме с богата колекция от {{count}} виц/ове, които ще ви харесат,
      гарантирано ;)
      <br />Разполагате и с възможност да се регистрирате и да създадете
      собствен виц.
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
      jokes_bank: [
        {
          title: 'Ivancho',         
          description: "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: 'Емануил',
          date: new Date(),
          showDescription: false
        }
      ]
    };
  },
  computed: {
    count() {
      return this.jokes_bank.length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <p>
      бележки: Трябва още: - регистрация - логин - логоут - изглед за логнати -
      не логнати - връзка с база данни - за нас - контакти - логиката за
      добавяне на вицове - оформление; Ние разполагаме с богата колекция от
      {{ count }} виц/ове, които ще ви харесат, гарантирано ;) <br />Разполагате
      и с възможност да се регистрирате и да създадете собствен виц.
    </p>

    <hr class="hrTitle" size="30" />
    <div v-for="(j, i) in jokes_bank" class="joke" :key="i">
      <div>
        <h2>{{ j.title }}</h2>
        <h5>Категория: {{ j.category }}</h5>
      </div>
      <div class="desc">
        <template v-if="j.showDescription">
          <p>
            {{ j.description }}
          </p>
          <p><b>Дата:</b>{{ j.date | formatDate }}</p>
          <p><b>Автор:</b>{{ j.author }}</p>
          <button @click="j.showDescription = false" class="show-desc btnH">
            Show Less
          </button>
        </template>
        <template v-else>
          <button @click="j.showDescription = true" class="show-desc btnS">
            Show more
          </button>
        </template>
        <hr class="hrJokes" size="3" />
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "Home",
  props: {
    msg: String
  },
  data: function() {
    return {
      jokes_bank: [
         {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
         {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
         {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
         {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
         {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
         {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
        {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
           {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
           {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
           {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
           {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
           {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
           {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
        {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
            {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
            {
          category: "Ivancho",
          title: "Ivancho && Father",
          description:
            "Иванчо говори с баща си Татко,ти си голям късметлия!- Защо?- Няма нужда да ми купуваш нови учебници, оставам в същия клас!",
          author: "Емануил",
          date: new Date(),
          showDescription: false
        },
       
      ],
      catSrc: "category value :)",
      titleSrc: "title",
      descSrc: "description ..............",
      authorSrc: "zzzzz",
      dateSrc: new Date()
    };
  },
  methods: {
    
  },
  computed: {
    count() {
      return this.jokes_bank.length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
div.joke {
  margin: 15px;
  border: 1px solid #ccc;
  float: left;
  width: 190px;
}
hr.hrTitle {
  height: 3px;
  color: red;
  background-color: red;
  border: none;
}
hr.hrJokes {
  height: 2px;
  color: rgba(25, 0, 255, 0.555);
  background-color: blue;
  border: none;
}
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
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.btnS {
  background-color: palegreen;
} /* Blue */
.btnH {
  background-color: aqua;
} /* Red */
</style>

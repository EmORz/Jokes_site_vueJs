<template>
  <div class="container">
    <div v-if="isAuth">
      Hello to the Page (authenticated)
      <p v-for="p in posts" :key="p.postId">
        {{ p.name }}
      </p>
    </div>
    <div v-else>
      Hello to the Page (not authenticated)
    </div>
  </div>
</template>

<script>
import testMixin from "../mixins/test";
import postsMixin from "@/mixins/posts-mixin";

import axios from "axios";

export default {
  name: "Home",
  props: {
    isAuth: Boolean
  },
  mixins: [testMixin, postsMixin],
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getAllPosts();
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
        }
      ],
      catSrc: "category value :)",
      titleSrc: "title",
      descSrc: "description ..............",
      authorSrc: "zzzzz",
      dateSrc: new Date(),
      users: null,
      isLoading: false
    };
  },
  methods: {
    loadUsers() {
      this.isLoading = true;
      axios.get("users").then(res => {
        if (res.status === 200) {
          this.users = res.data;
        }
        this.isLoading = false;
      });
    }
  },
  computed: {
    count() {
      return this.jokes_bank.length;
    }
  },
  filters: {
    userEditLink(user) {
      return `/edit/${user.id}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

<template>
  <div class="container">
    <div>
      <h1>Контакти</h1>

      <h2>За връзка с нас:</h2>
      <div>
        <p>
          Център за обслужване на клиенти тел. 084 440 40 81, 084 480 48 80
          E-mail: service@jokes.bg
        </p>
      </div>

      <div>
        <div>
          <h2><b>Работно време</b> :</h2>
          <p>
            9.00 - 17.00 ч. - понеделник до петък
          </p>
        </div>

        <form @submit.prevent="createQuestion" class="user-form">
          <label for="description">Форма за въпроси?</label><br />
          <textarea
            @input="setDesc"
            :value="descSrc"
            type="text"
            id="description"
            placeholder="Вашият въпрос ...?"
          ></textarea
          ><br />

          <button type="submit" class="btn">Send</button>
        </form>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScK9OCKP18NZW1IhyVbRWoe6e1ISMZJaDL1nFr5w6R_rXhGSg/viewform"
          style="border: 0;"
          width="800"
          height="800"
          frameborder="0"
          scrolling="no"
        >
        </iframe>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385.8819870632953!2d26.52640124686279!3d43.52674131364883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40af0e86d16cde67%3A0x65e0237e5731aa47!2z0KDQtdCz0LjQvtC90LDQu9C90LAg0LHQuNCx0LvQuNC-0YLQtdC60LAg0J_RgNC-0YQuINCR0L7Rj9C9INCf0LXQvdC10LIg0KDQsNC30LPRgNCw0LQ!5e0!3m2!1sbg!2sbg!4v1561963978132!5m2!1sbg!2sbg"
        width="600"
        height="450"
        frameborder="0"
        style="border: 0;"
        allowfullscreen
      ></iframe>
      <br />
    </div>
    <iframe
      src="https://calendar.google.com/calendar/embed?src=oaubcn4pvr4pslts0t8fub07ks%40group.calendar.google.com&ctz=Europe%2FSofia"
      style="border: 0;"
      width="800"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
import DBAxios from "@/axios-database";

export default {
    data: function () {
    return {    
      descSrc: "description ..............",    
    };
  },
  methods: {
    createQuestion() {
      const payload = {
        description: this.descSrc,
      };
      DBAxios.post(`posts.json`, payload)
        .then(() => {
          this.$router.push("/home");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    setDesc(e) {
      const value = e.target.value;
      this.descSrc = value;
    }
  },
};
</script>

<style></style>

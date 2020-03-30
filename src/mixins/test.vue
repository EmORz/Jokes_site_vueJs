<script>
export default {
  props: {
    text: {
      type: String
    }
  },
  data() {
    return {
      test2: "Test2",
      user: null,
      success: false
    };
  },
  computed: {
    textLength() {
      return this.text.length;
    }
  },
  methods: {
    login(email, password) {
      setTimeout(() => {
        console.log(email, password);
        this.user = { name: "Pesho&zas&Ivan" };
        this.$router.push("home");
        console.log("Login Form was submitted!");
      }, 3000);
    },
    register(username, email, password) {
      setTimeout(() => {
        console.log(email, password);
        this.user = { name: "Pesho&zas&Ivan" };
        // this.$router.push("home");
        this.success = true;
        console.log("Register Form was submitted!");
      }, 3000);
    },
    logout() {
      setTimeout(() => {
        this.user = null;
      }, 3000);
    }
  }
};
</script>

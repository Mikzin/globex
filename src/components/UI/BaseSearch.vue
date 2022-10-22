<template>
  <form>
    <div class="container">
      <input
        type="text"
        name="search"
        placeholder="Find user"
        class="input__field"
        v-model="userInput"
      />
      <button type="submit" value="" class="input__button" @click.prevent="set">
        <ion-icon
          name="search-outline"
          class="input__button-icon icon"
        ></ion-icon>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      // userInput: '',
    };
  },
  // methods: {
  //   getInput() {
  //     this.$router.push({ query: { term: this.userInput } });
  //     console.log(this.$router.query.term);
  //   },
  // },
  computed: {
    userInput: {
      get() {
        return this.$route.query.term;
      },
      set(value) {
        this.$router.replace({
          query: {
            term: value,
          },
        });
        console.log(this.$router.params);
      },
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
  width: 100%;
  border: 1px solid #e1dede;
  margin: 36px auto;
  padding: 8px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
}

.input__field {
  width: 100%;
  border: 0;
  outline-style: none;
}

.input__button {
  width: 20px;
  height: 20px;
  border: 0;
  cursor: pointer;
  margin-right: 5px;
  background: none;
}
</style>

<template>
  <router-view></router-view>
  <base-search></base-search>
  <base-list v-if="!filteredUsers.length">
    <base-card
      v-for="user in users"
      :id="user.id"
      :key="user.name"
      :name="user.name"
      :phone="user.phone"
      :email="user.email"
      :hireDate="user.hireDate"
      :positionName="user.positionName"
      :department="user.department"
      :address="user.address"
    ></base-card>
  </base-list>
  <base-list>
    <base-card
      v-for="user in filteredUsers"
      :id="user.id"
      :key="user.name"
      :name="user.name"
      :phone="user.phone"
      :email="user.email"
      :hireDate="user.hireDate"
      :positionName="user.positionName"
      :department="user.department"
      :address="user.address"
    ></base-card>
  </base-list>
</template>

<script>
import BaseSearch from './components/UI/BaseSearch.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseList from './components/UI/BaseList.vue';

export default {
  components: { BaseSearch, BaseCard, BaseList },
  data() {
    return {
      users: [],
      error: null,
      searchValue: '',
    };
  },
  methods: {
    loadUsers() {
      fetch('http://127.0.0.1:3000')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          const usersArray = [];
          for (const id in data) {
            usersArray.push({
              id: id,
              name: data[id].name,
              phone: data[id].phone,
              email: data[id].email,
              hireDate: data[id].hire_date,
              positionName: data[id].position_name,
              department: data[id].department,
              address: data[id].address,
            });
          }
          this.users = usersArray;
          console.log(this.users);
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
          this.error = 'Failed to fetch data, please try again later';
        });
    },
    filteredUsers() {
      return this.users.filter((user) => {
        user.name.toLowerCase().includes(this.$router.query.term.toLowerCase());
      });
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
}

.card__list {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  gap: 24px;
  padding-left: 0;
  justify-content: center;
}

.icon {
  width: 20px;
  height: 20px;
  color: blueviolet;
}
</style>

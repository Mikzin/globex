<template>
  <li class="card__item" @click="openModal">
    <h2 class="card__name">{{ name }}</h2>
    <div class="card__phone">
      <ion-icon name="phone-portrait-outline" class="icon"></ion-icon>
      <p class="card__phone-number">{{ phone }}</p>
    </div>
    <div class="card__email">
      <ion-icon name="mail-outline" class="icon"></ion-icon>
      <a href="#" target="blank" class="card__email-link">{{ email }}</a>
    </div>
  </li>
  <base-modal
    v-if="modalOpened"
    @open="openModal"
    :userName="name"
    :userPhone="phone"
    :userEmail="email"
    :userDepartment="department"
    :userHireDate="hireDate"
    :userPositionName="positionName"
    :userAddress="address"
  ></base-modal>
</template>

<script>
import BaseModal from './BaseModal.vue';

export default {
  data() {
    return {
      modalOpened: false,
    };
  },
  components: { BaseModal },
  props: [
    'name',
    'phone',
    'email',
    'positionName',
    'department',
    'hireDate',
    'id',
    'address',
  ],
  methods: {
    openModal() {
      this.modalOpened = !this.modalOpened;
    },
  },
};
</script>

<style scoped>
.card__item {
  list-style: none;
  width: 100%;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 16px;
  justify-self: center;
  padding: 10px;
  cursor: pointer;
}

.card__name {
  margin: 0 0 20px;
}
.card__phone {
  margin: 0;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
}

.card__phone-number {
  margin: 0;
  color: #aaa6a6;
}

.card__email {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 70px;
}

.card__email-link {
  margin: 0;
  display: flex;
  color: #aaa6a6;
}

.card__email-link:active,
.card__email-link:hover {
  opacity: 0.8;
}
</style>

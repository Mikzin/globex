<template>
  <teleport to="body">
    <div class="modal" @click.self.stop="$emit('open')">
      <div class="modal__container">
        <button class="button-close" @click="$emit('open')"></button>
        <!-- <ion-icon name="close-outline" class="button-close"></ion-icon> -->
        <h2 class="modal__name">{{ userName }}</h2>
        <div class="modal__info">
          <ul class="modal__key">
            <li class="modal__key-info">Телефон:</li>
            <li class="modal__key-info">Почта:</li>
            <li class="modal__key-info">Дата приёма:</li>
            <li class="modal__key-info">Должность:</li>
            <li class="modal__key-info">Подразделение:</li>
          </ul>

          <ul class="modal__value">
            <li class="modal__value-info">{{ userPhone }}</li>
            <li class="modal__value-info">{{ userEmail }}</li>
            <li class="modal__value-info">{{ userHireDate }}</li>
            <li class="modal__value-info">{{ userPositionName }}</li>
            <li class="modal__value-info">{{ userDepartment }}</li>
          </ul>
        </div>
        <div class="modal__extra">
          <h3 class="modal__extra-title">Дополнительная информация:</h3>
          <p class="modal__extra-text">
            Address:
            {{ userAddress }}
          </p>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      cardClicked: false,
    };
  },
  props: [
    'userName',
    'userPhone',
    'userEmail',
    'userPositionName',
    'userDepartment',
    'userHireDate',
    'userAddress',
  ],
  emits: ['open'],
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(194, 198, 242, 0.75);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__container {
  width: 40%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  background-color: white;
  position: relative;
  padding: 20px;
}

.button-close {
  position: absolute;
  background-color: blueviolet;
  border: 0;
  padding: 15px;
  border-radius: 16px;
  max-height: 25px;
  max-width: 25px;
  background-image: url(../../../images/close-outline.svg);
  background-size: contain;
  fill: white;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.button-close:hover {
  background-color: rgb(174, 113, 231);
}

.icon-close {
  color: white;
  height: 24px;
  width: 24px;
}

.modal__info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.modal__extra-title {
  margin: 0;
  font-size: 16px;
}

.modal__extra-text {
  margin: 10px 0 20px;
  color: #aaa6a6;
  font-size: 12px;
}

.modal__key {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.modal__value {
  color: #aaa6a6;
  list-style: none;
  padding-left: 0;
  width: 50%;
  margin: 0;
  font-size: 16px;
}

.modal__value-info {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 8px;
}

.modal__key-info {
  margin-bottom: 8px;
}
</style>

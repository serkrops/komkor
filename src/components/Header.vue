<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "Header",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faPhone,
    };
  },
};
</script>

<template>
  <v-row class="header">
    <v-col class="header__logo">
      <router-link to="/" class="header__logo--link">
        <img
          src="../assets/logo.png"
          alt="KomKor Logo"
          class="header__logo--link-image"
        />
        <h3 class="header__logo--link-title">Зручний сервіс</h3>
      </router-link>
    </v-col>
    <v-col class="header__numbers-wrapper">
      <a href="tel:0933263219">
        <font-awesome-icon :icon="faPhone" />
        &nbsp;(093) 326-32-19
      </a>
      <a href="tel:0562337700">
        <font-awesome-icon :icon="faPhone" />
        &nbsp;(0562) 33-77-00
      </a>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-evenly;

  padding: 2rem;

  background-color: white;
  border-bottom: 2px solid rgb(122, 176, 243);

  &__logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;

    &--link {
      text-decoration: none;
      color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }

      &-image {
        display: block;
        width: 200px;
        cursor: pointer;
      }

      &-title {
        font-size: 1.5rem;
        text-align: center;
        margin: 0;
        padding: 0;
        color: black;
        text-decoration: none;
      }
    }
  }

  &__numbers-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & a {
      font-size: 1.5rem;
      color: black;
      text-decoration: none;
      padding: 1rem;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: white;
        background-color: #31a3dd;
        box-shadow: 0 0 10px rgba(7, 7, 7, 0.5);
        transform: scale(1.1);
      }
    }
  }
}
</style>

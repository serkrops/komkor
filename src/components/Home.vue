<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEyedropper,
  faWrench,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
export default {
  name: "Home",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faEyedropper,
      faWrench,
      faDesktop,
    };
  },
};
</script>

<template>
  <v-container class="home">
    <h1 class="home__title">Наші послуги</h1>
    <v-row class="home__links">
      <v-col>
        <router-link to="/fueling" class="home__links--link">
          <font-awesome-icon :icon="faEyedropper" size="2xl" />
          Заправка картриджів
        </router-link>
      </v-col>
      <v-col>
        <router-link to="/repair" class="home__links--link">
          <font-awesome-icon :icon="faWrench" size="2xl" />
          Ремонт принтерів та копірів</router-link
        >
      </v-col>
      <v-col>
        <router-link to="/administrationn" class="home__links--link">
          <font-awesome-icon :icon="faDesktop" size="2xl" />
          Обслуговування комп'ютерів</router-link
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.5rem;

  &__title {
    text-decoration: underline;
    text-decoration-color: #31a3dd;
  }

  &__links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    column-gap: 3rem;

    &--link {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 2rem;
      text-decoration: none;
      color: black;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #31a3dd;
        transform: scale(1.2);
      }
    }
  }
}
</style>

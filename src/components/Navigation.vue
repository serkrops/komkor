<script>
export default {
  name: "Navigation",
  data() {
    return {
      menu: [
        { title: "Наші послуги", path: "/" },
        { title: "Ціни", path: "/prices" },
        { title: "Чому ми?", path: "/about" },
        { title: "Зворотній зв'язок", path: "/contacts" },
      ],
    };
  },
};
</script>

<template>
  <v-row>
    <v-col>
      <v-container class="navigation">
        <router-link
          :to="link.path"
          v-for="link of menu"
          :key="link"
          class="navigation__link"
          >{{ link.title }}</router-link
        >
      </v-container>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-evenly;

  padding: 1rem;

  &__link {
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: white;
      background-color: #31a3dd;
      box-shadow: 0 0 10px rgba(7, 7, 7, 0.5);
    }
  }
}
</style>

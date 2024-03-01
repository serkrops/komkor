<script>
import Map from "./Map.vue";
export default {
  name: "Footer",
  components: {
    Map,
  },
};
</script>

<template>
  <v-col>
    <v-row class="footer">
      <v-col class="footer__section">
        <h4>Контакти:</h4>
        <span>Офіс:</span>
        <a href="tel:0562337700" class="footer__section--phone"
          >(0562) 33-77-00</a
        >
        <a href="tel:09332632190" class="footer__section--phone"
          >(093) 326-32-19</a
        >
      </v-col>
      <v-col class="footer__section">
        <h4>Наша адреса:</h4>
        <span>м. Дніпро, пр. Александра Поля 11</span>
        <h4>Часи роботи:</h4>
        <span>Понеділок–П'ятниця: 10:00–16:00</span>
      </v-col>
      <v-col class="footer__section">
        <h4>На мапі:</h4>
        <Map />
      </v-col>
      <v-col class="footer__section">
        <h4>Наш партнер:</h4>
        <a href="https://www.work.ua" target="_blank">
          <img
            src="https://i0.wp.com/www.work.ua/i/88x31b.gif?resize=88%2C31&ssl=1"
            alt="Work.ua \— сайт поиcка работы №1 в Украине"
          />
        </a>
      </v-col>
    </v-row>
  </v-col>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: start;
  column-gap: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: #34495e;
  color: white;

  &__section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 1rem;
    padding: 1rem;

    &--phone {
      color: white;
      text-decoration: none;
    }
  }
}
</style>

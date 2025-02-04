<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "App",
  setup() {
    const { t, locale } = useI18n();

    const changeLanguage = (lang: string) => {
      locale.value = lang; // Zmiana języka
    };

    return { t, changeLanguage };
  },
});
</script>

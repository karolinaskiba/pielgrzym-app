<template>
  <v-app>
    <Sidebar v-model="drawer" />

    <v-app-bar
      scroll-behavior="inverted"
      :elevation="0"
      color="yellow-darken-4"
      image="https://images.pexels.com/photos/16997505/pexels-photo-16997505/free-photo-of-pole-rolnictwo-wiejski-zboze.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    >
      <template v-slot:image>
        <v-img
          gradient="to bottom right, rgba(255,221,149,.1), rgba(80,48,1,.6)"
        />
      </template>

      <v-app-bar-nav-icon
        v-if="$vuetify.display.mobile"
        variant="text"
        @click.stop="toggleDrawer"
      />

      <v-toolbar-title>
        <span class="font-weight-bold">Aplikacja Pielgrzym</span>
      </v-toolbar-title>

      <v-spacer />

      <template v-if="$vuetify.display.mdAndUp">
        <v-toolbar-items>
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            link
            :to="`/${item.value}`"
            :prepend-icon="item.props.prependIcon"
            class="text-body-2 font-weight-bold"
          >
            {{ $t('NavMenue.' + item.title) }}
          </v-btn>
        </v-toolbar-items>

        <!-- <v-btn
          icon="mdi-magnify"
          variant="text"
        />
        <v-btn
          icon="mdi-filter"
          variant="text"
        /> -->
      </template>

      <!-- <v-btn
        icon="mdi-dots-vertical"
        variant="text"
      /> -->
    </v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Sidebar from '@/components/Sidebar.vue';
  import { menuItems } from '../config/menuItems';

  const drawer = ref(true);

  function toggleDrawer() {
    drawer.value = !drawer.value;
  }
  const items = menuItems;
</script>
<style></style>

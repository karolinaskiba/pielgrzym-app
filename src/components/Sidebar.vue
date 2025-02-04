<template>
  <v-navigation-drawer
    v-if="$vuetify.display.mobile"
    v-model="internalDrawer"
    :location="$vuetify.display.mobile ? 'left' : undefined"
  >
    <v-list
      density="compact"
      nav
    >
      <v-list-item
        title="Aplikacja Pielgrzym"
        subtitle="Pielgrzym APP"
      />
      <v-divider />

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        link
        :to="`/${item.value}`"
      >
        <template #prepend>
          <v-icon>{{ item.props.prependIcon }}</v-icon>
        </template>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t('NavMenue.' + item.title) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { menuItems } from '../config/menuItems';

  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true,
    },
  });

  const internalDrawer = ref(props.modelValue);

  watch(
    () => props.modelValue,
    (newValue) => {
      internalDrawer.value = newValue;
    }
  );

  const items = menuItems;
</script>

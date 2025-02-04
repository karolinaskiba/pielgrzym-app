<template>
  <v-container>
    <v-empty-state
      headline="404"
      :title="$t('Labels.PageNotFound')"
      :text="$t('Labels.PageNotExists')"
    >
      <template v-slot:actions>
        <v-btn
          flat
          class="mt-2 font-weight-bold"
          :text="$t('Button.BackToHome')"
          @click="goToHomePage"
        />
      </template>
    </v-empty-state>
  </v-container>
</template>
<script lang="ts" setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const goToHomePage = () => {
    router.push('/home');
  };
</script>

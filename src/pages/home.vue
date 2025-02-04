<template>
  <div class="page">
    <div class="bg pb-12">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            class="text-center"
          >
            <h3 class="text-h3 text-uppercase font-weight-bold my-16">
              {{ $t('Home.MainTitle') }}
            </h3>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row align="center">
          <v-col>
            <v-card class="opacity-bg elevation-0 pa-6">
              <v-card-item>
                <v-card-text class="pa-0">
                  <p class="text-subtitle-1 text-uppercase font-italic">
                    {{ $t('Home.StartApp') }}
                  </p>
                </v-card-text>
                <v-card-title class="text-md-h4 text-break font-weight-bold">
                  <h3 class="text-uppercase">
                    {{ $t('Home.DownloadSection') }}
                  </h3>
                </v-card-title>
              </v-card-item>

              <v-spacer />

              <v-card-text>
                <p class="text-h5 font-italic">
                  {{ $t('Home.StartAppInfo') }}
                </p>
              </v-card-text>
              <v-card-text>
                <p class="text-h5 font-italic mb-16">
                  {{ $t('Home.AboutApp') }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="5"
          >
            <v-img
              width="100%"
              height="70vh"
              src="../assets/pigeon.png"
              contain
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="text-center"
        >
          <h3 class="text-h3 text-uppercase font-weight-bold my-16">
            {{ $t('Home.HowToDownload') }}
          </h3>
        </v-col>
      </v-row>
      <v-row
        align="center"
        class="mb-12"
      >
        <v-col
          cols="12"
          md="6"
        >
          <v-card class="opacity-bg elevation-0 pa-12">
            <v-card-text class="text-center">
              <p class="text-h5 font-weight-bold mb-3">
                {{ $t('Home.DownloadSectionTitle') }}
              </p>
            </v-card-text>
            <v-card-text class="text-center">
              <v-btn
                class="font-weight-bold"
                variant="flat"
                size="large"
                color="primary"
              >
                Pobierz aplikację
              </v-btn>
            </v-card-text>
            <v-card-text class="text-center">
              <p class="text-h5 font-italic mb-6">
                {{ $t('Home.DownloadSectionInfo') }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card class="opacity-bg elevation-0 pa-6">
            <v-card-item>
              <v-row>
                <v-col>
                  <v-card-text class="text-center">
                    <p class="text-h5 font-weight-bold mb-3">
                      {{ $t('Home.ScanQR') }}
                    </p>
                  </v-card-text>
                  <v-card-text class="text-center">
                    <v-img
                      class="qr-code"
                      src="../assets/qr-icon.JPG"
                    />
                    <p class="text-h5 font-italic mb-6">
                      {{ $t('Home.ScanQRInfo') }}
                    </p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import ApiService from '../services/ApiService';
  import { type PostInterface } from '../models/PostInterface';

  const posts = ref<PostInterface[]>([]);

  const fetchPosts = async () => {
    try {
      posts.value = await ApiService.getPosts();
    } catch (error) {
      console.error('Nie udało się pobrać postów:', error);
    }
  };
  onMounted(() => {
    fetchPosts();
  });
</script>
<style scoped>
  .bg {
    min-height: 100%;
    width: 100%;
    background-image: url('../assets/bg.jpg');
    background-size: cover;
  }

  .opacity-bg {
    background-color: rgba(253, 253, 253, 0.5);
  }
  .qr-code {
    max-width: 10rem;
    max-height: 10rem;
    object-fit: contain;
    margin: auto;
  }
  h3 {
    line-height: 1.5;
  }
</style>

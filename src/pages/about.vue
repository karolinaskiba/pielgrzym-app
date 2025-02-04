<template>
  <div class="page mb-12">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="text-center"
        >
          <h3 class="text-h3 text-uppercase font-weight-bold my-16">
            {{ $t('About.MainTitle') }}
          </h3>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row align="center">
        <v-col
          cols="12"
          md="6"
        >
          <v-card class="opacity-bg elevation-0 pa-6">
            <v-card-item>
              <v-card-text class="pa-0">
                <p class="text-subtitle-1 text-uppercase font-italic">
                  Lorem ipsum dolor sit amet,
                </p>
              </v-card-text>
              <v-card-title class="text-md-h4 text-break font-weight-bold">
                <h3 class="text-uppercase">Geneza</h3>
              </v-card-title>
            </v-card-item>

            <v-spacer />

            <v-card-text>
              <p class="text-h5 font-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae eos ea ab eligendi tempora iure dolorum illo? Omnis
                corporis earum itaque perspiciatis, sint dicta, expedita
                necessitatibus soluta aut officia minus.
              </p>
            </v-card-text>
            <v-card-text>
              <p class="text-h5 font-italic mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                corrupti! Cumque iure culpa sed in aperiam, quisquam voluptatem
                enim molestiae? Dolor provident ducimus ratione, repellendus
                minus vel. Corrupti, officiis officia!
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-img
            width="100%"
            height="70vh"
            src="../assets/cross.png"
            cover
          />
        </v-col>
      </v-row>
    </v-container>
  </div>

  <!-- <h1>About</h1>
  <div @mouseenter="handleMouseEnter($event, 'wyświetlam test')">test</div>

  <div>
    <h1>Lista postów</h1>
    <input
      v-model="letter"
      type="text"
    />
    <ul v-if="posts.length">
      <li
        v-for="post in filtered"
        :key="post.id"
      >
        <strong>{{ post.title }}</strong> :
        {{ post.body }}
      </li>
    </ul>
    <p v-else>Brak postów do wyświetlenia.</p>
  </div>
  <router-view /> -->
</template>

<script lang="ts" setup>
  // import { ref } from 'vue';
  // import ApiService from '../services/ApiService';
  // import { type PostInterface } from '../models/PostInterface';

  // const posts = ref<PostInterface[]>([]);
  // const letter = ref('s');

  // const fetchPosts = async () => {
  //   try {
  //     posts.value = await ApiService.getPosts();
  //   } catch (error) {
  //     console.error('Nie udało się pobrać postów:', error);
  //   }
  // };
  // onMounted(() => {
  //   fetchPosts();
  // });

  // const handleMouseEnter = (e: Event, data: string) => {
  //   console.log(data);
  // };

  // const filtered = computed(() => {
  //   return posts.value.filter((p) => p.title.startsWith(letter.value));
  // });
</script>

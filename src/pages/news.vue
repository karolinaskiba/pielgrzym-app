<template>
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
  <v-snackbar
    :timeout="2000"
    v-model="snackbar"
  >
    {{ text }}
  </v-snackbar>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  //import ApiService from '../services/ApiService';
  import { type PostInterface } from '../models/PostInterface';
  import PostsService from '../services/PostsService';

  const text = ref('');
  const snackbar = ref(false);
  const posts = ref<PostInterface[]>([]);
  const letter = ref('s');

  const fetchPosts = async () => {
    try {
      posts.value = await PostsService.getPosts();
    } catch (error) {
      snackbar.value = true;
      text.value = error.message;
    }
  };
  onMounted(() => {
    fetchPosts();
  });

  const filtered = computed(() => {
    return posts.value.filter((p) => p.title.startsWith(letter.value));
  });
</script>

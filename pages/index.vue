<template>
  <section id="posts">
    <postPreview
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :excerpt="post.previewText"
    :thumbnailImage="post.thumbnailUrl"
    :id="post.id"
    />
  </section>
</template>

<script>
import postPreview from '@/components/Blog/PostPreview';

export default {
  components: {
      postPreview
    },
    data() {
      return {
        posts: [
          {
            title:'A new Beginning',
            previewText: 'This will be awesome, dont miss it',
            thumbnailUrl: 'https://images.pexels.com/photos/681617/pexels-photo-681617.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
            id: 'a-new-beginning'

          },
          {
            title:'A Second Beginning',
            previewText: 'This will be awesome, dont miss it',
            thumbnailUrl: 'https://images.pexels.com/photos/681617/pexels-photo-681617.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
            id: 'a-second-beginning'

          }]
      };
    }
};
</script>

<style scoped>
  #posts{
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* flex-direction: column; */
  }

  /* @media(min-width: 35rem) {
    #posts{
      flex-direction: row;
    }
  } */
</style>

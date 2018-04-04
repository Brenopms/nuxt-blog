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
  asyncData(context){
    return context.app.$storyapi
    .get('cdn/stories', {
      version: process.env.NODE_ENV == 'production' ? 'publiished' : 'draft',
      starts_with: 'blog/'
    }).then(res => {
        return { posts: res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.summary,
              thumbnailUrl: bp.content.thumbnail
            }
          })
        }
    });
  }
//     data() {
//       return {
//         posts: [
//           {
//             title:'A new Beginning',
//             previewText: 'This will be awesome, dont miss it',
//             thumbnailUrl: 'https://images.pexels.com/photos/681617/pexels-photo-681617.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
//             id: 'a-new-beginning'

//           },
//           {
//             title:'A Second Beginning',
//             previewText: 'This will be awesome, dont miss it',
//             thumbnailUrl: 'https://images.pexels.com/photos/681617/pexels-photo-681617.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
//             id: 'a-second-beginning'

//           }]
//       };
//     } 
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

 .post-preview {
    box-sizing:  content-box;
  }

  /* @media(min-width: 35rem) {
    #posts{
      flex-direction: row;
    }
  } */
</style>

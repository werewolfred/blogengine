<template>
  <div>
    <h1>Blogs VUE</h1>

    <ul>
      <li v-for="blog in blogs">
        <router-link :to="{name: 'Blog', params: { blogId:  blog.id } }">{{blog.name}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        blogs:[{
          id: 'dsjkaf903j',
          name: 'bloggin1'
        },{
          id: 'dsfkj90322930',
          name: 'supercalifragilisticexialiblogger'
        }]
      }
    },
    beforeCreate(){
      console.log("WHAT IS THIS?", this.banana)
    },
    mounted(){
      console.log('ABOUT IS READY')
      console.log("WHAT IS THIS?", this.banana)
    }
  }
</script>

<style></style>
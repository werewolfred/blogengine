<template>
        <div>
          <h1>Blog {{ id }}</h1>
        </div>
      </template>
      
      <script>
        export default {
          data(){
            return {
              id: this.$route.params.blogId
            }
          },
          mounted(){
            console.log('ABOUT IS READY')
            console.log("WHAT IS THIS?", this.$route.params.blogId)
          }
        }
      </script>
      
      <style></style>
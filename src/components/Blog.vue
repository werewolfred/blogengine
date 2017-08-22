<template>
        <div>
          <h1>Blog {{ activeBlog.title }}</h1>
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
          },
          computed:{
                blog(){
                    return this.$store.state.activeBlog
                }
            }
        }
      </script>
      
      <style></style>
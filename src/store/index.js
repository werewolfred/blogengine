import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

var ip = "//localhost:3000"

vue.use(vuex)

var store = new vuex.Store({
  state: {
    blogs: [],
    activeBlog: {}
  },
  mutations: {
    //Signature for all mutations
    //MUTAIONS SHOULD ALWAYS BE PURE FUNCTIONS (AKA SETTERS)
    addBlog(state, blog) {
      state.blogs.push(blog)
    },
    updateBlogs(state, blogs){
      state.blogs = blogs
    },
    setActiveBlog(state, blog){
      state.activeBlog = blog
    }
  },
  actions: {
    //Signature for all Actions
    createBlog({ commit, dispatch }, blog) {
      $.post(ip + '/api/blogs', blog).then(actualBlog => {
        commit('addBlog', actualBlog)
      }).fail(err => {
        console.error(err)
      })

    },
    removeBlog({ commit, dispatch }, payload) {

    },
    updateBlog({ commit, dispatch }, payload) {

    },
    getBlogs({commit, dispatch}){
      $.get(ip + '/api/blogs').then(blogs => {
        commit('updateBlogs', blogs)
      })
    },
    getBlog({commit, dispatch}, blogId){
      $.get(ip+'/api/blogs/'+blogId).then(blog=>{
        commit('setActiveBlog', blog)
      })
    }
  }
})

// vuex.Store = function(config){

//   var state = JSON.parse(JSON.stringify(config.state))

//   function commit(mutationName, payload){
//     this.mutations[mutationName](state, payload)
//   }

//   function dispatch(actionName, payload){
//     this.actions[actionName]({commit, dispatch}, payload)
//   }

// }



// var state = {
//     blogs: []
// }

// var store = {
//     state: state,

//     getBlogs(){
//         console.log('almost')
//         $.get(ip + '/api/blogs')
//         .then((res)=>{
//                 console.log(res)
//                 state.blogs = res
//             })
//             .catch((error)=> console.log(error))
//     }


// }




export default store
<template>
    <div>
        <div class="card">
            <form @submit.prevent="createNewBlog">
                <input type="text" placeholder="Title" v-model="newBlog.title">
                <wysiwyg v-model="newBlog.body" />
                <button class="hoverable btn">CREATE</button>
            </form>
        </div>
        <div v-if="blogs.length > 0">
            <ul>
                <li v-for="blog in blogs">
                    <router-link :to="{name: 'Blog', params: {blogId: blog._id}}">{{blog.title}}</router-link>
                </li>
            </ul>
        </div>
        <div v-else>
            <img src="https://media.giphy.com/media/XHq51CLi26G7S/giphy.gif" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newBlog: {
                title: "",
                body: ""
                }
            }
        },
        computed: {
            blogs() {
                return this.$store.state.blogs
            }
        },
        methods: {
            createNewBlog() {
                this.$store.dispatch("createBlog", this.newBlog)
            }
        },
        mounted() {
            this.$store.dispatch("getBlogs")
        }

    }

</script>

<style></style>
<template>
<div>

</div>
</template>

<script>
export default{

    data(){
        return{
            test:'this is a test'
        }
    }, 
    mounted(){
        console.log("WE ARE ON THE HOME PAGE NOW")
    }, 
    beforeDestroy(){
        console.log("GOOD BYE HOME")
    }, 
    destroyed(){
        console.log("THE HOME COMPONENT IS GONE")
    }
}
</script>

<style>

</style>
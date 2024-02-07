<template>
  <div id="app">
    <UsersList msg="Welcome" :businesses="businesses" />
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue'
import Service from './service/service'

const service = new Service();

export default {
  name: 'App',
  components: {
    UsersList
  },
  data() {
    return {
      businesses: [],
    }
  },
  mounted() {
    /* Calling fetchUserData to get the list of users once component is mounted  */
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const { data } = await service.getUserList();
        this.businesses = data;
      } catch (error) {
        console.log(error)
        this.businesses = [];
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

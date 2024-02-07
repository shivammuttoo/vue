<template>
    <!-- User list component to display list of users in a select dropdown -->
    <div>
        <h1>{{ msg }} {{ userName }}</h1>

        <select id="userSelect" v-model="selectedUser" @change="getJobs" aria-label="Select a user">
            <option :key="0" :value="0" disabled>Please select a user</option>
            <option v-for="business in businesses" :key="business.id" :value="business.id">{{ business.display_name }}
            </option>
        </select>
        <JobDescription v-if="selectedUser !== 0" :selectedUserData="selectedUserData"></JobDescription>
    </div>
</template>
  
<script>
import JobDescription from './JobDescription.vue';
import Service from '../service/service'
const service = new Service();

/* 
* getJobs function fetchs jobs according to the user selected from the select drop down. 
 */

function getJobs() {
    this.userName = this.businesses.find((user) => this.selectedUser === user.id).display_name
}
export default {
    name: 'UsersList',
    props: {
        businesses: Array,
        msg: String
    },
    components: {
        JobDescription
    },
    methods: {
        getJobs,
        async fetchJobData(useId) {
            try {
                const { data } = await service.getUserJobs(useId);
                this.selectedUserData = data;
            } catch (error) {
                console.log(error)
                this.selectedUserData = [];
            }
        }
    },
    data() {
        return {
            selectedUser: 0,
            jobs: [],
            userName: '',
            selectedUserData: [],
        }
    },
   
    watch: {
        selectedUser(newValue) {
            this.fetchJobData(newValue);
        }
    }




}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: block;
    margin: 0 10px;
}

button {
    color: #42b983;
    background: transparent;
    box-shadow: none;
    border: none;
}
</style>
  
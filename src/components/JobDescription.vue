<template>
  <!-- JobDescription component to show the relevant job and its details -->
    <div >
      <div class="container" v-for="userData in selectedUserData" :key="userData.id">
        <h2 data-testid="headline"><strong>Job:</strong> {{ userData.headline }}</h2>
        <p data-testid="description"><strong>Description:</strong> {{ userData.description }}</p>
        <p data-testid="date"><strong>Published date: </strong>{{ userData.date }}</p>
        <p data-testid="classification"> <strong>Classification: </strong>{{ userData.classification.name }}</p>
        <p data-testid="location"> <strong>Location: </strong>{{ userData.location.name }}</p>
      </div>
  </div>
</template>


<script >

export default {
  name: 'JobDescription',
  props: {
    selectedUserData: Array
  },
}
</script>
<style scoped>
.container {
  text-align: left;
  padding: 10px;
  box-shadow: 0px 0px 17px 0px black;
  width: 45%;
  display: inline-block;
  height: 300px;
  margin: 10px
}
</style>
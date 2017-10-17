<template>
  <div class="filter-condition">
    <div>
      <ul>
        <li>zip code</li>
        <li>distance</li>
        <li>time frame</li>
        <li>interest</li>
        <li>number of attendees</li>
        <li>search term</li>
        <li>my meetup?</li>
      </ul>
    </div>
    <div class="filtered-list"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

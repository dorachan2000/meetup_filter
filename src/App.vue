<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Top</router-link>
        <router-link to="/filter">Filter</router-link>
        <router-link to="/about">About</router-link>
        <a href='https://github.com/dorachan2000/meetup_filter'>Github Icon</a>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

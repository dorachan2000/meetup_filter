<template>
  <div class="filter-condition">
    <div>
      <ul>
        <li>zip codee</li>
        <li>distance</li>
        <li>time frame</li>
        <li>interest</li>
        <li>number of attendees</li>
        <li>search term</li>
        <li>my meetup?</li>
      </ul>
    </div>
    <ul class="filtered-list">
      <li v-for="meetup in meetups">
        {{meetup.name}}
        {{meetup.yes_rsvp_count}}
        {{meetup.short_link}}
      </li>
    </ul>
    <button v-on:click="getEvents">click for data</button>
  </div>
</template>

<script>
import getEvents from '../api/index.js'
export default {
  name: 'Filter',
  data() {
    return {
      meetups: [
        {
          yes_rsvp_count: 8,
          short_link: 'http://meetu.ps/e/D54Kr/k1RDM/i',
          link: 'https://www.meetup.com/productmanagementLA/events/241999183/',
          created: 1500974498000,
          name: 'How to Build Awesome On Demand Apps by Elementz Product Manager',
        },
      ],
    };
  },
  created() {
    this.getEvents()
  },
  methods: {
    getEvents: async function() {
      const test = await getEvents()
      this.meetups = []
      this.meetups = this.meetups.concat(test.slice(0, 10))
    }
  }
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

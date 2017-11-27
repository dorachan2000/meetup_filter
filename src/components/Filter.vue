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
        <div class="meetup-event__container">
          <a :href="meetup.short_link">
            <p class="meetup-event__group-name">{{meetup.group.name}}</p>
            <p class="meetup-event__event-name">{{meetup.name}}</p>
            <p>{{meetup.yes_rsvp_count}} people going</p>
          </a>
        </div>
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
p {
  margin: 0;
  padding: 0;
}
.filtered-list {
  display: flex;
  flex-direction: column;
}
.meetup-event__container {
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;

}
.meetup-event__event-name {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>

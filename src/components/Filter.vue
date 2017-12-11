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
    <button v-on:click="findUpcomingEvents">click for data</button>
    <button v-on:click="filterEvents">click for filter</button>
    <ul class="filtered-list">
      <li v-for="meetup in meetups">
        <div class="meetup-event__container">
          <a :href="meetup.short_link">
            <span class="meetup-event__">{{meetup.local_date}}</span>
            <span class="meetup-event__">{{meetup.local_time}}</span>
            <p class="meetup-event__group-name">{{meetup.group.name}}</p>
            <p class="meetup-event__event-name">{{meetup.name}}</p>
            <p v-if="meetup.venue && meetup.venue.name" class="meetup-event__venue-name">{{meetup.venue.name}}</p>
            <p v-else-if="meetup.venue && meetup.venue.address_1" class="meetup-event__venue-name">{{meetup.venue.address_1}}</p>
            <p v-else class="meetup-event__venue-name">Needs a location</p>
            <p>{{meetup.yes_rsvp_count}} people going</p>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import findUpcomingEvents from '../api/index.js'
import moment from 'moment'
export default {
  name: 'Filter',
  data() {
    return {
      "meetups": [
        {
          yes_rsvp_count: 8,
          short_link: 'http://meetu.ps/e/D54Kr/k1RDM/i',
          link: 'https://www.meetup.com/productmanagementLA/events/241999183/',
          created: 1500974498000,
          name: 'How to Build Awesome On Demand Apps by Elementz Product Manager',
        },
      ],
      "filters": [
        (meetup, rsvpCount) => { return meetup.yes_rsvp_count >= 5 },
        (meetup, prefSchedule) => {
          let keep = false 
          let weekday = moment(meetup.local_date).day() 
          let time = meetup.local_time 
          keep = keep || meetup.visibility !== 'public'
          keep = keep || ((weekday == 6 || weekday == 0 ) && time > "08:00" )
          keep = keep || time > "17:00" 
          return keep 
        },
      ]
    };
  },
  created() {
    this.findUpcomingEvents()
  },
  methods: {
    findUpcomingEvents: async function() {
      const test = await findUpcomingEvents()
      this.meetups = []
      this.meetups = this.meetups.concat(test.slice(0, 100))
    },
    filterEvents: function() {
      this.meetups = this.meetups.filter(meetup => {
        for(let i = 0; i < this.filters.length; i++){
          if(!this.filters[i](meetup)) return false 
          else continue
        }
        return true 
      });
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
  color: black;
  text-decoration: none;
}
p {
  margin: 0;
  padding: 0;
}
.filtered-list {
  display: flex;
  margin: 0 3rem;
  flex-direction: column;
}
.meetup-event__container {
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;
  border: 1px solid #e1e0e0;
  border-radius: 5px;
  padding: 5px;
}
.meetup-event__event-name {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>

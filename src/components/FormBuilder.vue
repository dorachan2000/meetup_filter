<template>
  <div class="panel-body">
    <form>
      <vue-form-generator :schema="schema" :model="model" :options="formOptions">
      </vue-form-generator>
    </form>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
const { validators } = VueFormGenerator;
const zipcodeCheck = (value) => {
  let re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

  if (!re.test(value)) {
    return ["Invalid Zip Code."];
  } else {
    return []
  }
};
export default {
  data () {
    return {

      model: {
        zipcode: '90024',
        distance: 15,
        timeframe: '',
        interest: '',
        numAttendees: 8,
        searchTerm: '',
        inMyMeetup: false,
      },

      schema: {
        groups: [
          {
            legend: "User Details",
            fields: [
              {
                type: "input",
                inputType: "text",
                label: "Zipcode",
                model: "zipcode",
                validator: zipcodeCheck,
              },
              {
                type: "input",
                inputType: "number",
                label: "Distance",
                model: "distance",
                max: 150,
                min: 1,
                required: true,
              },
              {
                type: "input",
                inputType: "text",
                label: "Time Frame",
                model: "timeframe",
              },
              {
                type: "input",
                inputType: "text",
                label: "Interest",
                model: "interest",
              },
              {
                type: "input",
                inputType: "number",
                label: "Number of Attendees",
                model: "numAttendees",
              },
              {
                type: "input",
                inputType: "text",
                label: "Search Term",
                model: "searchTerm",
              },
              {
                type: "select",
                label: "skills",
                model: "type",
                values: ["Javascript", "VueJS", "CSS3", "HTML5"]
              },
              {
                type: "checkbox",
                label: "In My Meetup?",
                model: "status",
                default: false
              },
              {
                type: "submit",
                label: "",
                buttonText: "Submit",
                validateBeforeSubmit: true,
                onSubmit: ()=>{console.log('hello')}
              }
            ]
          }
        ],

        formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true,
          fieldIdPrefix: 'user-'
        }
      }
    }
  }
}
</script>
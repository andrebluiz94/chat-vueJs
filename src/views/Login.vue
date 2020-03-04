<template>
  <div class="login">
    <b-jumbotron
      header="Vue.js Chat"
      lead="Powered by chatkit SDK and bootstrap-Vue"
      bg-variant="info"
      text-variant="white"
    >
      <p>For more information visit website</p>
      <b-btn target="_blank" href="https://pusher.com/chatkit">More info</b-btn>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col lg="4" md="3"></b-col>
        <b-col lg="4" md="6">
          <Loginform />
        </b-col>
        <b-col lg="4" md="3"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Loginform from "@/components/LoginForm.vue";
export default {
  name: "login",
  components: {
    Loginform
  }
};
</script>

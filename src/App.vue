<template>
  <AppHeader />
  <AppMain />
</template>

<script>
import BreweryService from '../src/services/BreweryService'
import BeerService from '../src/services/BeerService'
import AppHeader from '../src/components/AppHeader.vue'
import AppMain from '../src/components/AppMain.vue'

export default {
  name: 'App',
  components: { AppHeader, AppMain
  
  },
  data() {
    return {
      breweries: [],
      beers: []
    }
  },
  methods: {
    getBreweries() {
      BreweryService
        .getBreweries()
        .then(response => {
          this.breweries = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    getBeers() {
      BeerService
        .getBeers()
        .then(response => {
          this.beers = response.data
        })
        .catch(error => {
          console.log(error)
        })

    }
  },
  created() {
    this.getBreweries();
    this.getBeers();
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

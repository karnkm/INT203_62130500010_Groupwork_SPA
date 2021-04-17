<template>
<div id="upnav">
    <a :href="link">Covid-19 Today News</a>
</div>

  <div id="navbar" >
    <router-link to="/form">Reserve</router-link>  
    <router-link to="/about">About</router-link>
    <router-link to="/">Vaccine</router-link>
  </div>

</template>

<script>
export default {
    data() {
        return {
            link: "https://ddc.moph.go.th/viralpneumonia/eng/index.php"
        }
    },
};
</script>

<style>
#upnav{
  text-align: center;
  padding: 2mm;
  background-color: #1D3557;
  color: rgb(255, 255, 255);
}   

#navbar a {
  background-color: #457B9D;
  padding: 15px;  
  
  
  color: #F1FAEE;
  
  font-weight: lighter;
  font-size: x-large;
  
}
#navbar a.router-link-exact-active {
    background-color: #E63946;
}

</style>

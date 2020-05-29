<template>
  <nav class="navbar navbar-light" style="background-color:#62AFF2; ">
    <div>
      <router-link :to="{name:'home'}">
        <h2 class="navbar-brand">Exchange</h2>
        <img src="../assets/img/icon3.png" />
      </router-link>
    </div>

    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
</template>

<script></script>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
img {
  height: 50px;
  margin-left: 0%;
  padding: 0%;
}

h2 {
  color: white !important;
}
</style>

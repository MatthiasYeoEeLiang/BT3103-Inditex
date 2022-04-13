<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">INDITEX</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse justify-content-center " id="navbarNav">
      <ul class="navbar-nav z">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Mix and Match</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/FilterPage">Filter</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/loginPage">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Account</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link disabled"
            >Disabled</a
          >
        </li> -->
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>

</style>
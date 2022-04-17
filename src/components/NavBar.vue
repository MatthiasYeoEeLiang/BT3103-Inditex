<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <div class="container-fluid">
    <a class="navbar-brand" href="/">INDITEX</a>
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
      <ul class="navbar-nav z mx-auto ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/ReviewPage">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/FilterPage">Filter</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/shoppingcartpage">Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/profile">Account</a>
        </li>

      </ul>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="/AdminInventoryPage">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="/loginPage" >Login</a>
        </li>
        
        
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
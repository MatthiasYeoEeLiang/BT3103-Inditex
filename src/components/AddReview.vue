<template>
<section>
      <div class="container">
          <h2>Upload a review and get 10 coins!</h2>
          
          <form @submit.prevent="handleSubmit">
              
              <div class="form-group">
                  <label for="review">Leave a review...</label>
                  <textarea id="review" rows="5" v-model="review"></textarea>
              </div>

              <button type="submit">Submit</button>
          </form>
      </div>
      <br><br><br><br><br><br><br><br><br><br><br><br>

      <div>
          
          <p>Review: {{ review }}</p>
      </div>
  </section>
  
</template>
double
<script>
//import { projectFirestore } from '../firebase/config'
export default {
    data() {
        return {
            
            
            review: ''
        }
    }
}

</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat";
}
section {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.container {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 20px #00000033;
  border-radius: 8px;
}
.form-group {
  margin-top: 20px;
  font-size: 20px;
  color: #9e9e9e;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 5px;
  font-size: 18px;
  border: 1px solid rgba(128, 128, 128, 0.199);
  margin-top: 5px;
}
textarea {
  resize: vertical;
}
button {
  
  border: none;
  padding: 5px;
  background-color: black;
  color: aliceblue;
  
  cursor: pointer;
  
}
</style>
<template>
  <div>
    <section
      class="d-flex m-0 p-0 maindiv justify-content-center align-items-center w-100 body-bg"
    >
      <div class="w-75 h-75 d-flex">
        <div
          class="rounded-start w-50 inner-div text-center d-flex justify-content-center align-items-center"
        >
          <img class="w-75 h-75" src="../assets/login-image1.png" alt="" />
        </div>
        <div class="w-50 bg-white rounded-end">
          <div class="m-3 text-center">
            <h1 class="mb-2"><b>Login</b></h1>
            <p class="text-muted">Enter Username or password to login</p>
          </div>
          <form action="">
            <div class="form-floating m-3" action="">
              <input
                type="text"
                class="form-control"
                v-model="userName"
                placeholder="name@example.com"
                required
              />
              <label for="userName">User Name</label>
            </div>

            <div class="form-floating m-3" action="">
              <input
                type="password"
                class="form-control"
                v-model="pw"
                placeholder="Password"
                required
              />
              <label for="pw">Password</label>
            </div>

            <div class="d-flex justify-content-center mb-3">
              <button
                type="button"
                class="btn btn-login w-100 ms-3 me-3"
                @click="signup()"
              >
                <b> Login</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      userName: "",
      pw: "",
    };
  },
  methods: {
    signup() {
      // fetch Api
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.userName,
          password: this.pw,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.message == "Invalid credentials") {
            alert("invalid input");
          } else {
            // Store data inside local storage
            localStorage.setItem("firstName", json.firstName);
            localStorage.setItem("lastName", json.lastName);
            localStorage.setItem("image", json.image);
            localStorage.setItem("token", json.token);
            localStorage.setItem("email", json.email);
            localStorage.setItem("status", true);
            this.$router.push({ name: "HomePage" });
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Login */
.body-bg {
  background-color: #fe725d !important;
}
.maindiv {
  height: 100vh !important;
}
.inner-div {
  background-color: #ffb1a5;
}
.btn-login {
  background-color: #fe725d !important;
  color: white !important;
}
</style>

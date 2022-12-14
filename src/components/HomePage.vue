<template>
  <div>
    <div class="d-flex justify-content-center align-items-center p-2">
      <!-- -----Edit user Modal-------- -->
      <b-modal id="bv-modal-example" hide-footer>
        <template #modal-title> Edit User data </template>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">ID</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              v-model="userAfterEdit.id"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >FirstName</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              v-model="userAfterEdit.firstName"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >LastName</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              v-model="userAfterEdit.lastName"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Age</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              v-model="userAfterEdit.age"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >Email</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              v-model="userAfterEdit.email"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >Gender</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              v-model="userAfterEdit.gender"
            />
          </div>
        </div>

        <b-button
          variant="primary"
          class="mt-3"
          block
          @click="$bvModal.hide('bv-modal-example'), editUser()"
          >Save change</b-button
        >
      </b-modal>
      <!-- ----------------------- -->
      <template>
        <div>
          <b-button
            class="me-2 rounded-5 btn-logout fw-bold ps-4 pe-4"
            @click="show = true"
            >+ Add Product
          </b-button>
          <!-- ------------ Add user Modal----------------------- -->
          <b-modal
            v-model="show"
            title="Add User Data"
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
            :footer-bg-variant="footerBgVariant"
            :footer-text-variant="footerTextVariant"
          >
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label"
                >ID</label
              >
              <div class="col-sm-10">
                <input type="text" class="form-control" v-model="userId" />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label"
                >FirstName</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  v-model="userFirstName"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label"
                >LastName</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  v-model="userLastName"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label"
                >Age</label
              >
              <div class="col-sm-10">
                <input type="text" class="form-control" v-model="userAge" />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label"
                >Email</label
              >
              <div class="col-sm-10">
                <input type="text" class="form-control" v-model="userEmail" />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label"
                >Gender</label
              >
              <div class="col-sm-10">
                <input type="text" class="form-control" v-model="userGender" />
              </div>
            </div>
            <template #modal-footer>
              <div class="w-100">
                <b-button variant="primary" @click="(show = false), addUser()">
                  save change
                </b-button>
              </div>
            </template>
          </b-modal>
        </div>
      </template>

      <!-- --------------------- -->
      <!-- ------------- -->

      <button
        class="btn me-2 rounded-5 btn-logout fw-bold ps-4 pe-4"
        type="submit"
        @click="logOut()"
      >
        Logout
      </button>
    </div>
    <table class="table w-50 table-striped m-auto border">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Age</th>
          <th scope="col">Email</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in Users" v-bind:key="user.id">
          <td scope="row">{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.gender }}</td>
          <td>
            <div class="d-flex">
              <div>
                <button @click="delUser(index)" class="m-2 btn btn-danger">
                  Del
                </button>
              </div>
              <div>
                <!-- ----------------------------------- -->
                <div>
                  <b-button
                    id="show-btn"
                    class="m-2 btn btn-success"
                    @click="
                      $bvModal.show('bv-modal-example'), (userBeforeEdit = user)
                    "
                    >Edit</b-button
                  >
                </div>
                <!-- ----------------------------------- -->
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      userBeforeEdit: {},
      userAfterEdit: {
        id: "",
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        gender: "",
      },

      userId: "",
      userFirstName: "",
      userLastName: "",
      userAge: "",
      userEmail: "",
      userGender: "",
      // Modal functionality JS Code
      show: false,
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
      ],
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "warning",
      footerTextVariant: "dark",
    };
  },
  methods: {
    checkStatus() {
      var check = localStorage.getItem("status");
      console.log(check);
      if (check != "true") {
        this.$router.push({ name: "LoginPage" });
      }
    },

    // Logout
    logOut() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
    //Delete
    delUser(index) {
      this.$store.dispatch("fetchDeleteUserApi", index);
    },
    //Add user
    addUser() {
      this.$store.dispatch("fetchAddUserApi", {
        id: this.userId,
        firstName: this.userFirstName,
        lastName: this.userLastName,
        email: this.userEmail,
        gender: this.userGender,
        age: this.userAge,
      });
    },
    // Edit User
    editUser() {
      this.$store.dispatch("fetchEditUserApi", [
        this.userBeforeEdit,
        this.userAfterEdit,
      ]);
    },
  },

  computed: {
    Users() {
      // save all users data in array "Users"
      return this.$store.state.allUsers;
    },
  },
  mounted() {
    // All users Data
    this.$store.dispatch("fetchUsersData");
  },
};
</script>

<style scoped>
.profile-image {
  width: 40px;
  height: 40px;
}
.btn-logout {
  background-color: #6b4de6 !important;
  color: white !important;
}
</style>

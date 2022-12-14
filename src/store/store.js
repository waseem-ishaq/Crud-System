import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { allUsers: [] },
  mutations: {
    // all users data
    allUserData(state, user) {
      state.allUsers = user;
    },
    // delete user
    deleteUserData(state, index) {
      state.allUsers.splice(index, 1);
    },
    // Add user
    addUsers(state, obj) {
      state.allUsers.unshift(obj);
    },
    // edit user
    editUser(state, array) {
      const index = state.allUsers.findIndex((userX) => {
        return userX.id == array[0].id;
      });
      console.log(index);
      Vue.set(state.allUsers, index, array[1]);
    },
  },
  actions: {
    // all users data Api call
    fetchUsersData: (context) => {
      fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => {
          context.commit("allUserData", data.users);
        });
    },
    // deleted users data Api call
    fetchDeleteUserApi(context, index) {
      fetch("https://dummyjson.com/users/1", {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          context.commit("deleteUserData", index);
        });
    },
    // add user data Api call
    fetchAddUserApi(context, obj) {
      fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: obj.firstName,
          lastName: obj.lastName,
          age: obj.age,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          context.commit("addUsers", obj);
        });
    },
    // Edit uder data Api call
    fetchEditUserApi(context, array) {
      fetch("https://dummyjson.com/users/1", {
        method: "PUT" /* or PATCH */,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lastName: "Owais",
        }),
      })
        .then((res) => res.json())
        .then(() => {
          context.commit("editUser", array);
        });
    },
  },
});

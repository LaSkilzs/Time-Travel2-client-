// alert("ProfileState.js");
// document.onload = load();
let user = [];

// function load() {
//   getProfileData().then(data => {
//     user = data.user;
//     console.log("user", user);
//   });
// }

// async function getProfileData() {
//   const response = await fetch(`http://localhost:3000/api/v1/user/${id}`);
//   const user = await response.json();
//   return { user };
// }

const ProfileState = function(app) {
  document.querySelector("#title").textContent = "Profile Page";
  // document.querySelector("#state-image").innerHTML = "";
  // document.querySelector("#state-content").innerHTML = "";
  // document.querySelector("#jobs-section").innerHTML = "";
};

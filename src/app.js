const switchHome = document.getElementById("home");
const switchWork = document.getElementById("findwork");
const switchProfile = document.getElementById("profile");

switchHome.addEventListener("click", e => {
  app.change(new HomeState());
  e.preventDefault();
  console.log("homestate");
});
switchWork.addEventListener("click", e => {
  app.change(new WorkState());
  e.preventDefault();
  console.log("workstate");
});
switchProfile.addEventListener("click", e => {
  app.change(new ProfileState());
  e.preventDefault();
  console.log("profilestate");
});

const app = new appState();
app.init();
// debugger;

// alert("WorkState.js");
document.onload = load();
let helpwanteds = [];

function load() {
  getHomeData().then(data => {
    helpwanteds = data.helpwanteds;
    console.log("helpwanteds", helpwanteds);
  });
}

async function getHomeData() {
  const responseH = await fetch("http://localhost:3000/api/v1/helpwanteds");
  const helpwanteds = await responseH.json();
  return { helpwanteds };
}

const WorkState = function(app) {
  document.querySelector("#title").textContent = "Help Wanteds";
  console.log(helpwanteds);
};

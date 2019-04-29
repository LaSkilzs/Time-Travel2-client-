// alert("WorkState.js");
document.onload = load();
let helpwanteds = [];
let wantads = new Array();

helpwanteds.map(wantad => {
  return wantads.push({
    image: image,
    id: id,
    location: location,
    wage_per_week: wage,
    housing_offered: housing,
    female: female,
    job_id: job_id,
    image: images
  });
});

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

async function getHomeData() {
  const responseJ = await fetch("http://localhost:3000/api/v1/jobs");
  const responseI = await fetch("http://localhost:3000/api/v1/industries");
  const responseF = await fetch("http://localhost:3000/api/v1/funfacts");
  const responseG = await fetch("http://localhost:3000/api/v1/generations");
  const jobs = await responseJ.json();
  const industries = await responseI.json();
  const funfacts = await responseF.json();
  const generations = await responseG.json();
  return { jobs, industries, funfacts, generations };
}
function loadWorkImage() {
  let output = ui.showWorkStateImage(wantads[0].image, wantads[0].title);
  return output;
}
function loadWorkContent() {
  let output = "";
  wantads.map(
    wantad =>
      (output += ui.showWorkStateContent(
        wantad.location,
        wantad.wage,
        wantad.housing,
        wantad.female
      ))
  );
  return output;
}
function paginateJobs() {
  // return output;
  console.log("jobs", output);
}
function getFiveWantads() {
  let output = "";

  output += ui.showJobs(wantads[i].location, wantads[i].wage);

  return output;
}
function getFunFacts() {
  facts = new Array();
  funfacts.map(fact => {
    return facts.push({ id: fact.id, fact: fact.fact });
  });

  let num = Math.floor(Math.random() * facts.length + 1);
  let output = ui.showFunFacts(facts[num].id, facts[num].fact);
  document.querySelector(".allfacts").innerHTML = output;
  return output;
}

const WorkState = function(app) {
  document.querySelector("#title").textContent = "Help Wanteds";
  console.log(helpwanteds);
  document.querySelector("#state-image").innerHTML = loadWorkImage();
  // document.querySelector("#state-content").innerHTML = loadWorkContent();
  document.querySelector("#jobs-section").innerHTML = getFiveWantads();
};

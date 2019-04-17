// alert("HomeState.js");
document.onload = load();
let jobs = [];
let industries = [];
let funfacts = [];

function load() {
  getHomeData().then(data => {
    jobs = data.jobs;
    industries = data.industries;
    funfacts = data.funfacts;
    console.log("jobs", jobs);
    console.log("industries", industries);
    console.log("funfacts", funfacts);
  });
}

async function getHomeData() {
  const responseJ = await fetch("http://localhost:3000/api/v1/jobs");
  const responseI = await fetch("http://localhost:3000/api/v1/industries");
  const responseF = await fetch("http://localhost:3000/api/v1/funfacts");
  const jobs = await responseJ.json();
  const industries = await responseI.json();
  const funfacts = await responseF.json();
  return { jobs, industries, funfacts };
}

const HomeState = function(app) {
  document.querySelector("#title").textContent = "Job Seekers";
  console.log(industries);
};

// alert("HomeState.js");

document.onload = load();
let jobs = [];
let industries = [];
let funfacts = [];
let generations = [];
const ui = new UI();

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
  const responseG = await fetch("http://localhost:3000/api/v1/generations");
  const jobs = await responseJ.json();
  const industries = await responseI.json();
  const funfacts = await responseF.json();
  const generations = await responseG.json();
  return { jobs, industries, funfacts, generations };
}
function loadIndustryImage() {
  let output = ui.showHomeStateImage(industries[0].image, "progressive era");
  return output;
}
function loadIndustry() {
  let output = "";
  industries.map(
    industry =>
      (output += ui.showHomeStateContent(
        industry.name,
        industry.available_jobs
      ))
  );
  console.log(output);
  return output;
}
function paginateJobs() {
  // return output;
  console.log("jobs", output);
}
function getFiveJobs() {
  let output = "";
  let industryList = new Array();
  let jobList = new Array();

  industries.map(industry => {
    return industryList.push({ id: industry.id, name: industry.name });
  });
  jobs.map(job => {
    return jobList.push({
      name: job.name,
      job_description: job.job_description,
      industry_id: job.industry_id
    });
  });
  console.log(industryList[0]);
  for (let i = 0; i < 5; i++) {
    let idx = jobList[i].industry_id;

    output += ui.showJobs(
      jobList[i].name,
      industryList[idx].name,
      jobList[i].job_description
    );
  }
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

const HomeState = function(app) {
  document.querySelector("#title").textContent = "Job Seekers";
  if (funfacts.length > 0) {
    document.querySelector(".allfacts").innerHTML = getFunFacts();
    document.querySelector("#state-content").innerHTML = loadIndustry();
    // document.querySelector("#state-image").innerHTML = loadIndustryImage();
    document.querySelector("#jobs-section").innerHTML = getFiveJobs();
  }
  console.log(industries);
};

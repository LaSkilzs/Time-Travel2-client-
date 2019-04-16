alert("HomeState.js");

class HomeState {
  constructor() {}
  function(page) {
    document.querySelector("#title").textContent = "Job Seekers";
    console.log("home state");
  }

  async getHomeStateData() {
    const Industriesresponse = await fetch(
      "http//localhost:3000/api/v1/industries"
    );
    const Jobsresponse = await fetch("http//localhost:3000/api/v1/jobs");
    const IndustriesData = await Industriesresponse.json();
    const JobsData = await Jobsresponse.json();
    return IndustriesData;
    return JobsData;
  }
}

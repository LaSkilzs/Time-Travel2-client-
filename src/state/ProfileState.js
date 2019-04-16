alert("ProfileState.js");

class ProfileState {
  constructor() {}
  function(page) {
    document.querySelector("#title").textContent = "Profile Page";
    console.log("profile state");
  }
  async getProfileStateData() {
    const Profileresponse = await fetch("http//localhost:3000/api/v1/profiles");
    const Applicationsresponse = await fetch(
      "http//localhost:3000/api/v1/applicationss"
    );
    const ProfileData = await Profileresponse.json();
    const ApplicationsData = await Applicationsresponse.json();
    return ProfileData;
    return ApplicationsData;
  }
}

class UI {
  showFunFacts(id, fact) {
    return `
    <div class="card-header">
          Fact ${id}
        </div>
        <div class="facts card-body">
          <blockquote class="blockquote mb-0">
            <p>${fact}</p>
          </blockquote>
        </div>
        `;
  }
  showHomeStateImage(image, title) {
    return `
      <div class="card col-5 mb-5">
        <img class="m-2" src=${image} alt="" />
        <div class="card-body ">
          <h4 class="card-subtitle">${title}</h4>
        </div>
      </div>
        `;
  }
  showHomeStateContent(name, available_jobs) {
    return `
      <li class="list-group-item d-flex justify-content-between align-items-center">${name}<span class="badge badge-primary badge-pill">${available_jobs}</span></li>
        `;
  }
  showWorkStateImage(image, title) {
    return `
      <div class="card col-5 mb-5">
        <img class="m-2" src=${image} alt="" />
        <div class="card-body ">
          <h4 class="card-subtitle">${job.title}</h4>
        </div>
      </div>
        `;
  }
  showWorkStateContent(location, wage, housing, female) {
    return `
  <div class="card-body">
    <h4>Still Waitinig</h4>
    <ul>
      <li><span>Location:</span> ${location}</li>
      <li><span>Wage Per Hour:</span> ${wage}</li>
      <li><span>Housing Offered:</span> ${housing}</li>
      <li><span>Females?:</span> ${female}</li>
    </ul>
    <div class="float-right">
      <button class="btn-success">show</button>
      <button class="btn-primary">apply</button>
      <button class="btn-primary">delete</button>
    </div>
  </div>
    `;
  }
  showProfileStateImage(image, name) {
    return `
      <div class="card col-5 mb-5">
        <img class="m-2" src=${image} alt="" />
        <div class="card-body ">
          <h4 class="card-subtitle">${name}</h4>
        </div>
      </div>
        `;
  }
  showProfileStateContent(age, gender, education, trade, available) {
    return `
      <div class="card-body">
        <h4>${experience}</h4>
        <ul>
          <li><span>Age:</span> ${age}</li>
          <li><span>Gender Per Hour:</span> ${gender}</li>
          <li><span>Education Offered:</span> ${education}</li>
          <li><span>Trade:</span> ${trade}</li>
          <li><span>Available for Work?:</span> ${available}</li>
        </ul>
        <div class="float-right">
          <button class="btn-success">edit</button>
          <button class="btn-primary">create new</button>
          <button class="btn-primary">delete</button>
        </div>
      </div>
        `;
  }
  showJobs(title, industry, description) {
    return `
    <div class="row card">
      <div class="jobcard card-body">
        <div class="">
          <h2>${title}</h2>
          <h4>${industry}</h4>
          <p>${description}</p>
        </div>
        <div class="float-right">
          <button class="btn-success">view</button>
          <button class="btn-primary">apply</button>
          <button class="btn-danger">delete</button>
        </div>
      </div>
      `;
  }
  showHelpWanteds(title, location, wage) {
    return `
    <div class="row card">
      <div class="jobcard card-body">
        <div class="">
          <h2>${job.title}</h2>
          <h4>${location}</h4>
          <p>${wage}</p>
        </div>
        <div class="float-right">
          <button class="btn-success">view</button>
          <button class="btn-primary">apply</button>
          <button class="btn-danger">delete</button>
        </div>
    </div>
`;
  }
  showSeeMore(
    name,
    experience,
    environment,
    apprenctice,
    education,
    age,
    gender,
    travel,
    schedule,
    avg_wage,
    avg_hours,
    openings
  ) {
    return `
    <div class="card-body">
      <h4>${name}</h4>
      <ul>
        <li><span>Experience:</span> ${experience}</li>
        <li><span>Work Environment:</span> ${environment}</li>
        <li><span>Apprentinceship:</span> ${apprenctice}</li>
        <li><span>Education:</span> ${education}</li>
        <li><span>Age:</span> ${age}</li>
        <li><span>Gender:</span> ${gender}</li>
        <li><span>Travel:</span> ${travel}</li>
        <li><span>Schedule:</span> ${schedule}</li>
        <li><span>Avg wage:</span> ${avg_wage}</li>
        <li><span>Avg hours:</span> ${avg_hours}</li>
        <li><span>Job Openings:</span> ${openings}</li>
      </ul>
      <div class="float-right">
        <button class="btn-success">apply</button>
        <button class="btn-primary">close</button>
      </div>
    </div>
    `;
  }
}

export function createProjects(htmlTarget, projects) {
  const target = document.querySelector(htmlTarget);
  const { pathname } = document.location;
  target.innerHTML = "";

  if (pathname === "/index.html" || pathname === "/") {
    projects.forEach((project) => {
      if (project.featured) {
        target.innerHTML += `
        <div class="projectContainer">
            <div class="project">
                <div class= "front">
                <h3>${project.title}</h3>
                <img src="${project.projectimage[0].url}" alt="" />
                </div>
                <div class="back">
                <h3>${project.title}</h3>
                <a href="${project.website}"target="_blank" rel="noopener noreferrer">Website</a>
                <a href="${project.github}" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="project.html?id=${project.id}">About Project</a>
                </div>
            </div>
            </div>`;
      }
    });
  } else {
    projects.forEach((project) => {
      target.innerHTML += `
      <div class="projectContainer">
            <div class="project">
                <div class= "front">
                <h3>${project.title}</h3>
                <img src="${project.projectimage[0].url}" alt="" />
                </div>
                <div class="back">
                <h3>${project.title}</h3>
                <a href="${project.website}"target="_blank" rel="noopener noreferrer">Website</a>
                <a href="${project.github}"target="_blank" rel="noopener noreferrer">Github</a>
                <a href="project.html?id=${project.id}">About Project</a>
                </div>
            </div>
            </div>`;
    });
  }
}

export function createIndividualProject(project) {
  const htmlTarget = document.querySelector(".individualProjectContainer");
  const title = document.querySelector("title");
  title.innerHTML = `Holmen Frontend | ${project.title}`;

  htmlTarget.innerHTML = `
  <div class="individualProject">
  <h1>${project.title}</h1>
  <img src="${project.projectimage[1].url}" alt="" />
  <h2>Brief</h2>
  <p>${project.description}</p>
  <div class="links">
  <a class="mainCta"href="${project.website}"  target="_blank" rel="noopener noreferrer">Website</a>
  <a class="secondaryCta" href="${project.github}" target="_blank" rel="noopener noreferrer">Github</a>
  </div>
  </div>`;
}

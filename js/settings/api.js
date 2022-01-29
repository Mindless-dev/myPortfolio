import { flipFunctionality } from "../utils/projectCard.js";
import { baseUrl } from "../settings/url.js";
import { createProjects } from "../components/projects.js";
import { createIndividualProject } from "../components/projects.js";
import { message } from "../components/common/message.js";

export async function apicall(target) {
  try {
    const url = baseUrl;
    const response = await fetch(url);
    const json = await response.json();
    createProjects(target, json);
    flipFunctionality();
  } catch (error) {
    message("apiError", target, "an error has occured, try refreshing the page");
  }
}

export async function individualProduct() {
  try {
    const querystring = document.location.search;
    const params = new URLSearchParams(querystring);
    const id = params.get("id");
    const url = baseUrl + id;
    const response = await fetch(url);
    const project = await response.json();
    createIndividualProject(project);
  } catch (error) {
    message("apiError", ".individualProjectContainer", "an error has occured, try refreshing the page");
  }
}

export function message(typeOfError, htmlTarget, Errormessage) {
  const target = document.querySelector(htmlTarget);
  target.innerHTML = `<div class="${typeOfError}">
    <p>${Errormessage}</p>
    </div>`;
}

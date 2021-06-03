let anchor = document.querySelector(".user-search");

let textSpan = document.createElement("span");
textSpan.innerText = "Listas";
textSpan.classList.add("header-user-message");
textSpan.classList.add("ct-pl--10");

let button = document.createElement("button");
button.classList.add("d-flex");
button.classList.add("util-button-activable");
button.classList.add("ct-user-dropdown-toggle");
button.classList.add("js-user-dropdown-toggle");
button.id = "headerListas";
button.setAttribute("data-toggle", "ct-dropdown");
button.append(textSpan);

//popover
let popover = document.createElement("div");
popover.classList.add("popover-listas");
popover.classList.add("ct-listas-dropdown");
popover.style.display = "none";

let placeholder = document.createElement("span");
placeholder.innerText = "nothing to see yet";
popover.append(placeholder);

//the container div
let div = document.createElement("div")
div.classList.add("listas");
div.append(button);
div.append(popover);

anchor.insertAdjacentElement("afterend", div);

button.addEventListener("click", () => {
    console.log()
    if(popover.style.display === "none") {
        popover.style.display = "block";
    } else {
        popover.style.display = "none";
    }
});
let textbox = document.getElementById("textbox")

function search() {
    let url = textbox.value;
    document.getElementById("web_iframe").src = url;
}

let button = document.getElementById("search_button");
button.addEventListener("click", search);

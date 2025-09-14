import Sh from "../js_libs/Sh.js";
const shell = new Sh();

function shutdown() {
    shell.sh("poweroff");
}
function close_app() {
    document.getElementById("running").src = "";
    let app_name = document.getElementById("app_name");
    app_name.innerText = "Nothing";
}
function update_time() {
    const actual_time = new Date();
    const hours = actual_time.getHours();
    const minutes = actual_time.getMinutes().toString().padStart(2, '0'); 
    document.getElementById("time").innerHTML = `${hours}:${minutes}`;
}

let close_button = document.getElementById("close_button");
close_button.addEventListener("click", close_app);

let shutdown_button = document.getElementById("shutdown_button");
shutdown_button.addEventListener("click", shutdown);

setInterval(update_time, 1000);
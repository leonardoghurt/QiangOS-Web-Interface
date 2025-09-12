export default class App {
    run() {
        document.getElementById("running").src = this.path;
        let app_name = document.getElementById("app_name");
        app_name.innerText = this.name;
    }
    create_launcher(name, path, icon) {
        let launchpad = document.getElementById("launchpad");
        
        let button = document.createElement("button");
        button.id = name;
        let img = document.createElement("img");
        img.src = icon;
        button.appendChild(img);

        button.addEventListener("click", () => this.run());
        launchpad.appendChild(button);
    }
    constructor(name, path, icon) {
        this.name = name;
        this.path = path;
        this.icon = icon;
        this.create_launcher(this.name, this.path, this.icon)
    }

}
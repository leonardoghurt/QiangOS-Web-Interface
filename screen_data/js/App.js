class App {
    run(entered_path) {
        document.getElementById("running").src = entered_path;
    }

    constructor(name, path, icon) {
        
        this.name = name;
        this.path = path;
        this.icon = icon;
        
        let launchpad = document.getElementById("launchpad");
        
        let button = document.createElement("button");
        button.id = name;
        let img = document.createElement("img");
        img.src = icon;
        button.appendChild(img);

        button.addEventListener("click", () => this.run(this.path));
        launchpad.appendChild(button);
        
    }

}


const browser = new App("Browser", "apps/browser/index.html", "https://img.icons8.com/color/90/000000/internet.png");
const wikipedia = new App("Wikipedia", "https://wikipedia.org/", "https://wikipedia.org/favicon.ico");
const ask = new App("Ask", "https://ask.com/", "https://ask.com/favicon.ico");
const calculator = new App("Calculator", "apps/calculator/index.html", "https://img.icons8.com/color/90/000000/calculator.png");


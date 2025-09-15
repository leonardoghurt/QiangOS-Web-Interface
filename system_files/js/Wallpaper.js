class Wallpaper {

    set_wallpaper() {
        window.parent.document.querySelector("body").style.background = `url(${this.path})`;
        window.parent.document.querySelector("body").style.backgroundSize = `cover`;
    }

    create_button() {
        document.write(`<button id="${this.name}"><img src="${this.path}"></button>`);
        document.getElementById(this.name).addEventListener("click", () => this.set_wallpaper());
    }

    constructor(name, path) {
        this.path = path;
        this.name = name;
        this.create_button();

    }

}

wallpaper1 = new Wallpaper("Default", "/system_files/wallpapers/wallpaper1.webp");
wallpaper2 = new Wallpaper("Autumn", "/system_files/wallpapers/wallpaper2.jpg");
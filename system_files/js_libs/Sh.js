export default class Sh {
    sh(command) {
        window.pywebview.api.exec_com(command);
        window.pywebview.api.exec_com('echo "Command executed succesfully"');
    }
}
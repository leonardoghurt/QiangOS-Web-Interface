import webview
import subprocess

# Starts webserver for the GUI
subprocess.Popen("python3 -m http.server 8080", shell=True)

class Api:
    def exec_com(self, entered_command):
        subprocess.Popen(entered_command, shell=True)

#Starts client
webview.create_window(
    title="QiangOS GUI Client",
    url="http://localhost:8080/",      
    fullscreen=True,
    js_api=Api()
)

webview.start()

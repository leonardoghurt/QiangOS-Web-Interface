import webview
import subprocess

# Start webserver for the GUI
subprocess.Popen("python3 -m http.server 8000", shell=True)

class Api:
    def exec_com(self, entered_command):
        subprocess.Popen(entered_command, shell=True)

#Start client
webview.create_window(
    title="QiangOS GUI Client",
    url="http://localhost:8000/",      
    fullscreen=True,
    js_api=Api()
)

webview.start()

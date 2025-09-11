import webview
import subprocess

class Api:
    def exec_com(self, entered_command):
        subprocess.Popen(entered_command, shell=True)

webview.create_window(
    title="QiangOS WebView",
    url="index.html",      
    fullscreen=True,
    js_api=Api()
)

webview.start()

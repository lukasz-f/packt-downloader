import pyautogui
import time
import re

pattern = r'9781838828042/.*$'

print('start')
time.sleep(5)

with open('save_url.txt', 'r') as f:
    while True:
        pyautogui.hotkey('command', 'l')
        time.sleep(1)

        url = f.readline()
        pyautogui.typewrite(url + '\n', interval=0.1)
        time.sleep(10)

        file_name = re.findall(pattern, url)[0]

        pyautogui.hotkey('command', 's')
        time.sleep(2)

        pyautogui.typewrite(file_name, interval=0.1)
        pyautogui.hotkey('enter')
        time.sleep(10)

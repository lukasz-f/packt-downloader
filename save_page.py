import pyautogui
import time
import re

pattern = r'9781786464453/.*$'

print('start')
time.sleep(5)
with open('save_url.txt', 'r') as f:
    while True:
        url = f.readline()
        print(url)
        pyautogui.hotkey('command', 'l')
        time.sleep(1)
        pyautogui.typewrite(url + '\n', interval=0.1)
        time.sleep(10)
        pyautogui.hotkey('command', 's')
        time.sleep(1)
        pyautogui.press('left')
        time.sleep(1)
        file_name = re.findall(pattern, url)[0] + '/'
        pyautogui.typewrite(file_name, interval=0.1)
        pyautogui.hotkey('enter')
        time.sleep(10)

print('stop')

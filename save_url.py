from selenium import webdriver
import time

url = 'https://subscription.packtpub.com/book/cloud_and_networking/9781838828042/1'
driver = webdriver.Chrome('./chromedriver/chromedriver-85')
time.sleep(5)

with open('save_url.txt', 'a') as f:
    while True:
        f.write(url)
        f.write('\n')
        driver.get(url)
        time.sleep(5)
        url = driver.find_element_by_css_selector('a.btn.btn-primary.pull-right.btn-lg.btn-block').get_attribute("href")

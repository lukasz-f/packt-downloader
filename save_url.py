from selenium import webdriver
import time

url = 'https://subscription.packtpub.com/book/application_development/9781788995573/1'
driver = webdriver.Chrome('./chromedriver')
time.sleep(5)

with open('save_url.txt', 'w') as f:
    while True:
        f.write(url)
        f.write('\n')
        driver.get(url)
        time.sleep(5)
        url = driver.find_element_by_css_selector('a.btn.btn-primary.pull-right.btn-lg.btn-block').get_attribute("href")

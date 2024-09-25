from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://exemplo.com/form")

checkbox = driver.find_element(By.ID, "aceito")
checkbox.click()

assert checkbox.is_selected()
driver.quit()

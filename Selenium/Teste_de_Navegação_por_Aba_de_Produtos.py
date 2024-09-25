from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://exemplo.com/produtos")

tabs = driver.find_elements(By.CLASS_NAME, "product-tab")
tabs[1].click()

assert "produtos-categoria-2" in driver.current_url
driver.quit()

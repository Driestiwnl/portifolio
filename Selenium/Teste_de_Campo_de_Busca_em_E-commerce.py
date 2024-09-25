from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://exemplo-ecommerce.com")

driver.find_element(By.NAME, "search").send_keys("produto")
driver.find_element(By.ID, "searchBtn").click()

assert "resultados" in driver.page_source
driver.quit()

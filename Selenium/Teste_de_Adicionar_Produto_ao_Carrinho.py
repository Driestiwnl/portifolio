from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://exemplo-ecommerce.com/produto-xyz")

driver.find_element(By.ID, "add_to_cart").click()
driver.find_element(By.CLASS_NAME, "cart").click()

assert "produto-xyz" in driver.page_source
driver.quit()

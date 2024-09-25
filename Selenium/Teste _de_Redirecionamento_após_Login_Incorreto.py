from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://exemplo.com/login")

driver.find_element(By.ID, "username").send_keys("usuario_invalido")
driver.find_element(By.ID, "password").send_keys("senha_errada")
driver.find_element(By.ID, "loginBtn").click()

assert "erro" in driver.page_source
driver.quit()

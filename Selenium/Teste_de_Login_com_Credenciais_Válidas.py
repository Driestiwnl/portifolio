from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://exemplo.com/login")

driver.find_element(By.ID, "username").send_keys("usuario_valido")
driver.find_element(By.ID, "password").send_keys("senha_valida")
driver.find_element(By.ID, "loginBtn").click()

assert "dashboard" in driver.current_url
driver.quit()

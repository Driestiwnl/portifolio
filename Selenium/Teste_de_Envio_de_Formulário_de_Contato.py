from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://exemplo.com/contato")

driver.find_element(By.ID, "name").send_keys("Nome Exemplo")
driver.find_element(By.ID, "email").send_keys("email@exemplo.com")
driver.find_element(By.ID, "message").send_keys("Mensagem de teste.")
driver.find_element(By.ID, "submit").click()

assert "mensagem enviada" in driver.page_source
driver.quit()

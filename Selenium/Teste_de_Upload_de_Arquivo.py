from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://exemplo.com/upload")

upload_field = driver.find_element(By.ID, "arquivo")
upload_field.send_keys("/caminho/para/o/arquivo.jpg")
driver.find_element(By.ID, "uploadBtn").click()

assert "upload concluído" in driver.page_source
driver.quit()

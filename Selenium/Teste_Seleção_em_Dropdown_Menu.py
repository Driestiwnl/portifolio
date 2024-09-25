from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome()
driver.get("https://exemplo.com/form")

dropdown = Select(driver.find_element(By.ID, "pais"))
dropdown.select_by_visible_text("Brasil")

assert "Brasil" in dropdown.first_selected_option.text
driver.quit()

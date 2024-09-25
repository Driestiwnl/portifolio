Feature: Calcular média
  Scenario: Calcular a média de [1, 2, 3, 4, 5]
    Given a lista [1, 2, 3, 4, 5]
    When eu calcular a média
    Then o resultado deve ser 3

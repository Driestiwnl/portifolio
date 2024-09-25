Feature: Validar e-mail
  Scenario: Validar e-mail "teste@exemplo.com"
    Given o e-mail "teste@exemplo.com"
    Then ele deve ser válido

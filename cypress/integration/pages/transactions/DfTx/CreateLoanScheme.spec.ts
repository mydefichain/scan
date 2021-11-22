context('/transactions/[txid] - Create Loan Scheme on desktop', () => {
  before(() => {
    cy.visit('/transactions/e48186121e1bb2266fce6444e48e3c83ddf7225a82ff70d203d3c549a637c175')
  })

  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('should have heading', () => {
    cy.findByTestId('DfTxHeader.Title').contains('DeFi Transaction')
  })

  it('should have DfTx type', () => {
    cy.findByTestId('DfTxHeader.Subtitle').contains('Type:Create Loan Scheme')
  })

  it('should have DfTxCreateLoanScheme Identifier', function () {
    cy.findByTestId('DfTxCreateLoanScheme.Identifier').should('have.text', 'MIN350')
  })

  it('should have DfTxCreateLoanScheme Ratio', function () {
    cy.findByTestId('DfTxCreateLoanScheme.Ratio').should('have.text', '1.50000000')
  })

  it('should have DfTxCreateLoanScheme Rate', function () {
    cy.findByTestId('DfTxCreateLoanScheme.Rate').should('have.text', '1.50000000')
  })

  it('should have DfTxCreateLoanScheme Update', function () {
    cy.findByTestId('DfTxCreateLoanScheme.Update').should('have.text', '0.00000000')
  })
})

context('/transactions/[txid] - Create Loan Scheme on Mobile', () => {
  before(() => {
    cy.visit('/transactions/e48186121e1bb2266fce6444e48e3c83ddf7225a82ff70d203d3c549a637c175')
  })

  beforeEach(() => {
    cy.viewport('iphone-x')
  })

  it('should have heading', () => {
    cy.findByTestId('DfTxHeader.Title').contains('DeFi Transaction')
  })

  it('should have DfTx type', () => {
    cy.findByTestId('DfTxHeader.Subtitle').contains('Type:Create Loan Scheme')
  })

  it('should have DfTxCreateLoanScheme Identifier', function () {
    cy.findByTestId('DfTxCreateLoanScheme.Identifier').should('have.text', 'MIN350')
  })

  it('should have DfTxCreateLoanScheme Ratio', function () {
    cy.findByTestId('DfTxCreateLoanScheme.Ratio').should('have.text', '1.50000000')
  })

  it('should have DfTxCreateLoanScheme Rate', function () {
    cy.findByTestId('DfTxCreateLoanScheme.Rate').should('have.text', '1.50000000')
  })

  it('should have DfTxCreateLoanScheme Update', function () {
    cy.findByTestId('DfTxCreateLoanScheme.Update').should('have.text', '0.00000000')
  })
})

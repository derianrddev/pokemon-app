describe('Pokémon App', () => {
  it('should display a list of Pokémon', () => {
    cy.visit('http://localhost:4200');

    cy.get('h1').contains('Pokémon Listings');
    cy.get('p').contains('This is a list of all Generation 1 Pokémon. There are 151 Pokémon in this generation. Click on the image to see more information.');

    cy.get('ul').children().should('have.length', 151);
  });

  it('should navigate to the Pokémon detail page when an image is clicked', () => {
    cy.visit('http://localhost:4200');

    cy.get('ul > li').first().find('a').click();

    cy.url().should('include', '/pokemon/1');
    cy.get('h1').contains('Bulbasaur');
    cy.get('span').contains('#1');
  });

  it('should display the Pokémon details correctly', () => {
    cy.visit('http://localhost:4200/#/pokemon/1');

    cy.get('h1').contains('Bulbasaur');
    cy.get('li').contains('Height: 0.7 m');
    cy.get('li').contains('Weight: 6.9 kg');
    cy.get('li').contains('Abilities: Overgrow, Chlorophyll');
    cy.get('li').contains('Types: Grass Poison');
  });
});

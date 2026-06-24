//EXERCICE 1: Récupérer les produits

const apiProduct = `${Cypress.env("apiUrl")}/products`;

context("GET /products", () => {
  it("gets a list of products", () => {
    cy.request("GET", apiProduct).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.length).to.be.greaterThan(15)
    })
  })
})

//EXERCICE 2: Récupérer les détails d'une catégorie par ID

let categoryId;
const apiCategories = `${Cypress.env("apiUrl")}/categories`;
it("Récupérer toutes les catégories et extraire un ID", () => { .
  cy.request("GET", apiCategories).then((response) => {
    // "Prends une catégorie au hasard dans response.body et récupère son id :"
    categoryId = response.body[Math.floor(Math.random() * response.body.length)].id;
  });
});

it("Récupérer les détails d'une catégorie par ID", () => {
  // "Vérifiez que l'ID de catégorie est un nombre"
  expect(categoryId).to.be.a("number");

  // "Vérifiez que la requête pour récupérer les détails de la catégorie avec l'ID extrait fonctionne"
  cy.request(apiCategories + `/${categoryId}`)
    .its("status") // Equivaut à expect response.status
    .should("eq", 200); // Equivaut à expect(response.status).to.eq(200)
});

// Equivaut à cy.request(...)
// .then((response) => {
//   expect(response.status).to.eq(200);
// });

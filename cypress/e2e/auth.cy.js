import { faker } from '@faker-js/faker'; //n’oubliez jamais l’import, qui est nécessaire


// 1 - Générer un utilisateur aléatoire avec Faker.
const fakeEmail = faker.internet.email();
const fakePassword = faker.internet.password({ length: 20 }); // On créer un objet { length: 20 } et on le passe en argument à la méthode password() => différent du destructuring : const { length } = options; ➡️ On extrait une propriété d'un objet existant.

const apiUrl = Cypress.env("apiUrl");

let token = "";

before(() => {
  // 2 - Inscrire cet utilisateur avec l'API.
  cy.request("POST", apiUrl + "/register", {
    email: fakeEmail,
    password: fakePassword,
  }).then((response) => {
    // Vérifie que l'inscription est réussie.
    expect(response.status).to.eq(201);
    
    // 3 - Le connecter avec l'API. 
    cy.request("POST", apiUrl + "/login", {
      email: fakeEmail,
      password: fakePassword,
      // Quand la requête part vers l'API, Cypress transforme l'objet JavaScript en JSON.
    }).then((response) => {
      // 4 - Récupérer le token et le stocker dans une variable.
      token = response.body.token;
    });
  });
});

it.only("Votre premier test", () => {
  // 5 - Utiliser le token dans votre premier test
  cy.request({
    method: "GET",
    url: apiUrl + "/products",
    headers: {
      Authorization: `Bearer ${token}` // Utilisez le token ici
    },
    body: {
      //s’il y a un body
    }
  }).then((response) => {
    // Vos assertions pour votre test
    expect(response.status).to.eq(200);
    expect(response.body).to.have.lengthOf(8);
  });
});
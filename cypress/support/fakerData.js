import { faker } from '@faker-js/faker';

// 1ere écriture valide: Avec Return 
export const fakeUser = () => {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}

// 2eme écriture valide: Return implicite d’objet:

// export const fakeUser = () => ({
//     name: faker.person.fullName(),
//     email: faker.internet.email(),
//     password: faker.internet.password()
// })
// Parenthèses pour dire que ce n'est pas le corps de la fonction mais un objet retourné par la fonction

// Test rapide
const user = fakeUser();
console.log('User: ', user);
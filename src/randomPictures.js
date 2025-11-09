
import { faker } from "@faker-js/faker";


/*Usa faker per generare un'immagine casuale con autore e anno

*/
export function generateTodayImage() {
  return {
    url: faker.image.urlPicsumPhotos(),
    author: faker.person.fullName(),
    year: faker.number.int({
      min: 1900,
      max: new Date().getFullYear(),
    })
  };
}
export function generateHtml(info) {
  return `
<html>
  <head>
    <title>Random Picture</title>
  </head>
  <body>
    ${generateImageHtml(info)}
  </body>
</html>
`;
}

export function generateImageHtml(info) {
  return `
    <img src="${info.url}" alt="Random Image" />
    <p>Author: ${info.author}</p>
    <p>Year: ${info.year}</p>
  `;
}

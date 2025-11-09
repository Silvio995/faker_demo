
import './style.css';
// @ts-ignore
import { generateTodayImage, generateHtml , generateImageHtml} from './randomPictures.js';



import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

const info = generateTodayImage();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>

   <div class="faker-section">
      <h2>Random Picture of the Day</h2>
      ${generateImageHtml(info)}
    </div>
  </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

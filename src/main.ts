import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Bird } from './app/app.bird';
const myBird = new Bird();
  myBird.Birdname = "Pit";
  myBird.Wingspan = "17cm";
  myBird.Eggsize = 20;

  console.log(`Aquest es el meu ocell. Es diu ${myBird.Birdname}, i la seva llagrade es de ${myBird.Wingspan}, i per finalitzar el tamany del ou es de ${myBird.Eggsize}.`)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

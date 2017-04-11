# ngJson
Service for read Json Files (online or local) in Angular 2.

## For use the test app:

```
git clone https://github.com/ibuioli/ngJson
npm install
npm start
```

## For use in an existing proyect:

```
git clone https://github.com/ibuioli/ngJson
```
Copy from src/app folder the file ```json.service.ts```.

Import the service in your ```app.module.ts```:

```
import { JsonService } from './json.service';
```

Declare the service in your ```app.module.ts```:

```
providers: [JsonService,]
```

Import the Service in your component:

```
import { JsonService } from './json.service';
```

Then call it in your ```constructor```, where ```file.json``` is the route of your file:

```
constructor(private jsonService: JsonService) {
   jsonService.getJson(file.json).subscribe(val => {

   });
}
```

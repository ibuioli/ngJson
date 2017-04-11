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
git clone https://github.com/ibuioli/ngRoutesTrasition
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

Then call it in your ```constructor```:

```
constructor(private jsonService: JsonService) {
   jsonService.getJson(this.jsonRute).subscribe(val => {

   });
}
```

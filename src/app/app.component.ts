import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  nombre: string = "Capitán América";
  nombrePropio: string = "MaTiAs rUiZ aNdRes";
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  personajes: string[] = ["Ironman", "Spiderman", "Thor", "Loki", "Groot"];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;
  idioma: string = "ca";
  videoUrl: string = "https://www.youtube.com/embed/TlO8oI8B2HA";
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "B",
    },
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("llegaron los datos");
    }, 4500);
  });
}

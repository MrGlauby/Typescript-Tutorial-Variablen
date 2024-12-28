console.log("Hallo, TypeScript!");

// -------------------------------------------------- Aufgabe 1: Eine Variable deklarieren und verwenden
// Deklariere eine Variable und gib ihren Wert in der Konsole aus.

let alter: number = 25;
let isStudent: boolean = true;

console.log("Aufgabe 1:", alter);
console.log("Aufgabe 1:", isStudent);

// -------------------------------------------------- Aufgabe 2: Konstanten verwenden
// Verwende const, um eine Konstante zu deklarieren.

const maxPunkte: number = 100;
console.log("Aufgabe 2:", maxPunkte);

// maxPunkte = 200;
// console.log("Neuer Wert von maxPunkte:", maxPunkte); // Das wird niemals erreicht!

// Ergebnis!
// Uncaught TypeError: Assignment to constant variable.
//     at app.js:14:11

// -------------------------------------------------- Aufgabe 3: Variablen an Funktionen übergeben
// Lerne, wie Variablen an Funktionen übergeben werden.

function quadriere(zahl: number): number {
  return zahl * zahl;
}

const zahl: number = 5;
console.log("Aufgabe 3: Die quadrierte Zahl ist:", quadriere(zahl));

// ----------------------------------------------------- Aufgabe 4: Funktionen mit mehreren Parametern
// Arbeite mit Funktionen, die mehrere Parameter verwenden.

function berechne(a: number, b: number): number {
  return a * b;
}

const ergebnis: number = berechne(10, 10);
console.log("Aufgabe 4:", ergebnis);

// --------------------------------------------------------- Aufgabe 5: Typen explizit angeben
// Verwende explizite Typen, um Variablen und Parameter zu deklarieren.

let land: string = "Mordor";
let einwohner: number = 5000;

function landinfo(land: string, einwohner: number): string {
  return `${land} hat ${einwohner} einwohner.`;
}

console.log("Aufgabe 5:", landinfo(land, einwohner));

//  -------------------------------------------------------------- Aufgabe 6: Typen aus Bibliotheks-Funktionssignaturen lesen
// Nehmen wir an, du arbeitest mit folgender Funktionssignatur aus einer Bibliothek: function rechneMitDaten(daten: number[], faktor: number): number[];

// Aufgabe:

// Erstelle ein Array zahlen mit den Werten [2, 4, 6].
// Rufe rechneMitDaten mit zahlen und einem Faktor deiner Wahl auf.
// Implementiere rechneMitDaten, sodass jede Zahl im Array mit dem Faktor multipliziert wird.

const zahlen = [2, 4, 6];

function rechneMitDaten(daten: number[], faktor: number): number[] {
  return daten.map((zahl) => zahl * faktor);
}

const result = rechneMitDaten(zahlen, 3);
console.log("Aufgabe 6!", result);

// ----------------------------------------------------------------- Aufgabe 7: Einfache API simulieren
// Simuliere eine einfache API-Funktion mit einer Typdefinition.

type ApiAntwort = {
  status: number;
  daten: string;
};

function getData(url: string): ApiAntwort {
  console.log(
    "Aufgabe 7: Hier sind Daten der API! https://get.api-feiertage.de"
  );

  if (url === "https://get.api-feiertage.de") {
    return { status: 200, daten: "Erfolg" };
  } else {
    return { status: 404, daten: "Kein Erfolg!" };
  }
}

console.log("Aufgabe 7:", getData("https://get.api-feiertage.de"));

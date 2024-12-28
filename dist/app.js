"use strict";
console.log("Hallo, TypeScript!");
// -------------------------------------------------- Aufgabe 1: Eine Variable deklarieren und verwenden
// Deklariere eine Variable und gib ihren Wert in der Konsole aus.
let alter = 25;
let isStudent = true;
console.log('Aufgabe 1:', alter);
console.log('Aufgabe 1:', isStudent);
// -------------------------------------------------- Aufgabe 2: Konstanten verwenden
// Verwende const, um eine Konstante zu deklarieren.
const maxPunkte = 100;
console.log('Aufgabe 2:', maxPunkte);
// maxPunkte = 200;
// console.log("Neuer Wert von maxPunkte:", maxPunkte); // Das wird niemals erreicht!
// Ergebnis!
// Uncaught TypeError: Assignment to constant variable.
//     at app.js:14:11
// -------------------------------------------------- Aufgabe 3: Variablen an Funktionen übergeben
// Lerne, wie Variablen an Funktionen übergeben werden.
function quadriere(zahl) {
    return zahl * zahl;
}
;
const zahl = 5;
console.log('Aufgabe 3: Die quadrierte Zahl ist:', quadriere(zahl));
// ----------------------------------------------------- Aufgabe 4: Funktionen mit mehreren Parametern
// Arbeite mit Funktionen, die mehrere Parameter verwenden.
function berechne(a, b) {
    return a * b;
}
;
const ergebnis = berechne(10, 10);
console.log('Aufgabe 4:', ergebnis);
// --------------------------------------------------------- Aufgabe 5: Typen explizit angeben
// Verwende explizite Typen, um Variablen und Parameter zu deklarieren.
let land = 'Mordor';
let einwohner = 5000;
function landinfo(land, einwohner) {
    return `${land} hat ${einwohner} einwohner.`;
}
;
console.log('Aufgabe 5:', landinfo(land, einwohner));
//  -------------------------------------------------------------- Aufgabe 6: Typen aus Bibliotheks-Funktionssignaturen lesen
// Nehmen wir an, du arbeitest mit folgender Funktionssignatur aus einer Bibliothek: function rechneMitDaten(daten: number[], faktor: number): number[];
const zahlen = [2, 4, 6];
function rechneMitDaten(daten, faktor) {
    return daten.map((zahl) => zahl * faktor);
}
;
const result = rechneMitDaten(zahlen, 3);
console.log('Aufgabe 6!', result);
function getData(url) {
    console.log('Aufgabe 7: Hier sind Daten der API! https://get.api-feiertage.de');
    if (url === 'https://get.api-feiertage.de') {
        return { status: 200, daten: 'Erfolg' };
    }
    else {
        return { status: 404, daten: 'Kein Erfolg!' };
    }
}
console.log('Aufgabe 7:', getData('https://get.api-feiertage.de'));

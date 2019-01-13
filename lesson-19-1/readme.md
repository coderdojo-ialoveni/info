# Manipularea obiectelor de tip Array (Lecția 19-1)

În această lecție vom crea o mică librărie cu funcții de manipulare a obiectelor
de tip array.

Fișierul `array-lib.js` va conține următoarele funcții:

1. `arraySigur`, are un parametru și trebuie să ne asigurăm că acel parametru
este de tip `array`. Dacă nu e array aruncăm o eroare.
```js
function arraySigur(param) {
    if (!Array.isArray(param)) {
        throw new Error('Parametrul trebuie să fie array!')
    }
}
```

Referințe:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw


2. `arrayEgali`, are doi parametri de tip array și testează dacă sunt egali. Dacă
fiecare valoare din primul array este egală cu valoarea din cel dea doilea va
returna `true`, altfel va returna `false`.

Exemple:

* `[1, 2, 3, 4]` egal cu `[1, 2, 3, 4]`
* `[3, 2]` NU este egal cu `[1, 2, 4]`

Referințe:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for


3. `arrayIncepeCu`, are doi parametri de tip array și testează dacă primul array
începe cu al doilea parametru. Trebuie să folosiți și funcție `arrayEgali`.

Exemple:

* `[1, 2, 3, 4]` începe cu `[1, 2]`
* `[3, 2]` NU începe cu `[1, 2, 4]`

Referințe:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


4. `arraySeTerminaCu`, are doi parametri de tip array și testează dacă primul array
se termină cu al doilea parametru. Trebuie să folosiți și funcție `arrayEgali`.

Exemple:

* `[1, 2, 3, 4]` se termina cu `[4]`
* `[3, 2]` NU se termină cu `[1, 2, 4]`

Referințe:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse


5. `arrayContine`, are doi parametri de tip array și testează dacă primul array
contine doilea parametru.

Exemple:

* `[1, 2, 3, 4]` conține `[3, 4]`
* `[3, 2]` NU conține `[1, 2, 4]`

Referințe:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse


6. `arrayStergeIndexPar`, are un parametru de tip array și șterge fiecare element
care se află la un index par. Returnează noul array.

Exemple:

* `arrayStergeIndexPar([1, 2, 3, 4])` devine `[2, 4]`

Referințe:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


7. `arrayStergeValoriPare`, are un parametru de tip array și șterge fiecare element
care este un număr par. Returnează noul array.

Exemple:

* `arrayStergeValoriPare([1, 2, 3, 4])` devine `[1, 3]`


6. `arrayAdaugaInCapete`, are doi parametri de tip array și adaugă la capetele
primului parametru cel de al doilea parametru. Returnează noul array.

Exemple:

* `arrayAdaugaInCapete([1, 2, 3, 4], [7])` devine `[7, 1, 2, 4, 7]`

Referințe:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

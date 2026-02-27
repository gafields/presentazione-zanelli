# Progetto Node.js

Questo progetto contiene esempi di codice **JavaScript** e **TypeScript** eseguiti con **Node.js**.  
Serve per imparare le basi della programmazione lato server.

---

## Struttura del progetto

```
node/
├── js/                  ← Codice JavaScript
│   ├── index.js         ← Esempio base: somma di due numeri
│   ├── index2.js        ← Esempio: lista di utenti
│   ├── math.js          ← Funzioni matematiche (JS)
│   ├── math.test.js     ← Test per le funzioni matematiche (JS)
│   └── user.js          ← Funzione che restituisce una lista di utenti (JS)
│
├── src/                 ← Codice TypeScript (stessi esempi, ma tipizzati)
│   ├── index.ts         ← Esempio base: somma di due numeri
│   ├── index2.ts        ← Esempio: lista di utenti
│   ├── math.ts          ← Funzioni matematiche (TS)
│   ├── math.test.ts     ← Test per le funzioni matematiche (TS)
│   └── user.ts          ← Funzione che restituisce una lista di utenti (TS)
│
├── package.json         ← Configurazione del progetto e lista degli script
├── tsconfig.json        ← Configurazione di TypeScript
└── jest.config.js       ← Configurazione di Jest (framework di test)
```

> **JavaScript vs TypeScript:**  
> I file nella cartella `js/` sono scritti in JavaScript puro.  
> I file nella cartella `src/` sono scritti in TypeScript (JavaScript con l'aggiunta dei tipi).  
> Fanno le stesse cose, ma TypeScript aiuta a trovare errori prima di eseguire il codice.

---

## Primo passo: installare le dipendenze

Prima di poter eseguire qualsiasi comando, devi installare le dipendenze del progetto.

### 1. Apri il terminale in VS Code

- Dal menu: **Terminale → Nuovo terminale**
- Oppure con la scorciatoia: **Cmd + `** (macOS) o **Ctrl + `** (Windows/Linux)

### 2. Spostati nella cartella `node`

Se il terminale si è aperto nella cartella principale (`presentazione-zanelli`), digita:

```bash
cd node
```

> **Come verificare in che cartella sei:**  
> Digita `pwd` e premi Invio. Dovresti vedere qualcosa come:  
> `/Users/tuonome/.../presentazione-zanelli/node`

### 3. Installa le dipendenze

```bash
npm install
```

Questo comando scarica tutte le librerie necessarie. Vedrai comparire una cartella `node_modules/` — è normale, non toccarla!

> **Devi farlo solo la prima volta** (o se qualcuno aggiunge nuove dipendenze al progetto).

---

## Come eseguire gli esempi

### Esempi JavaScript (cartella `js/`)

| Comando             | Cosa fa                                                 |
| ------------------- | ------------------------------------------------------- |
| `npm run start-js`  | Esegue `js/index.js` — stampa il risultato di una somma |
| `npm run start-js2` | Esegue `js/index2.js` — stampa una lista di utenti      |

### Esempi TypeScript (cartella `src/`)

| Comando             | Cosa fa                                                  |
| ------------------- | -------------------------------------------------------- |
| `npm run start-ts`  | Esegue `src/index.ts` — stampa il risultato di una somma |
| `npm run start-ts2` | Esegue `src/index2.ts` — stampa una lista di utenti      |

### Esempio passo-passo

```bash
# 1. Assicurati di essere nella cartella node
cd node

# 2. Esegui l'esempio JavaScript
npm run start-js
```

Dovresti vedere nel terminale:

```
Il risultato di 5 + 5 è 10
```

---

## Come eseguire i test

I test servono a verificare che le funzioni funzionino correttamente.

| Comando           | Cosa fa                                                         |
| ----------------- | --------------------------------------------------------------- |
| `npm run test-js` | Esegue i test JavaScript (usa il test runner nativo di Node.js) |
| `npm run test-ts` | Esegue i test TypeScript (usa Jest)                             |

### Esempio

```bash
npm run test-js
```

Se tutto è corretto, vedrai un output con i test che passano (✓).

---

## Riepilogo di tutti i comandi disponibili

| Comando               | Descrizione                                                                      |
| --------------------- | -------------------------------------------------------------------------------- |
| `npm install`         | Installa le dipendenze (solo la prima volta)                                     |
| `npm run start-js`    | Esegue `js/index.js`                                                             |
| `npm run start-js2`   | Esegue `js/index2.js`                                                            |
| `npm run start-ts`    | Esegue `src/index.ts`                                                            |
| `npm run start-ts2`   | Esegue `src/index2.ts`                                                           |
| `npm run test-js`     | Esegue i test JavaScript                                                         |
| `npm run test-ts`     | Esegue i test TypeScript                                                         |
| `npm run build`       | Compila TypeScript in JavaScript (nella cartella `dist/`)                        |
| `npm run check-types` | Controlla che non ci siano errori di tipo in TypeScript                          |
| `npm run dev`         | Avvia TypeScript in modalità sviluppo (si ricarica automaticamente quando salvi) |

---

## Come funzionano gli esempi

### Esempio 1: Somma (`index.js` / `index.ts`)

Il file `math.js` (o `math.ts`) contiene una funzione `somma` che prende due numeri e restituisce la loro somma.  
Il file `index.js` (o `index.ts`) importa questa funzione, la usa con i valori 5 e 5, e stampa il risultato.

### Esempio 2: Utenti (`index2.js` / `index2.ts`)

Il file `user.js` (o `user.ts`) contiene una funzione `getUsers` che restituisce una lista di utenti (con nome, cognome e ruolo).  
Il file `index2.js` (o `index2.ts`) importa questa funzione e stampa le informazioni di ogni utente.

---

## Per tornare alla cartella principale

Quando hai finito di lavorare con questo progetto e vuoi tornare alla cartella principale:

```bash
cd ..
```

Ora sei di nuovo in `presentazione-zanelli` e puoi entrare nell'altro progetto:

```bash
cd angular-demo
```

---

## Risoluzione problemi

| Problema                 | Soluzione                                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------------------------- |
| `npm: command not found` | Node.js non è installato. Vedi il [README principale](../README.md)                                       |
| `Cannot find module ...` | Hai dimenticato di eseguire `npm install`. Eseguilo!                                                      |
| `ERR_MODULE_NOT_FOUND`   | Controlla di essere nella cartella `node` (usa `pwd` per verificare)                                      |
| I test falliscono        | È normale se devi ancora completare l'implementazione! Leggi il messaggio di errore per capire cosa manca |

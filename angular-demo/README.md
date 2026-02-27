# Progetto Angular Demo

Questo è un progetto **Angular** — un framework per creare applicazioni web moderne.  
L'app si collega alle **API della NASA** per mostrare informazioni sullo spazio!

---

## Cosa fa questa applicazione

L'app ha tre pagine principali:

| Pagina                                    | Cosa mostra                                                   |
| ----------------------------------------- | ------------------------------------------------------------- |
| **Welcome**                               | Pagina di benvenuto con informazioni introduttive             |
| **APOD** (Astronomy Picture of the Day)   | L'immagine astronomica del giorno scelta dalla NASA           |
| **NeoWs** (Near Earth Object Web Service) | Lista degli asteroidi vicini alla Terra in una data specifica |

Si può navigare tra le pagine usando i pulsanti nella barra superiore, e c'è anche un pulsante per cambiare tema (chiaro/scuro).

---

## Struttura del progetto

```
angular-demo/
├── src/                          ← Codice sorgente dell'applicazione
│   ├── index.html                ← Pagina HTML principale
│   ├── main.ts                   ← Punto di avvio dell'app
│   ├── styles.scss               ← Stili globali
│   └── app/
│       ├── app.ts                ← Componente principale dell'app
│       ├── app.html              ← Template HTML del componente principale
│       ├── app.routes.ts         ← Definizione delle rotte (pagine)
│       ├── constants.ts          ← Costanti (es. chiave API NASA)
│       ├── components/           ← I componenti dell'app (ogni "pezzo" della pagina)
│       │   ├── home-page/        ← Layout principale con barra di navigazione
│       │   ├── welcome/          ← Pagina di benvenuto
│       │   ├── apod-page/        ← Pagina immagine astronomica del giorno
│       │   ├── neows-page/       ← Pagina asteroidi vicini alla Terra
│       │   ├── card/             ← Componente card riutilizzabile
│       │   ├── date-navigator/   ← Selettore di data (avanti/indietro)
│       │   └── page-header/      ← Intestazione di pagina riutilizzabile
│       ├── services/             ← Servizi (logica condivisa)
│       │   └── theme.service.ts  ← Gestione tema chiaro/scuro
│       └── types/                ← Definizione dei tipi TypeScript
│           └── neo-object.model.ts
├── angular.json                  ← Configurazione del progetto Angular
├── package.json                  ← Dipendenze e script
└── tsconfig.json                 ← Configurazione TypeScript
```

> **Cosa sono i componenti?**  
> In Angular, ogni "pezzo" dell'interfaccia è un **componente**. Un componente è formato da:
>
> - Un file `.ts` → la logica (TypeScript)
> - Un file `.html` → il template (cosa si vede)
> - Un file `.scss` → gli stili (come appare)

---

## Primo passo: installare le dipendenze

### 1. Apri il terminale in VS Code

- Dal menu: **Terminale → Nuovo terminale**
- Oppure con la scorciatoia: **Cmd + `** (macOS) o **Ctrl + `** (Windows/Linux)

### 2. Spostati nella cartella `angular-demo`

Se il terminale si è aperto nella cartella principale (`presentazione-zanelli`), digita:

```bash
cd angular-demo
```

> **Come verificare in che cartella sei:**  
> Digita `pwd` e premi Invio. Dovresti vedere qualcosa come:  
> `/Users/tuonome/.../presentazione-zanelli/angular-demo`

### 3. Installa le dipendenze

```bash
npm install
```

Questo scarica tutte le librerie necessarie (Angular, Material, ecc.).  
Ci vorrà un po' di tempo la prima volta. Vedrai comparire una cartella `node_modules/` — è normale, non toccarla!

> **Devi farlo solo la prima volta** (o se qualcuno aggiunge nuove dipendenze al progetto).

---

## Come avviare l'applicazione

Dopo aver installato le dipendenze, avvia il server di sviluppo:

```bash
npm start
```

Quando vedi un messaggio simile a questo:

```
Local: http://localhost:4200/
```

**Apri il browser** (Chrome, Firefox, Safari...) e vai all'indirizzo:

👉 **http://localhost:4200**

Vedrai l'applicazione funzionante!

> **Aggiornamento automatico:** Ogni volta che salvi un file, l'applicazione si aggiorna automaticamente nel browser. Non devi riavviarla!

### Come fermare il server

Per fermare il server di sviluppo, nel terminale premi:

**Ctrl + C**

---

## Come eseguire i test

I test servono a verificare che i componenti funzionino correttamente:

```bash
npm test
```

---

## Riepilogo dei comandi disponibili

| Comando         | Descrizione                                                       |
| --------------- | ----------------------------------------------------------------- |
| `npm install`   | Installa le dipendenze (solo la prima volta)                      |
| `npm start`     | Avvia il server di sviluppo (l'app sarà su http://localhost:4200) |
| `npm test`      | Esegue i test                                                     |
| `npm run build` | Compila l'app per la produzione (crea la cartella `dist/`)        |

---

## Come navigare nell'app

1. Apri **http://localhost:4200** nel browser
2. Vedrai la **pagina di benvenuto** (Welcome)
3. Nella barra in alto trovi i link per navigare:
   - **APOD** → mostra l'immagine astronomica del giorno dalla NASA
   - **NeoWs** → mostra gli asteroidi vicini alla Terra
4. Usa le frecce del **date navigator** per cambiare data e vedere dati diversi
5. In alto a destra c'è il pulsante per cambiare **tema** (chiaro ↔ scuro)

---

## Per tornare alla cartella principale

Quando hai finito di lavorare con questo progetto:

```bash
cd ..
```

Ora sei di nuovo in `presentazione-zanelli` e puoi entrare nell'altro progetto:

```bash
cd node
```

---

## Concetti chiave di Angular (breve introduzione)

| Concetto               | Spiegazione                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| **Componente**         | Un pezzo riutilizzabile dell'interfaccia (es. un pulsante, una card, una pagina) |
| **Template** (`.html`) | Descrive _cosa_ appare nella pagina                                              |
| **Stili** (`.scss`)    | Descrive _come_ appaiono gli elementi (colori, dimensioni, ecc.)                 |
| **Logica** (`.ts`)     | Descrive _come si comporta_ il componente (clic, dati, ecc.)                     |
| **Servizio**           | Logica condivisa tra più componenti (es. gestione del tema)                      |
| **Rotta**              | Un percorso URL che corrisponde a una pagina (es. `/home/apod`)                  |
| **Signal**             | Un modo per gestire dati reattivi (quando il dato cambia, la vista si aggiorna)  |

---

## Risoluzione problemi

| Problema                         | Soluzione                                                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `npm: command not found`         | Node.js non è installato. Vedi il [README principale](../README.md)                                                   |
| `Cannot find module ...`         | Hai dimenticato di eseguire `npm install`. Eseguilo!                                                                  |
| La pagina non si carica          | Assicurati che il server sia attivo (`npm start`). Controlla il terminale per eventuali errori                        |
| Errore `EADDRINUSE`              | La porta 4200 è già in uso. Chiudi l'altro server (Ctrl+C) oppure avvia su un'altra porta: `npm start -- --port 4300` |
| Le immagini NASA non si caricano | Potrebbe essere un problema di rete o la chiave API potrebbe aver raggiunto il limite giornaliero di richieste        |

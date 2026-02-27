# Presentazione Zanelli

Benvenuti! Questo repository contiene due progetti dimostrativi che useremo durante il corso:

| Cartella          | Cosa contiene                                                 |
| ----------------- | ------------------------------------------------------------- |
| **node/**         | Esempi di codice JavaScript e TypeScript eseguiti con Node.js |
| **angular-demo/** | Un'applicazione web realizzata con Angular                    |

---

## Prerequisiti

Prima di iniziare, assicurati di avere installato sul tuo computer:

1. **Node.js** (versione 20 o superiore) — [scaricalo qui](https://nodejs.org/)
2. **Visual Studio Code** (VS Code) — [scaricalo qui](https://code.visualstudio.com/)
3. **Git** — [scaricalo qui](https://git-scm.com/downloads)

> **Come verificare se Node.js è installato:**  
> Apri il terminale e digita:
>
> ```bash
> node --version
> ```
>
> Se vedi un numero di versione (es. `v20.11.0`) sei a posto!

---

## Come scaricare il progetto

1. Apri il **Terminale** (su macOS/Linux) oppure il **Prompt dei comandi** (su Windows).
2. Spostati nella cartella dove vuoi salvare il progetto. Ad esempio:
   ```bash
   cd Desktop
   ```
3. Clona il repository:
   ```bash
   git clone <url-del-repository>
   ```
4. Entra nella cartella del progetto:
   ```bash
   cd presentazione-zanelli
   ```

---

## Come aprire il progetto in VS Code

Dalla cartella `presentazione-zanelli`, digita:

```bash
code .
```

Questo aprirà VS Code con tutto il progetto.

> **Nota:** se il comando `code` non funziona, apri VS Code manualmente, poi vai su **File → Apri cartella...** e seleziona la cartella `presentazione-zanelli`.

---

## Come usare il Terminale in VS Code

In VS Code puoi aprire un terminale integrato:

- Dal menu: **Terminale → Nuovo terminale**
- Oppure con la scorciatoia: **Ctrl + `** (Windows/Linux) o **Cmd + `** (macOS)

Il terminale si aprirà nella cartella principale del progetto (`presentazione-zanelli`).

---

## Navigazione tra le cartelle (comandi essenziali)

| Comando           | Cosa fa                                                      |
| ----------------- | ------------------------------------------------------------ |
| `cd node`         | Entra nella cartella `node`                                  |
| `cd angular-demo` | Entra nella cartella `angular-demo`                          |
| `cd ..`           | Torna indietro di una cartella (alla cartella precedente)    |
| `pwd`             | Mostra in quale cartella ti trovi adesso                     |
| `ls`              | Mostra i file e le cartelle presenti nella cartella corrente |

### Esempio pratico

```bash
# Sei in presentazione-zanelli e vuoi lavorare con Node.js:
cd node

# Hai finito con Node.js e vuoi passare ad Angular:
cd ..              # torni in presentazione-zanelli
cd angular-demo    # entri in angular-demo
```

---

## Prossimi passi

Ogni progetto ha il suo README con istruzioni dettagliate:

- 📄 [Guida al progetto Node.js](node/README.md)
- 📄 [Guida al progetto Angular](angular-demo/README.md)

Inizia dal progetto **node** per familiarizzare con JavaScript e TypeScript, poi passa ad **angular-demo** per l'applicazione web.

---

## Risoluzione problemi comuni

| Problema                     | Soluzione                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `command not found: node`    | Node.js non è installato. Scaricalo da [nodejs.org](https://nodejs.org/)                                                              |
| `command not found: npm`     | Si installa automaticamente con Node.js. Reinstalla Node.js                                                                           |
| `command not found: code`    | In VS Code: apri la Command Palette (Cmd+Shift+P / Ctrl+Shift+P), cerca "Shell Command: Install 'code' command in PATH" e selezionalo |
| Errori durante `npm install` | Assicurati di essere nella cartella giusta (`node` o `angular-demo`) e di avere una connessione internet                              |

---
name: nasa-api
description: >
  Skill per esplorare le NASA Open APIs disponibili su api.nasa.gov.
  Usa questa skill quando l'utente chiede:
  - l'elenco delle API NASA disponibili
  - la struttura JSON di una specifica API NASA
  - come usare un endpoint NASA (APOD, NeoWs, EPIC, Mars Rover, ecc.)
  - informazioni sui parametri, endpoint, o risposta di qualunque API NASA
  Trigger anche con frasi come "mostrami le API NASA", "come funziona APOD",
  "struttura JSON di NeoWs", "cosa restituisce Mars Rover", ecc.
  Se ti chiedo struttura JSON per nasa api, chiedi all'utente di quale API specifica (scelta multipla) e mostra esempio completo.
---

# NASA Open APIs — Guida Completa

Base URL: `https://api.nasa.gov`  
Tutte le API richiedono `?api_key=TUO_API_KEY` (oppure `DEMO_KEY` per test).

---

## 📋 ELENCO COMPLETO DELLE API NASA

| #   | Nome                           | Endpoint                                                 | Descrizione                               |
| --- | ------------------------------ | -------------------------------------------------------- | ----------------------------------------- |
| 1   | **APOD**                       | `GET /planetary/apod`                                    | Astronomy Picture of the Day              |
| 2   | **NeoWs**                      | `GET /neo/rest/v1/feed`                                  | Near Earth Object Web Service (asteroidi) |
| 3   | **EPIC**                       | `GET /EPIC/api/natural`                                  | Earth Polychromatic Imaging Camera        |
| 4   | **Mars Rover Photos**          | `GET /mars-photos/api/v1/rovers/{rover}/photos`          | Foto dai rover su Marte                   |
| 5   | **Earth (GIBS)**               | `GET /planetary/earth/assets`                            | Immagini satellitari della Terra          |
| 6   | **EONET**                      | `GET /EONET/v3/events`                                   | Earth Observatory Natural Event Tracker   |
| 7   | **NASA Image & Video Library** | `GET https://images-api.nasa.gov/search`                 | Archivio foto e video NASA                |
| 8   | **Insight Weather**            | `GET /insight_weather/`                                  | Meteo su Marte (rover InSight)            |
| 9   | **DONKI**                      | `GET /DONKI/{tipo}`                                      | Space Weather Database                    |
| 10  | **Exoplanet Archive**          | `GET https://exoplanetarchive.ipac.caltech.edu/TAP/sync` | Archivio esopianeti                       |
| 11  | **Techport**                   | `GET /techport/api/projects`                             | Portafoglio tecnologie NASA               |
| 12  | **TLE (Satellite)**            | `GET /TLE/{name}`                                        | Two-Line Element (traiettorie satelliti)  |

---

## 🔍 STRUTTURE JSON DETTAGLIATE

### 1. APOD — Astronomy Picture of the Day

**Endpoint:** `GET https://api.nasa.gov/planetary/apod`

**Parametri:**
| Parametro | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `date` | string (YYYY-MM-DD) | oggi | Data dell'immagine |
| `start_date` | string | — | Inizio intervallo date |
| `end_date` | string | — | Fine intervallo date |
| `count` | int | — | N° immagini casuali (max 100) |
| `thumbs` | bool | false | Ritorna thumbnail per video |
| `hd` | bool | false | URL alta risoluzione |

**Risposta JSON:**

```json
{
  "date": "2024-01-15",
  "title": "The Orion Nebula",
  "explanation": "Testo descrittivo astronomico...",
  "url": "https://apod.nasa.gov/apod/image/2401/orion_960.jpg",
  "hdurl": "https://apod.nasa.gov/apod/image/2401/orion_4000.jpg",
  "media_type": "image", // "image" | "video"
  "service_version": "v1",
  "copyright": "NASA/ESA" // assente se dominio pubblico
}
```

---

### 2. NeoWs — Asteroidi Near-Earth

**Endpoint principale:** `GET https://api.nasa.gov/neo/rest/v1/feed`

**Parametri:**
| Parametro | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `start_date` | YYYY-MM-DD | oggi | Data inizio |
| `end_date` | YYYY-MM-DD | 7 gg dopo | Data fine (max 7 gg) |
| `detailed` | bool | false | Dati dettagliati |

**Risposta JSON:**

```json
{
  "links": { "next": "...", "prev": "...", "self": "..." },
  "element_count": 23,
  "near_earth_objects": {
    "2024-01-15": [
      {
        "id": "3542519",
        "neo_reference_id": "3542519",
        "name": "(2010 PK9)",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/...",
        "absolute_magnitude_h": 20.5,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.205,
            "estimated_diameter_max": 0.459
          },
          "meters": { "estimated_diameter_min": 205.0, "estimated_diameter_max": 459.0 },
          "miles": { "estimated_diameter_min": 0.127, "estimated_diameter_max": 0.285 },
          "feet": { "estimated_diameter_min": 672.0, "estimated_diameter_max": 1506.0 }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2024-01-15",
            "close_approach_date_full": "2024-Jan-15 12:34",
            "epoch_date_close_approach": 1705312440000,
            "relative_velocity": {
              "kilometers_per_second": "12.5",
              "kilometers_per_hour": "45000.0",
              "miles_per_hour": "27961.0"
            },
            "miss_distance": {
              "astronomical": "0.3456",
              "lunar": "134.4",
              "kilometers": "51700000",
              "miles": "32130000"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      }
    ]
  }
}
```

---

### 3. EPIC — Earth Polychromatic Imaging Camera

**Endpoint:** `GET https://api.nasa.gov/EPIC/api/natural`  
**Endpoint per data:** `GET https://api.nasa.gov/EPIC/api/natural/date/YYYY-MM-DD`

**Risposta JSON (array):**

```json
[
  {
    "identifier": "20150613110250",
    "caption": "This image was taken by NASA's EPIC camera...",
    "image": "epic_1b_20150613110250",
    "version": "03",
    "centroid_coordinates": {
      "lat": 1.244,
      "lon": 160.666
    },
    "dscovr_j2000_position": {
      "x": -1283061.0,
      "y": -669893.0,
      "z": -130240.0
    },
    "lunar_j2000_position": {
      "x": 33466.0,
      "y": 354549.0,
      "z": 116876.0
    },
    "sun_j2000_position": {
      "x": -71982138.0,
      "y": 124856491.0,
      "z": 54099397.0
    },
    "attitude_quaternions": {
      "q0": -0.376,
      "q1": -0.680,
      "q2": 0.595,
      "q3": -0.194
    },
    "date": "2015-06-13 11:02:45",
    "coords": { "centroid_coordinates": {...}, "dscovr_j2000_position": {...} }
  }
]
```

> **Nota:** Per ottenere l'immagine usa:  
> `https://api.nasa.gov/EPIC/archive/natural/{YYYY}/{MM}/{DD}/png/{image}.png?api_key=KEY`

---

### 4. Mars Rover Photos

**Endpoint:** `GET https://api.nasa.gov/mars-photos/api/v1/rovers/{rover}/photos`

**Rover disponibili:** `curiosity` | `opportunity` | `spirit`

**Parametri:**
| Parametro | Tipo | Descrizione |
|-----------|------|-------------|
| `sol` | int | Sol marziano (0 = primo giorno) |
| `earth_date` | YYYY-MM-DD | Data terrestre |
| `camera` | string | Camera (FHAZ, RHAZ, MAST, CHEMCAM, MAHLI, MARDI, NAVCAM, PANCAM, MINITES) |
| `page` | int | Pagina risultati (25 per pagina) |

**Risposta JSON:**

```json
{
  "photos": [
    {
      "id": 102693,
      "sol": 1000,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
      "earth_date": "2015-05-30",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 4102,
        "max_date": "2024-01-15",
        "total_photos": 695670,
        "cameras": [
          { "name": "FHAZ", "full_name": "Front Hazard Avoidance Camera" },
          { "name": "NAVCAM", "full_name": "Navigation Camera" }
        ]
      }
    }
  ]
}
```

---

### 5. Earth (GIBS) — Immagini Satellitari

**Endpoint immagine:** `GET https://api.nasa.gov/planetary/earth/assets`

**Parametri:**
| Parametro | Tipo | Descrizione |
|-----------|------|-------------|
| `lat` | float | Latitudine |
| `lon` | float | Longitudine |
| `date` | YYYY-MM-DD | Data |
| `dim` | float | Larghezza/altezza in gradi (default 0.025) |

**Risposta JSON:**

```json
{
  "date": "2024-01-10T00:00:00",
  "url": "https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2024-01-10&api_key=KEY",
  "resource": {
    "planet": "earth",
    "dataset": "Landsat8"
  },
  "service_version": "v1"
}
```

---

### 6. EONET — Natural Event Tracker

**Endpoint:** `GET https://eonet.gsfc.nasa.gov/api/v3/events`

**Risposta JSON:**

```json
{
  "title": "EONET Events",
  "description": "Natural events from EONET.",
  "link": "https://eonet.gsfc.nasa.gov/api/v3/events",
  "events": [
    {
      "id": "EONET_5765",
      "title": "Tropical Storm Beta",
      "description": "",
      "link": "https://eonet.gsfc.nasa.gov/api/v3/events/EONET_5765",
      "closed": null,
      "categories": [{ "id": "severeStorms", "title": "Severe Storms" }],
      "sources": [{ "id": "GDACS", "url": "https://www.gdacs.org/..." }],
      "geometry": [
        {
          "magnitudeValue": null,
          "magnitudeUnit": null,
          "date": "2024-01-10T12:00:00Z",
          "type": "Point",
          "coordinates": [-95.2, 25.5]
        }
      ]
    }
  ]
}
```

---

### 7. NASA Image & Video Library

**Endpoint:** `GET https://images-api.nasa.gov/search`

**Parametri:** `q` (query), `media_type` (image/video/audio), `year_start`, `year_end`

**Risposta JSON:**

```json
{
  "collection": {
    "version": "1.0",
    "href": "https://images-api.nasa.gov/search?q=apollo",
    "items": [
      {
        "href": "https://images-assets.nasa.gov/image/as11-40-5931/collection.json",
        "data": [
          {
            "nasa_id": "as11-40-5931",
            "title": "Apollo 11 Mission image - Buzz Aldrin",
            "description": "Buzz Aldrin beside Solar Wind Composition...",
            "date_created": "1969-07-20T00:00:00Z",
            "media_type": "image",
            "center": "JSC",
            "keywords": ["Apollo 11", "Moon", "Aldrin"]
          }
        ],
        "links": [
          {
            "href": "https://images-assets.nasa.gov/image/as11-40-5931/as11-40-5931~thumb.jpg",
            "rel": "preview",
            "render": "image"
          }
        ]
      }
    ],
    "metadata": { "total_hits": 12456 },
    "links": [{ "rel": "next", "prompt": "Next", "href": "..." }]
  }
}
```

---

### 8. DONKI — Space Weather

**Endpoint base:** `GET https://api.nasa.gov/DONKI/`

**Tipi disponibili:**
| Tipo | Endpoint | Descrizione |
|------|----------|-------------|
| CME | `/DONKI/CME` | Coronal Mass Ejection |
| CMEAnalysis | `/DONKI/CMEAnalysis` | Analisi CME |
| GST | `/DONKI/GST` | Geomagnetic Storm |
| IPS | `/DONKI/IPS` | Interplanetary Shock |
| FLR | `/DONKI/FLR` | Solar Flare |
| SEP | `/DONKI/SEP` | Solar Energetic Particle |
| MPC | `/DONKI/MPC` | Magnetopause Crossing |
| RBE | `/DONKI/RBE` | Radiation Belt Enhancement |
| HSS | `/DONKI/HSS` | High Speed Stream |
| notifications | `/DONKI/notifications` | Notifiche |

**Risposta esempio (FLR - Solar Flare):**

```json
[
  {
    "flrID": "2024-01-15T12:00:00-FLR-001",
    "instruments": [{ "displayName": "GOES-P: EXIS 1.0-8.0" }],
    "beginTime": "2024-01-15T12:00Z",
    "peakTime": "2024-01-15T12:15Z",
    "endTime": "2024-01-15T12:30Z",
    "classType": "X1.5",
    "sourceLocation": "N20W30",
    "activeRegionNum": 3536,
    "linkedEvents": [{ "activityID": "2024-01-15T12:30:00-CME-001" }]
  }
]
```

---

### 9. Insight Weather — Meteo su Marte

**Endpoint:** `GET https://api.nasa.gov/insight_weather/?feedtype=json&ver=1.0`

**Risposta JSON:**

```json
{
  "sol_keys": ["700", "701", "702"],
  "700": {
    "AT": {
      "av": -60.5, // media temperatura aria (°C)
      "ct": 287, // numero campioni
      "mn": -95.3, // minima
      "mx": -14.1 // massima
    },
    "HWS": {
      "av": 5.2, // velocità media vento (m/s)
      "ct": 1200,
      "mn": 0.2,
      "mx": 22.1
    },
    "PRE": {
      "av": 711.0, // pressione media (Pa)
      "ct": 86400,
      "mn": 701.0,
      "mx": 721.0
    },
    "WD": {
      // direzione vento
      "most_common": { "compass_degrees": 180.0, "compass_point": "S", "ct": 456 }
    },
    "Season": "winter",
    "First_UTC": "2020-11-26T01:16:03Z",
    "Last_UTC": "2020-11-27T01:55:38Z"
  },
  "validity_checks": { "700": { "AT": { "valid": true }, "PRE": { "valid": true } } }
}
```

---

## 🔑 Come ottenere una API Key

1. Vai su `https://api.nasa.gov/`
2. Compila il form con nome, cognome ed email
3. Ricevi la chiave via email in pochi minuti
4. Per test usa `DEMO_KEY` (limite: 30 req/ora, 50 req/giorno)

---

## 💡 Note operative

- Quando l'utente chiede la struttura JSON di un'API specifica, fornisci l'esempio completo dalla sezione corrispondente sopra.
- Quando l'utente chiede l'elenco, mostra la tabella riassuntiva con nome, endpoint e descrizione.
- Se chiede come chiamare un'API, fornisci un esempio di URL completo con `DEMO_KEY`.
- Per le API non coperte qui (Exoplanet, TLE, Techport), indica che è necessario consultare la documentazione specifica su `api.nasa.gov`.

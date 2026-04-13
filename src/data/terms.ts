export interface Term {
  id: number;
  term: string;
  definition: string;
  category: string;
}

export const terms: Term[] = [
  { id: 1, term: "Digital Twin", definition: "Ein virtuelles Abbild eines physischen Objekts, Prozesses oder Systems, das in Echtzeit synchronisiert wird und zur Simulation, Analyse und Optimierung dient.", category: "Digitalisierung" },
  { id: 2, term: "OPC UA", definition: "Open Platform Communications Unified Architecture – ein plattformunabhängiger Kommunikationsstandard für den sicheren und zuverlässigen Datenaustausch in der industriellen Automatisierung.", category: "Konnektivität" },
  { id: 3, term: "Edge Computing", definition: "Datenverarbeitung direkt an oder nahe der Datenquelle (z.B. Maschine), um Latenzzeiten zu reduzieren und Echtzeitanalysen zu ermöglichen.", category: "IT-Infrastruktur" },
  { id: 4, term: "Predictive Maintenance", definition: "Vorausschauende Wartung auf Basis von Sensordaten und KI-Algorithmen, die Maschinenausfälle vorhersagt, bevor sie eintreten.", category: "Produktion" },
  { id: 5, term: "Manufacturing X", definition: "Eine Initiative zur Schaffung eines souveränen, interoperablen Datenökosystems für die Fertigungsindustrie, basierend auf GAIA-X-Prinzipien.", category: "Datenräume" },
  { id: 6, term: "Asset Administration Shell (AAS)", definition: "Die Verwaltungsschale – ein standardisiertes digitales Abbild eines Assets gemäß Industrie 4.0, das alle relevanten Informationen maschinenlesbar bereitstellt.", category: "Digitalisierung" },
  { id: 7, term: "GAIA-X", definition: "Eine europäische Initiative für eine föderierte, sichere Dateninfrastruktur, die Datensouveränität und Interoperabilität gewährleistet.", category: "Datenräume" },
  { id: 8, term: "Interoperabilität", definition: "Die Fähigkeit verschiedener Systeme, Maschinen und Software, nahtlos Daten auszutauschen und zusammenzuarbeiten.", category: "Konnektivität" },
  { id: 9, term: "Smart Factory", definition: "Eine hochvernetzte, selbstoptimierende Fabrik, in der Maschinen, Produkte und Systeme autonom kommunizieren und Entscheidungen treffen.", category: "Produktion" },
  { id: 10, term: "IIoT", definition: "Industrial Internet of Things – die Vernetzung industrieller Geräte und Sensoren über das Internet zur Datenerfassung und Prozessoptimierung.", category: "Konnektivität" },
  { id: 11, term: "MES", definition: "Manufacturing Execution System – ein Produktionsleitsystem, das die Fertigung in Echtzeit überwacht, steuert und dokumentiert.", category: "Produktion" },
  { id: 12, term: "SCADA", definition: "Supervisory Control and Data Acquisition – ein System zur Überwachung und Steuerung technischer Prozesse mittels Echtzeitdaten.", category: "Produktion" },
  { id: 13, term: "Cyber-Physical Systems (CPS)", definition: "Systeme, die physische Prozesse mit digitaler Rechenleistung und Kommunikation verbinden und so intelligente, vernetzte Komponenten schaffen.", category: "Digitalisierung" },
  { id: 14, term: "Data Spaces", definition: "Sichere, souveräne Datenräume, in denen Unternehmen kontrolliert Daten teilen können, ohne die Hoheit über ihre Daten zu verlieren.", category: "Datenräume" },
  { id: 15, term: "Catena-X", definition: "Ein offenes Datenökosystem für die Automobilindustrie, das den standardisierten Datenaustausch entlang der gesamten Wertschöpfungskette ermöglicht.", category: "Datenräume" },
  { id: 16, term: "5G in der Produktion", definition: "Der Mobilfunkstandard der 5. Generation ermöglicht ultrazuverlässige, latenzarme Kommunikation für vernetzte Maschinen und mobile Roboter.", category: "Konnektivität" },
  { id: 17, term: "Digital Product Passport", definition: "Ein digitaler Produktpass, der alle relevanten Informationen über ein Produkt über den gesamten Lebenszyklus hinweg speichert – von Materialien bis zum Recycling.", category: "Digitalisierung" },
  { id: 18, term: "TSN (Time-Sensitive Networking)", definition: "Ein Ethernet-basierter Standard für deterministische Echtzeit-Kommunikation in industriellen Netzwerken.", category: "Konnektivität" },
  { id: 19, term: "KI in der Fertigung", definition: "Der Einsatz von Künstlicher Intelligenz zur Qualitätskontrolle, Prozessoptimierung, Anomalieerkennung und autonomen Entscheidungsfindung.", category: "Digitalisierung" },
  { id: 20, term: "Low-Code / No-Code", definition: "Entwicklungsplattformen, die es ermöglichen, Anwendungen mit minimalem Programmieraufwand zu erstellen – ideal für schnelle Digitalisierung in der Fertigung.", category: "IT-Infrastruktur" },
  { id: 21, term: "Cloud Manufacturing", definition: "Ein Modell, bei dem Fertigungsressourcen und -fähigkeiten über die Cloud als Service bereitgestellt und on-demand genutzt werden.", category: "IT-Infrastruktur" },
  { id: 22, term: "Retrofitting", definition: "Die Nachrüstung bestehender Maschinen mit Sensoren und Konnektivität, um sie IoT-fähig und Industrie-4.0-kompatibel zu machen.", category: "Produktion" },
  { id: 23, term: "SPS (Speicherprogrammierbare Steuerung)", definition: "Ein industrieller Computer zur Automatisierung von Fertigungsprozessen, der Ein-/Ausgänge überwacht und Steuerungslogik ausführt.", category: "Produktion" },
  { id: 24, term: "ERP-System", definition: "Enterprise Resource Planning – eine Software zur Planung und Steuerung aller Unternehmensressourcen wie Material, Personal, Finanzen und Produktion.", category: "IT-Infrastruktur" },
  { id: 25, term: "Dateninteroperabilität", definition: "Die Fähigkeit, Daten zwischen verschiedenen Systemen und Formaten so auszutauschen, dass sie korrekt interpretiert und weiterverarbeitet werden können.", category: "Datenräume" },
];

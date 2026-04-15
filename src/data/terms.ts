import type { Term, Category } from "@/types";

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
  { id: 26, term: "Industrie 4.0", definition: "Die vierte industrielle Revolution – die umfassende Digitalisierung und Vernetzung der industriellen Produktion durch IoT, KI und Cloud-Technologien.", category: "Digitalisierung" },
  { id: 27, term: "Blockchain in der Lieferkette", definition: "Einsatz von Blockchain-Technologie zur transparenten, manipulationssicheren Nachverfolgung von Waren und Transaktionen entlang der Supply Chain.", category: "Digitalisierung" },
  { id: 28, term: "Augmented Reality (AR) in der Fertigung", definition: "Überlagerung der realen Umgebung mit digitalen Informationen zur Unterstützung bei Montage, Wartung und Qualitätskontrolle.", category: "Digitalisierung" },
  { id: 29, term: "Cobot (Kollaborativer Roboter)", definition: "Ein Roboter, der sicher und direkt mit Menschen zusammenarbeitet, ohne Schutzzaun – ideal für flexible Fertigungsaufgaben.", category: "Produktion" },
  { id: 30, term: "Digital Thread", definition: "Ein durchgängiger digitaler Datenstrang, der alle Informationen eines Produkts über den gesamten Lebenszyklus hinweg verknüpft.", category: "Digitalisierung" },
  { id: 31, term: "MQTT", definition: "Message Queuing Telemetry Transport – ein leichtgewichtiges Nachrichtenprotokoll für die Kommunikation zwischen IoT-Geräten.", category: "Konnektivität" },
  { id: 32, term: "Fog Computing", definition: "Eine dezentrale Datenverarbeitungsschicht zwischen Edge-Geräten und der Cloud, die Latenz reduziert und lokale Analysen ermöglicht.", category: "IT-Infrastruktur" },
  { id: 33, term: "AGV (Automated Guided Vehicle)", definition: "Fahrerlose Transportsysteme, die Material und Waren autonom innerhalb einer Produktionsanlage bewegen.", category: "Produktion" },
  { id: 34, term: "PLM (Product Lifecycle Management)", definition: "Software und Prozesse zur Verwaltung des gesamten Produktlebenszyklus – von der Idee über die Produktion bis zum Recycling.", category: "IT-Infrastruktur" },
  { id: 35, term: "Condition Monitoring", definition: "Kontinuierliche Überwachung des Zustands von Maschinen und Anlagen mittels Sensoren, um Verschleiß frühzeitig zu erkennen.", category: "Produktion" },
  { id: 36, term: "Digitaler Schatten", definition: "Ein datenbasiertes Abbild eines physischen Objekts, das – im Gegensatz zum Digital Twin – nicht in Echtzeit synchronisiert wird.", category: "Digitalisierung" },
  { id: 37, term: "SOA (Service-Oriented Architecture)", definition: "Ein Architekturansatz, bei dem Funktionalitäten als unabhängige, wiederverwendbare Services bereitgestellt werden.", category: "IT-Infrastruktur" },
  { id: 38, term: "Autonome Fertigung", definition: "Selbststeuernde Produktionssysteme, die ohne menschliches Eingreifen Entscheidungen treffen und Prozesse optimieren.", category: "Produktion" },
  { id: 39, term: "Ethernet-APL", definition: "Advanced Physical Layer – eine Ethernet-basierte Zwei-Draht-Technologie für die Prozesskommunikation in explosionsgefährdeten Bereichen.", category: "Konnektivität" },
  { id: 40, term: "Data Lake", definition: "Ein zentrales Speichersystem für große Mengen unstrukturierter und strukturierter Daten, die für spätere Analysen bereitgehalten werden.", category: "IT-Infrastruktur" },
  { id: 41, term: "Shopfloor Management", definition: "Die systematische Führung und Steuerung der Produktion direkt am Ort der Wertschöpfung – dem Shopfloor.", category: "Produktion" },
  { id: 42, term: "Zero Defect Manufacturing", definition: "Ein Qualitätsansatz, der durch datengetriebene Prozessüberwachung und -optimierung Produktionsfehler auf Null reduzieren will.", category: "Produktion" },
  { id: 43, term: "API (Application Programming Interface)", definition: "Eine Programmierschnittstelle, die den standardisierten Datenaustausch und die Integration zwischen verschiedenen Softwaresystemen ermöglicht.", category: "IT-Infrastruktur" },
  { id: 44, term: "Federated Learning", definition: "Ein dezentrales Machine-Learning-Verfahren, bei dem Modelle lokal trainiert werden, ohne dass Rohdaten zentral gesammelt werden müssen.", category: "Digitalisierung" },
  { id: 45, term: "OEE (Overall Equipment Effectiveness)", definition: "Eine Kennzahl zur Messung der Gesamtanlageneffektivität, die Verfügbarkeit, Leistung und Qualität kombiniert.", category: "Produktion" },
  { id: 46, term: "Semantische Interoperabilität", definition: "Die Fähigkeit verschiedener Systeme, ausgetauschte Daten nicht nur zu übertragen, sondern auch inhaltlich korrekt zu interpretieren.", category: "Datenräume" },
  { id: 47, term: "Brownfield-Ansatz", definition: "Die schrittweise Digitalisierung und Modernisierung bestehender Produktionsanlagen, im Gegensatz zum kompletten Neubau (Greenfield).", category: "Produktion" },
  { id: 48, term: "Digitale Plattformökonomie", definition: "Geschäftsmodelle, die auf digitalen Plattformen basieren und Anbieter und Nachfrager von Fertigungskapazitäten oder Daten zusammenbringen.", category: "Datenräume" },
  { id: 49, term: "Microservices", definition: "Ein Architekturmuster, bei dem Anwendungen als Sammlung kleiner, unabhängig deploybare Services aufgebaut werden.", category: "IT-Infrastruktur" },
  { id: 50, term: "Simulation-Based Engineering", definition: "Der Einsatz von Simulationsmodellen in der Produktentwicklung und Prozessplanung, um physische Prototypen zu reduzieren und Designs virtuell zu validieren.", category: "Digitalisierung" },
];

/** Derive unique categories from the terms data. */
export const categories: Category[] = [
  ...new Set(terms.map((t) => t.category)),
].map((label) => ({ slug: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"), label }));

/** Helper: get terms filtered by category slug. */
export function getTermsByCategory(slug: string): Term[] {
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return [];
  return terms.filter((t) => t.category === cat.label);
}

import './style.css';

// Each key matches a data-i18n attribute in index.html.
const translations = {
  en: {
    skip: 'Skip to content', home: 'Home', projects: 'Projects', about: 'About', contact: 'Contact', talk: 'Let’s talk',
    availability: 'OPEN TO OPPORTUNITIES IN GERMANY', headline1: 'Less busywork.', headline2: 'More possibility.',
    intro: 'I’m Chidi Franklin Ajuorah, an AI & automation developer building workflows that connect tools, simplify processes, and give people their time back.',
    explore: 'Explore my work', github: 'View GitHub', location: 'Anambra, Nigeria', destination: 'Germany, 2027',
    workflowLabel: 'IDEA → AUTOMATION', trigger: 'Webhook', triggerSub: 'Receive a request', agent: 'AI agent', agentSub: 'Make it useful', output: 'Response', outputSub: 'Return the result',
    workflowNote: 'A little logic. A lot less manual work.', concept: 'WORKFLOW CONCEPT', builtWith: 'Built with intention', windowFooter: 'Real tools. Practical problems. Thoughtful solutions.',
    toolLabel: 'MY TOOLKIT', aiAgents: 'AI agents', learning: 'learning', selected: 'SELECTED WORK', projectsTitle: 'Small workflows. Real potential.', allWork: 'My GitHub',
    projectsIntro: 'Three workflows I’m building with n8n. Explore the ideas behind them; live testing is the next milestone.',
    receiverDescription: 'A simple entry point for incoming requests. Send a name and message to an n8n workflow.',
    verifierDescription: 'A workflow focused on verification. Explore the concept; validation rules will be documented with the demo.',
    seleneDescription: 'Exploring how AI agents and connected steps work together in a single orchestrated workflow.',
    validation: 'Validation', preview: 'Project preview', progressNote: 'A portfolio in progress. Built as I learn, with room to grow.',
    nextChapter: 'THE NEXT CHAPTER', chapter1: 'Building in Nigeria.', chapter2: 'Looking toward Germany.',
    story: 'I’m completing a three-month AI & automation course while learning German toward B1, then B2. My goal is to begin an Ausbildung in Germany in 2027 and build a career in practical AI automation.',
    course: 'AI & automation training', german: 'German · B1 → B2 goal', connect: 'LET’S CONNECT', contactTitle: 'Good work starts with a conversation.',
    contactIntro: 'Open to Ausbildung opportunities, collaborations, and conversations about automation in Germany.', emailMe: 'Email me', footerNote: 'Built with curiosity. Based in Nigeria.', email: 'Email',
    projectOverview: 'PROJECT OVERVIEW', demoNotice: 'Live testing is planned for the next milestone. This preview does not send requests or display simulated responses.', visitProfile: 'Visit my GitHub profile'
  },
  de: {
    skip: 'Zum Inhalt springen', home: 'Start', projects: 'Projekte', about: 'Über mich', contact: 'Kontakt', talk: 'Kontakt aufnehmen',
    availability: 'OFFEN FÜR MÖGLICHKEITEN IN DEUTSCHLAND', headline1: 'Weniger Routine.', headline2: 'Mehr Möglichkeiten.',
    intro: 'Ich bin Chidi Franklin Ajuorah, Entwickler für KI und Automatisierung. Ich baue Workflows, die Tools verbinden, Abläufe vereinfachen und Menschen Zeit zurückgeben.',
    explore: 'Meine Arbeit entdecken', github: 'GitHub ansehen', location: 'Anambra, Nigeria', destination: 'Deutschland, 2027',
    workflowLabel: 'IDEE → AUTOMATISIERUNG', trigger: 'Webhook', triggerSub: 'Anfrage empfangen', agent: 'KI-Agent', agentSub: 'Daten verarbeiten', output: 'Antwort', outputSub: 'Ergebnis zurückgeben',
    workflowNote: 'Ein wenig Logik. Viel weniger Handarbeit.', concept: 'WORKFLOW-KONZEPT', builtWith: 'Mit Sorgfalt entwickelt', windowFooter: 'Echte Tools. Praktische Probleme. Durchdachte Lösungen.',
    toolLabel: 'MEINE TOOLS', aiAgents: 'KI-Agenten', learning: 'lerne ich', selected: 'AUSGEWÄHLTE PROJEKTE', projectsTitle: 'Kleine Workflows. Echtes Potenzial.', allWork: 'Mein GitHub',
    projectsIntro: 'Drei Workflows, die ich mit n8n entwickle. Entdecken Sie die Ideen dahinter; Live-Tests folgen im nächsten Schritt.',
    receiverDescription: 'Ein einfacher Einstiegspunkt für Anfragen. Name und Nachricht an einen n8n-Workflow senden.',
    verifierDescription: 'Ein Workflow zur Überprüfung von Daten. Die Validierungsregeln werden zusammen mit der Demo dokumentiert.',
    seleneDescription: 'Ich erkunde, wie KI-Agenten und verbundene Schritte in einem orchestrierten Workflow zusammenarbeiten.',
    validation: 'Validierung', preview: 'Projektvorschau', progressNote: 'Ein Portfolio im Aufbau. Es wächst mit dem, was ich lerne.',
    nextChapter: 'DAS NÄCHSTE KAPITEL', chapter1: 'Entwicklung in Nigeria.', chapter2: 'Mit Blick auf Deutschland.',
    story: 'Ich absolviere einen dreimonatigen Kurs in KI und Automatisierung und lerne Deutsch mit dem Ziel B1, danach B2. 2027 möchte ich eine Ausbildung in Deutschland beginnen und beruflich in der KI-Automatisierung Fuß fassen.',
    course: 'Kurs: KI & Automatisierung', german: 'Deutsch · Ziel B1 → B2', connect: 'KONTAKT', contactTitle: 'Gute Arbeit beginnt mit einem Gespräch.',
    contactIntro: 'Offen für Ausbildungsplätze, Zusammenarbeit und Gespräche über Automatisierung in Deutschland.', emailMe: 'E-Mail schreiben', footerNote: 'Mit Neugier entwickelt. Zu Hause in Nigeria.', email: 'E-Mail',
    projectOverview: 'PROJEKTÜBERSICHT', demoNotice: 'Live-Tests sind für den nächsten Meilenstein geplant. Diese Vorschau sendet keine Anfragen und zeigt keine simulierten Antworten.', visitProfile: 'Mein GitHub-Profil besuchen'
  }
};

const projects = {
  receiver: { title: 'Webhook Receiver', description: 'receiverDescription' },
  verifier: { title: 'Static Verifier', description: 'verifierDescription' },
  selene: { title: 'Selene Orchestrator', description: 'seleneDescription' }
};
let language = 'en';
let selectedProject = null;
const dialog = document.querySelector('#project-dialog');

function updateProject() {
  if (!selectedProject) return;
  const project = projects[selectedProject];
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-description').textContent = translations[language][project.description];
}

function setLanguage(next) {
  language = next === 'de' ? 'de' : 'en';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  document.querySelector('nav').setAttribute('aria-label', language === 'de' ? 'Hauptnavigation' : 'Main navigation');
  document.querySelector('.language-switch').setAttribute('aria-label', language === 'de' ? 'Sprache' : 'Language');
  document.querySelector('#close-dialog').setAttribute('aria-label', language === 'de' ? 'Projekt schließen' : 'Close project');
  document.querySelector('.brand').setAttribute('aria-label', language === 'de' ? 'Franklin Ajuorah, Startseite' : 'Franklin Ajuorah, home');
  document.querySelector('.tool-strip').setAttribute('aria-label', language === 'de' ? 'Tools und Technologien' : 'Tools and technologies');
  document.querySelector('meta[name="description"]').content = language === 'de'
    ? 'Chidi Franklin Ajuorah — Entwickler für KI und Automatisierung in Nigeria. Praktische Workflows und Vorbereitung auf eine Ausbildung in Deutschland 2027.'
    : 'Chidi Franklin Ajuorah — AI and automation developer based in Nigeria, building practical workflows and preparing for Ausbildung in Germany in 2027.';
  updateProject();
  // The page still works when a browser blocks local storage.
  try { localStorage.setItem('portfolio-language', language); } catch {}
}

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    selectedProject = button.dataset.project;
    updateProject();
    dialog.showModal();
  });
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
document.querySelector('#year').textContent = new Date().getFullYear();
try { setLanguage(localStorage.getItem('portfolio-language')); } catch { setLanguage('en'); }

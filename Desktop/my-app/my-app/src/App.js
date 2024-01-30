import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import NavComponent from "./components/NavComponent";
import OverviewComponent from "./components/OverviewComponent";
import SectionsComponent from "./components/SectionsComponent";
import TitleComponent from "./components/TitleComponent";
import DescriptionComponent from "./components/DescriptionComponent";
import FooterComponent from "./components/FooterComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
     <HeaderComponent />
      <NavComponent />
      <OverviewComponent />
      <div className="app-container">
      <div className="noua-sectiune">
        <div className="stanga">Ceea ce am retinut si reusesc sa folosesc tot mai bine</div>
        <div className="dreapta">Ce nu am inteles,mi se pare extrem de greu </div>
      </div>
    </div>
      <SectionsComponent
        sectionTitle= "Git Basics"
        leftContent={[
          "Utilitate Git",
          "Crearea și inițializarea unui repository Git.",
          "Adăugarea, commit-ul și trimiterea modificărilor.",
          "Folosirea comenzilor de bază precum git status, git push."
        ]}
        rightContent={[
          "Când o să utilizez funcția ‘merge’ și cum aș putea rezolva conflictele de fuziune.",
          "Utilizarea rebase-ului.",
          "Încărcare folderului, deși trebuie doar un fișier, anumite erori ce apar iar eu nu le pot găsi cauza.",
          "Utilizarea git pull.",
          "Operatiuni avansate ,precum:branching,Merging",
          "Rebasing-integrarea modificarilor de la un branch la altul."
        ]}
      />
      <SectionsComponent
        sectionTitle="HTML si CSS"
        leftContent={[
          "Construirea structurii paginilor web cu HTML.",
          "Stilizarea elementelor cu CSS.",
          "Crearea listelor, a unui formular simplu",
          "Utilizarea clasei și a id-urilor pentru stilizare specifică."
        ]}
        rightContent={[
          "Crearea tabelelor",
          "Grid Layout:în special pentru layout-uri complexe.",
          "Manipularea eficientă a selectorilor CSS și cascada.",
          "Flexbox: proprietati child",
          "Media queries și tehnici avansate de responsive design."
        ]}
      />
<SectionsComponent
  sectionTitle="Bootstrap"
  leftContent={[
    "Utilizarea componentelor Bootstrap gata făcute.",
    "Implementarea unui grid layout cu Bootstrap.",
    "Responsive design cu clasele Bootstrap."
  ]}
  rightContent={[
         "Personalizarea aspectului Bootstrap",
         "Interacțiunea dintre Bootstrap și framework-uri CSS personalizate  ",
         "Integrarea și gestionarea plugin-urilor Bootstrap."
        ]}
/>
<SectionsComponent
  sectionTitle="JavaScript"
  leftContent={[
    "Variabile, tipuri de date și operații de bază în JavaScript.",
    "Utilizarea buclelor și a structurilor de control a fluxului.",
    "Crearea unui Array,accesarea si modificare elementelor sale",
    "Caracteristici String",
    "Evenimente de timp",
    "Ce este AJAX si cum se foloseste",
    "Lucru cu o baza de date JSON,stocare si gestionarea lor",
    "Functionalitatea API",
    "Definitie si utilitate Browser Storage",
    "Creare Cookie",
    "Accesarea elementelor DOM."
  ]}
  rightContent={[
    "Closure-uri și scopul variabilelor.",
    "Promises și async/await pentru gestionarea asincronicității.",
    "Modul de funcționare a modulelor JavaScript.",
    "Conditionale si bucle",
    "Construirea functiilor mai complexe",
    "Copierea unui Array",
    "Crearea Obiectelor",
    "DOM:manipularea elementelor si evenimentelor",
    "Cum utilizez window.location",
    "Cum folosesc Browser Storage:local Storage,session Storage",
    "Valabilitatea Cookie,functionalitate/afisare in caz ca utilizatorul le refuza."


  ]}
/>
<SectionsComponent
  sectionTitle="React"
  leftContent={[
    "Caracteristici si avantaje SPA",
    "Crearea unei pagini simple React ."
  ]}
  rightContent={[
"Crearea și utilizarea componentelor în React.",
"Optimizarea performanței în aplicații React.",
"Identificarea erorilor ce apar (pentru ca si o simpla virgula da eroare) ",
"Crearea functiilor, obiectelor ",
"Utilizarea JSX pentru a defini interfețe React."
]}
/>
      <FooterComponent />
    </div>
  );
}

export default App;
import { useState } from 'react'
import './App.css'
import Navigation from "./components/Navigation"
import JobAdvertWriter from './components/JobAdvertWriter'
import ProposalBuilder from './components/ProposalBuilder'
import InterviewAssistant from './components/InterviewAssistant'
import CandidateSearch from './components/CandidateSearch'
import feaLogo from './assets/fea-logo1.png'

function App() {
  const [selectedSection, setSelectedSection] = useState("");
  
  const currentYr = new Date().getFullYear();

  const renderSection = (section: string) => {
    setSelectedSection(section);
  }

  return (
    <div className="app">
      <header className="header">
    <img className="logo" alt="FEA logo" src={feaLogo} />
    <div className="title-container">
      <h1>FEA AI Assistant Hub</h1>
    </div>
      </header> 
      <Navigation onSelect={renderSection} />
      <main className="main-content">
        {selectedSection === "Job Advert Writer" && <JobAdvertWriter />}
        {selectedSection === "Proposal Builder" && <ProposalBuilder />}
        {selectedSection === "Interview Assistant" && <InterviewAssistant />}
        {selectedSection === "Candidate Search" && <CandidateSearch />}
      </main>
      <footer className="footer">
        <p>&copy; {currentYr} Leading AI</p>
      </footer>
    </div>
  );
}

export default App;
import { useState } from 'react'
import './App.css'
import Navigation from "./components/Navigation"
import JobAdvertWriter from './components/JobAdvertWriter'
import ProposalBuilder from './components/ProposalBuilder'
import InterviewAssistant from './components/InterviewAssistant'
import CandidateSearch from './components/CandidateSearch'

function App() {
  const [selectedSection, setSelectedSection] = useState("");

  const renderSection = (section: string) => {
    setSelectedSection(section);
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Your Landing Page</h1>
      </header>
      <Navigation onSelect={renderSection} />
      <main className="main-content">
        {selectedSection === "Job Advert Writer" && <JobAdvertWriter />}
        {selectedSection === "Proposal Builder" && <ProposalBuilder />}
        {selectedSection === "Interview Assistant" && <InterviewAssistant />}
        {selectedSection === "Candidate Search" && <CandidateSearch />}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default App;
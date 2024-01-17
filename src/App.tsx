import { useState } from 'react'
import './App.css'
import Navigation from "./components/Navigation"
import JobAdvertWriter from './components/JobAdvertWriter'
import ProposalBuilder from './components/ProposalBuilder'
import InterviewAssistant from './components/InterviewAssistant'
import CandidateSearch from './components/CandidateSearch'

function App() {

  const [selectedSection, setSelectedSection] = useState("")

  const renderSection = (section:string) => {
    setSelectedSection(section)
  }

  return (
    <div>
      <Navigation onSelect={renderSection}/>
      {selectedSection === "Job Advert Writer" && <JobAdvertWriter />}
      {selectedSection === "Proposal Builder" && <ProposalBuilder />}
      {selectedSection === "Interview Assistant" && <InterviewAssistant />}
      {selectedSection === "Candidate Search" && <CandidateSearch />}
    </div>
  )
}

export default App

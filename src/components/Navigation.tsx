import React, { useState } from 'react';

interface Props{
    onSelect: (section: string) => void | string;
}

export default function Navigation({onSelect} : Props){

    const sections = ["Job Advert Writer", "Proposal Builder", "Interview Assistant", "Candidate Search"]
    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    return(
        <nav>
        {sections.map((section, index) => (
        <button className={`btn-section ${selectedButton === section ? 'selected' : ''}`} key={index} 
        onClick={() => {
          onSelect(section);
          setSelectedButton(section);
        }}>
          {section}
        </button>
      ))}
      <div className="border"></div>
        </nav>
    )
}
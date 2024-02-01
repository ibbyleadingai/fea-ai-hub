interface Props{
    onSelect: (section: string) => void | string;
}

export default function Navigation({onSelect} : Props){

    const sections = ["Job Advert Writer", "Proposal Builder", "Interview Assistant", "Candidate Search"]

    return(
        <nav>
          <h1>FEA AI Assistant Hub</h1>
        {sections.map((section, index) => (
        <button className="btn-section" key={index} onClick={() => onSelect(section)}>
          {section}
        </button>
      ))}
      <div className="border"></div>
        </nav>
    )
}
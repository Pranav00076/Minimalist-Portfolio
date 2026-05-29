import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AccordionItem({
  icon,
  title,
  content,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-card">
      {/* Header */}
      <div
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="accordion-left" >
          <span className="icon">{icon}</span>
          <h3>{title}</h3>
        </div>

        {isOpen ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
      </div>

      {/* Expandable Content */}
      {isOpen && (
        <div className="accordion-content" onClick={() => setIsOpen(!isOpen)}>
          {content}
        </div>
      )}
    </div>
  );
}
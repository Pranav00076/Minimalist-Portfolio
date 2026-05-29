import AccordionItem from "./Accordian";
import {
  Monitor,
  Smartphone,
  PenTool,
} from "lucide-react";

export default function WhatIDo() {
  return (
    <section className="services">
      <h1>What I do?</h1>

      <AccordionItem
        icon={<Monitor size={35} />}
        title="Web Development"
        content={
          <ul>
            <li>Single Page Applications (SPAs)</li>
            <li>Landing pages and business websites</li>
            <li>Portfolio websites</li>
          </ul>
        }
      />

      <AccordionItem
        icon={<Smartphone size={35} />}
        title="Mobile Development"
        content={
          <ul>
            <li>Cross-platform apps</li>
            <li>React Native apps</li>
          </ul>
        }
      />

      <AccordionItem
        icon={<PenTool size={35} />}
        title="UI/UX Design & Prototyping"
        content={
          <ul>
            <li>Wireframing</li>
            <li>Interactive Figma prototypes</li>
          </ul>
        }
      />
    </section>
  );
}
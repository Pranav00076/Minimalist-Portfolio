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
        title="Interactive Games"
        content={
          <ul>
            <li>Cross-platform</li>
            <li>Camera Interactive</li>
            <li>React Native Games</li>
          </ul>
        }
      />

      <AccordionItem
        icon={<PenTool size={35} />}
        title="UI/UX Design & Prototyping"
        content={
          <ul>
            <li>Creative Designing</li>
            <li>Interactive Figma prototypes</li>
            <li>Interactive Framer prototypes</li>
          </ul>
        }
      />
    </section>
  );
}
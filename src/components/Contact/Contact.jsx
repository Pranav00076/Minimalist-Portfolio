import { div } from "framer-motion/client";
import ShinyText from "../ShinyText/ShinyText";
import Email from "../Email/Email";

import "./Contact.css"

function Contact() {
    return (
        <section className="c_outer" id="contact">
            {<ShinyText
                text="Let's Talk"
                speed={2}
                delay={0}
                color="#6ad6faff"
                shineColor="#ffffff"
                spread={120}
                direction="top"
                yoyo={true}
                pauseOnHover={false}
                disabled={false}
              />}

            <div className="c_inner">
                Contact
                <div className="c_details">

                    <div className="fqa"> 
                        <p>Have a question or a project in mind? Feel free to reach out.</p>
                        <p>Location: <span>Pune, Maharastra, India</span> </p>
                    </div>

                    <Email />

                </div>
            </div>

        </section>
    )
}

export default Contact;
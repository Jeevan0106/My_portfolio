import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDatabase, FaDev } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    Value: "Jeevanprasath Eswaran",
  },
  {
    label: "Age",
    Value: "23",
  },
  {
    label: "Address",
    Value: "Coimbatore , TamilNadu , India",
  },
  {
    label: "Email",
    Value: " e.jeevanprasath@gmail.com",
  },
  {
    label: "Contact No",
    Value: "+91 7010562015",
  },
];

const jobSummary =
  "We are looking for a passionate and dedicated fresher MERN Stack Developer to join our team. The role involves working with MongoDB, Express.js, React.js, and Node.js to develop dynamic and user-friendly web applications. You will learn and contribute to building scalable backend services, crafting responsive front-end designs, and integrating APIs. The ideal candidate has a strong foundation in JavaScript, basic knowledge of front-end and back-end technologies, and a keen interest in full-stack development. A proactive attitude, willingness to learn, and ability to adapt to new technologies are essential. No prior work experience is required, but project experience or certifications in MERN technologies will be an advantage.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>MERN Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.Value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;

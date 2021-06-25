import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const Services = [{
        id: 1,
        icon: < FaCode className = "service-icon" / > ,
        title: "web design & development",
        text: `Design and develop a very good UI/UX for new or existing website from a simple single/multiple page to complex web-based web application, electonic businesses, corporate business website.`,
    },
    {
        id: 2,
        icon: < FaSketch className = "service-icon" / > ,
        title: "software development",
        text: `Develop robust, fast and scalable software or software's components and modules that can work together in microservice architecture or monolithic architecture.`,
    },
    {
        id: 3,
        icon: < FaAndroid className = "service-icon" / > ,
        title: "app development",
        text: `Design or Develop beautiful UI/UX. Native or X-platform based application development on project requirements. Mobile Application Development.`,
    },
]
export default Services
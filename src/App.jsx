import React, { useState, useRef } from "react";
import logo from './assets/Logo.png'
import image2 from './assets/image2.webp'

import './App.scss'

function App() {

  const [sections, setSections] = useState(
    [
      {
        name: "Home",
        ref: useRef(null),
        index: 0,
      },
      {
        name: "About us",
        ref: useRef(null),
        index: 1,

      },
      {
        name: "Services",
        ref: useRef(null),
        index: 2,
      },
      {
        name: "Courses",
        ref: useRef(null),
        index: 3,
      },
      {
        name: "Contact",
        ref: useRef(null),
        index: 4,
      },
    ]
  )

  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const scrollToSection = (index) => {
    setActiveSectionIndex(index);
    refs[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div className="nav">
        <img src={logo} alt="Logo" />
        <div className="left-items">
          {sections.map((section) => (
            <a key={section.name} onClick={() => scrollToSection(section.index)}>
              {section.name}
            </a>
          ))}

          <button >Learn</button>
        </div>
      </div>
      <div ref={refs[0]} className="second-section">
        <div className="overlay">
          <h1 className="text">Developing your ideas into <span>reality</span></h1>
          <p className="subtext">TechBySJ is your comprehensive destination for all things tech. We offer a wide range of technology skills and bootcamps, ensuring continuous connectivity and productivity through on-site and off-site services.</p>
          <button>Get in touch</button>
        </div>
      </div>
      <div ref={refs[1]} className="about-us">
        <h2>About Us</h2>
        <h3>Imagine it, create it</h3>
        <div className="image-container">
          <img src={image2} alt="image of developers" />
        </div>
        <div className="cards">
          <div className="card card-one">
            <div className="card-title">
              <p>Our vision <span></span></p>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
              </svg>
            </div>
            <p>To be known and recommended for optimizing and streamlining businesses by using digital and technical innovation.</p>
          </div>
          <div className="card card-two">
            <div className="card-title">
              <p>Our mission
                <span></span></p>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
              </svg>
            </div>
            <p>A daily commitment to serve our clients through passion, knowledge, and excellence.</p>
          </div>
        </div>
      </div>
      <div ref={refs[2]} className="services">
        <div className="service-title">
          <h2>Our Services</h2>
          <p >We are the next generation of company offering quality  tech services</p>
        </div>
        <div className="grid__cards">
          <div className="grid-card">
            <div className="icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="block mx-auto w-24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 15c-0.984 0-1.92-0.203-2.769-0.57l3.643-4.098c0.081-0.092 0.126-0.21 0.126-0.332v-1.5c0-0.276-0.224-0.5-0.5-0.5-1.765 0-3.628-1.835-3.646-1.854-0.094-0.094-0.221-0.146-0.354-0.146h-2c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.189 0.107 0.363 0.276 0.447l1.724 0.862v2.936c-1.813-1.265-3-3.366-3-5.745 0-1.074 0.242-2.091 0.674-3h1.826c0.133 0 0.26-0.053 0.354-0.146l2-2c0.094-0.094 0.146-0.221 0.146-0.354v-1.21c0.634-0.189 1.305-0.29 2-0.29 1.1 0 2.141 0.254 3.067 0.706-0.065 0.055-0.128 0.112-0.188 0.172-0.567 0.567-0.879 1.32-0.879 2.121s0.312 1.555 0.879 2.121c0.569 0.569 1.332 0.879 2.119 0.879 0.049 0 0.099-0.001 0.149-0.004 0.216 0.809 0.605 2.917-0.131 5.818-0.007 0.027-0.011 0.055-0.013 0.082-1.271 1.298-3.042 2.104-5.002 2.104z"></path></svg>
            </div>
            <h6>Web Development</h6>
            <p>we offer comprehensive web development services to help businesses establish HashLink strong online presence and achieve their digital goals. Our team of skilled web developers utilizes the latest web technologies, frameworks, and best practices to create web solutions that are visually appealing, user-friendly, and optimized for performance</p>
            <a className="btn-services">Learn More</a>
          </div>
          <div className="grid-card">
            <div className="icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="block mx-auto w-24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 0h-7c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h7c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 0.75h4v0.5h-4v-0.5zM8 15c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM12 12h-8v-10h8v10z"></path></svg>            </div>
            <h6>Mobile Development</h6>
            <p>From iOS to Android, we have the expertise to build mobile apps that deliver seamless experiences, engage users, and drive results. Whether you need HashLink native app, HashLink cross-platform solution, or HashLink mobile-optimized web app, we have the skills and creativity to bring your vision to life. Our team of experienced mobile developers harness the latest technologies and industry best practices to create mobile applications that are fast, user-friendly, and visually captivating.</p>
            <a className="btn-services">Learn More</a>
          </div>
          <div className="grid-card">
            <div className="icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="block mx-auto w-24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M4.25.3C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm11.31 5.13h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6.02.21.03.41.04.58 0 .07-.03.13-.1.16-.52.22-1.07.38-1.63.48-.5.09-1.02.14-1.54.14-.74.01-1.48-.14-2.15-.45-.63-.29-1.15-.77-1.51-1.36-.37-.61-.55-1.37-.55-2.28-.01-.74.18-1.47.55-2.11.38-.65.93-1.19 1.59-1.55.7-.39 1.54-.58 2.53-.58.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11zm-8.93.86h1.95c.06-.01.12.03.13.1.01.01.01.02.01.03v10.26c0 .11-.05.16-.14.16H6.62c-.09 0-.13-.05-.13-.16V6.42c0-.09.05-.13.14-.13zm8.23 4.24c-.39 0-.78.08-1.13.26-.34.17-.63.42-.85.74-.22.32-.33.75-.33 1.27-.01.35.05.7.17 1.03.1.27.25.51.45.71.19.18.42.32.68.4.27.09.55.13.83.13.15 0 .29-.01.42-.02.13.01.25-.01.36-.05v-4.4c-.09-.02-.18-.04-.27-.05-.11-.01-.22-.02-.33-.02z"></path></svg>                       </div>
            <h6>Graphic Design</h6>
            <p>Our team of talented graphic designers combines artistic flair with strategic thinking to craft designs that leave HashLink lasting impression. Whether it's creating eye-catching logos, designing engaging social media graphics, crafting compelling marketing materials, or developing captivating UI/UX designs, we strive for perfection in every pixel. With our innovative and forward-thinking approach, we transform your ideas into compelling visual experiences.</p>
            <a className="btn-services">Learn More</a>
          </div>
          <div className="grid-card">
            <div className="icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="block mx-auto w-24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M120.998 40.998v37.943C136.22 89.471 146 109.278 146 131.001c0 13.71-3.901 26.65-10.598 36.985 3.465 1.35 7.106 2.85 10.15 4.172l122.352-22.783 5.918 54.842-111.748 23.219c-.862 16.261-2.45 32.262-5.289 51.566h336.217V40.998zM96 88.998c-16.595 0-32.002 17.747-32.002 42.004 0 24.257 15.407 42.002 32.002 42.002 16.595 0 32.002-17.745 32.002-42.002S112.595 88.998 96 88.998zm156.096 81.629l-108.592 20.22c-14.24-5.602-4.956-3.035-21.469-8.517-7.476 5.469-16.33 8.672-26.035 8.672-8.6 0-16.53-2.523-23.428-6.9-8.59 3.564-17.655 8.09-25.736 12.654-12.992 7.338-23.722 13.211-27.838 16.033v130.213h20.004V232h17.996v263.002h30.004V326h17.996v169.002h26.004v-171.84l.154-.824c9.514-50.64 12.588-77.384 13.461-109.656l109.56-22.766zm-98.153 126.375c-.952 5.682-1.991 11.64-3.146 17.996H478v-17.996zM208 344.998c-16.595 0-32.002 17.747-32.002 42.004 0 18.198 8.67 32.73 20.01 38.855 3.599-1.662 7.482-2.706 11.68-2.851 4.633-.16 8.98.767 13.052 2.42 10.968-6.352 19.262-20.63 19.262-38.424 0-24.257-15.407-42.004-32.002-42.004zm112 0c-16.595 0-32.002 17.747-32.002 42.004 0 18.198 8.67 32.73 20.01 38.855 3.599-1.662 7.482-2.706 11.68-2.851 4.633-.16 8.98.767 13.052 2.42 10.968-6.352 19.262-20.63 19.262-38.424 0-24.257-15.407-42.004-32.002-42.004zm112 0c-16.595 0-32.002 17.747-32.002 42.004 0 18.198 8.67 32.73 20.01 38.855 3.599-1.662 7.482-2.706 11.68-2.851 4.633-.16 8.98.767 13.052 2.42 10.968-6.352 19.262-20.63 19.262-38.424 0-24.257-15.407-42.004-32.002-42.004zm-223.688 95.996c-3.844.133-8.907 2.93-14.3 8.785-5.394 5.855-10.696 14.25-15.125 22.76-4.226 8.12-7.609 16.16-10.06 22.463h85.339c-3.04-6.436-7.138-14.549-12.133-22.711-5.298-8.658-11.511-17.138-17.668-22.957-6.157-5.819-11.8-8.487-16.053-8.34zm112 0c-3.844.133-8.907 2.93-14.3 8.785-5.394 5.855-10.696 14.25-15.125 22.76-4.226 8.12-7.609 16.16-10.06 22.463h85.339c-3.04-6.436-7.138-14.549-12.133-22.711-5.298-8.658-11.511-17.138-17.668-22.957-6.157-5.819-11.8-8.487-16.052-8.34zm112 0c-3.844.133-8.907 2.93-14.3 8.785-5.394 5.855-10.696 14.25-15.125 22.76-4.226 8.12-7.609 16.16-10.06 22.463h85.339c-3.04-6.436-7.138-14.549-12.133-22.711-5.298-8.658-11.511-17.138-17.668-22.957-6.157-5.819-11.8-8.487-16.052-8.34z"></path></svg>            </div>
            <h6>Training</h6>
            <p>At Nolojia, we believe in empowering individuals with the skills and knowledge they need to succeed in the ever-evolving world of technology. Our comprehensive training programs are designed to equip you with the tools and expertise you need to thrive in the digital age. Whether you want to learn software engineering, master graphic design, or gain HashLink deep understanding of data analytics, our experienced instructors will guide you every step of the way. Join Us Today!</p>
            <a className="btn-services">Learn More</a>
          </div>
          <div className="grid-card">
            <div className="icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="block mx-auto w-24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21.41 11.41l-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z"></path></svg>            </div>
            <h6>Digital marketing</h6>
            <p>Are you ready to take your online presence to the next level? Our tech company offers cutting-edge digital marketing solutions that drive results. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media management and content marketing, our team of experienced digital marketers knows how to make your brand stand out in the crowded digital landscape.</p>
            <a className="btn-services">Learn More</a>
          </div>
          <div className="grid-card">
            <div className="icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="block mx-auto w-24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"></path></svg>            </div>
            <h6>Data analytics</h6>
            <p>Data analytics is more than just crunching numbers. It's about turning data into insights and using those insights to make informed decisions that drive your business forward. Our team of experts uses cutting-edge tools and techniques to help you harness the power of your data, identify patterns and trends, and make data-driven decisions that can have HashLink real impact on your bottom line.</p>
            <a className="btn-services">Learn More</a>
          </div>
        </div>

      </div>

      <div ref={refs[3]} className="courses">
        <div className="coursers-title">
          <h1>Explore our <br />Awesome Courses</h1>
          <p>Our courses are set to start on 15th May. To enroll click on the forward arrow on the course you wish to enroll for here.</p>
        </div>
        <div className="grid-courses">
          <div className="grid-course">
            <span className="svg">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z"></path><path d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7Zm6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002Zm-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905Z"></path></svg>
            </span>
            <h1>Data Science</h1>
            <p>Learn Data Science using python. The course entails in-depth training on Nympy, Pandas, Matplotlib, Searborn, Plotly and many more modules. Enroll today.</p>
            <a className="btn-courses">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </a>
          </div>
          <div className="grid-course">
            <span className="svg">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>            </span>
            <h1>Web development</h1>
            <p>Are your ready to be a web developer? Get started on this course and learn how to develop responsive websites using HTML, CSS and JavaScript. Enroll today</p>
            <a className="btn-courses">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </a>
          </div>
          <div className="grid-course">
            <span className="svg">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M4.25.3C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm11.31 5.13h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6.02.21.03.41.04.58 0 .07-.03.13-.1.16-.52.22-1.07.38-1.63.48-.5.09-1.02.14-1.54.14-.74.01-1.48-.14-2.15-.45-.63-.29-1.15-.77-1.51-1.36-.37-.61-.55-1.37-.55-2.28-.01-.74.18-1.47.55-2.11.38-.65.93-1.19 1.59-1.55.7-.39 1.54-.58 2.53-.58.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11zm-8.93.86h1.95c.06-.01.12.03.13.1.01.01.01.02.01.03v10.26c0 .11-.05.16-.14.16H6.62c-.09 0-.13-.05-.13-.16V6.42c0-.09.05-.13.14-.13zm8.23 4.24c-.39 0-.78.08-1.13.26-.34.17-.63.42-.85.74-.22.32-.33.75-.33 1.27-.01.35.05.7.17 1.03.1.27.25.51.45.71.19.18.42.32.68.4.27.09.55.13.83.13.15 0 .29-.01.42-.02.13.01.25-.01.36-.05v-4.4c-.09-.02-.18-.04-.27-.05-.11-.01-.22-.02-.33-.02z"></path></svg>            </span>
            <h1>Graphic design</h1>
            <p>Learn graphics designing using Adobe Photoshop, Adobe Illustrator and Corel draw. Enroll today.</p>
            <a className="btn-courses">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </a>
          </div>
          <div className="grid-course">
            <span className="svg">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 13.2v-6l-6-3.6-6 3.6-6-3.6-6 3.6v6l12 7.2zM8.4 10.8H6v2.4H4.8v-2.4H2.4V9.6h2.4V7.2H6v2.4h2.4zm7.2 2.4a1.2 1.2 0 01-1.2-1.2c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm3.6-2.4A1.2 1.2 0 0118 9.6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2Z"></path></svg>            </span>
            <h1>Game Development</h1>
            <p>Do you have a desire to create your own game? Learn gaming by creating your own game logics and graphics. Enroll today.</p>
            <a className="btn-courses">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </a>
          </div>
          <div className="grid-course">
            <span className="svg">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M16.146 0v24l6.134-4.886V3.334zM13.293 18.758l-4.939 2.157V2.086l4.939 1.462zM1.721 18.205l3.78-.999V5.188l-3.762-.606z"></path></svg>                    </span>
            <h1>Digital Marketing</h1>
            <p>Do you want to manage businesses through marketting digitally? Our digital marketting course will give you the knowledge and skill needed to market online.</p>
            <a className="btn-courses">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </a>
          </div>
          <div className="grid-course">
            <span className="svg">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"></path><path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"></path></svg>            </span>
            <h1>Robotics</h1>
            <p>Do you want to learn robotics? We help you learn how to code and build your first robots for successful careers in hi-tech fields.</p>
            <a className="btn-courses">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div ref={refs[4]} className="contacts">
        <div className="contact-cards">
          <div className="contact-card_left">
            <div className="contact-title">
              <h2>GET IN TOUCH WITH US</h2>
              <p>We strive to provide the best customer service and look forward to hearing from you. Thank you for considering Nolojia for your needs!</p>
            </div>
            <div className="contact-info">
              <div className="contact-svg">
                <svg width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z"></path></svg>
              </div>
              <div className="w-full">
                <h4>Our Location</h4>
                <p>Mombasa - Kenya . Mkomani Show Ground</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-svg">
                <svg width="24" height="26" viewBox="0 0 24 26" class="fill-current"><path d="M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z"></path><path d="M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z"></path><path d="M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z"></path></svg>              </div>
              <div className="w-full">
                <h4>Phone Number</h4>
                <p>0779880555</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-svg">
                <svg width="28" height="19" viewBox="0 0 28 19" class="fill-current"><path d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z"></path></svg>              </div>
              <div className="w-full">
                <h4>Email Address</h4>
                <p>techbysj@gmail.co.ke</p>
              </div>
            </div>
          </div>
          <div className="contact-card_right">
            <div className="form-container">
              <form action="" >
                <div className="input-container">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="input-container">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="input-container">
                  <input type="phone" placeholder="Your Phone" />
                </div>
                <div className="input-container">
                  <textarea name="" placeholder="Your Message" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                  <button type="submit">Send Message</button>
                </div>
              </form>
              <div>
                <span className="icon">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z" fill="#3056D3"></path></svg>
                </span>
                <span className="icon2">
                  <svg width="34" height="134" viewBox="0 0 34 134" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296"></circle><circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#13C296"></circle><circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#13C296"></circle><circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296"></circle><circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="#13C296"></circle><circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296"></circle><circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296"></circle><circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296"></circle><circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#13C296"></circle><circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#13C296"></circle><circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="#13C296"></circle><circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="#13C296"></circle><circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="#13C296"></circle><circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="#13C296"></circle><circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="#13C296"></circle><circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="#13C296"></circle><circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="#13C296"></circle><circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="#13C296"></circle><circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="#13C296"></circle><circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="#13C296"></circle><circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="#13C296"></circle><circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="#13C296"></circle><circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="#13C296"></circle><circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="#13C296"></circle><circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="#13C296"></circle><circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="#13C296"></circle><circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="#13C296"></circle><circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="#13C296"></circle><circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="#13C296"></circle><circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="#13C296"></circle></svg>
                </span>
                <span className="icon3">
                  <svg width="107" height="134" viewBox="0 0 107 134" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296"></circle><circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#13C296"></circle><circle cx="104.999" cy="102.667" r="1.66667" transform="rotate(180 104.999 102.667)" fill="#13C296"></circle><circle cx="104.999" cy="88" r="1.66667" transform="rotate(180 104.999 88)" fill="#13C296"></circle><circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)" fill="#13C296"></circle><circle cx="104.999" cy="45" r="1.66667" transform="rotate(180 104.999 45)" fill="#13C296"></circle><circle cx="104.999" cy="16" r="1.66667" transform="rotate(180 104.999 16)" fill="#13C296"></circle><circle cx="104.999" cy="59" r="1.66667" transform="rotate(180 104.999 59)" fill="#13C296"></circle><circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)" fill="#13C296"></circle><circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)" fill="#13C296"></circle><circle cx="90.3333" cy="132" r="1.66667" transform="rotate(180 90.3333 132)" fill="#13C296"></circle><circle cx="90.3333" cy="117.333" r="1.66667" transform="rotate(180 90.3333 117.333)" fill="#13C296"></circle><circle cx="90.3333" cy="102.667" r="1.66667" transform="rotate(180 90.3333 102.667)" fill="#13C296"></circle><circle cx="90.3333" cy="88" r="1.66667" transform="rotate(180 90.3333 88)" fill="#13C296"></circle><circle cx="90.3333" cy="73.3333" r="1.66667" transform="rotate(180 90.3333 73.3333)" fill="#13C296"></circle><circle cx="90.3333" cy="45" r="1.66667" transform="rotate(180 90.3333 45)" fill="#13C296"></circle><circle cx="90.3333" cy="16" r="1.66667" transform="rotate(180 90.3333 16)" fill="#13C296"></circle><circle cx="90.3333" cy="59" r="1.66667" transform="rotate(180 90.3333 59)" fill="#13C296"></circle><circle cx="90.3333" cy="30.6666" r="1.66667" transform="rotate(180 90.3333 30.6666)" fill="#13C296"></circle><circle cx="90.3333" cy="1.66665" r="1.66667" transform="rotate(180 90.3333 1.66665)" fill="#13C296"></circle><circle cx="75.6654" cy="132" r="1.66667" transform="rotate(180 75.6654 132)" fill="#13C296"></circle><circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296"></circle><circle cx="75.6654" cy="117.333" r="1.66667" transform="rotate(180 75.6654 117.333)" fill="#13C296"></circle><circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#13C296"></circle><circle cx="75.6654" cy="102.667" r="1.66667" transform="rotate(180 75.6654 102.667)" fill="#13C296"></circle><circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#13C296"></circle><circle cx="75.6654" cy="88" r="1.66667" transform="rotate(180 75.6654 88)" fill="#13C296"></circle><circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296"></circle><circle cx="75.6654" cy="73.3333" r="1.66667" transform="rotate(180 75.6654 73.3333)" fill="#13C296"></circle><circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="#13C296"></circle><circle cx="75.6654" cy="45" r="1.66667" transform="rotate(180 75.6654 45)" fill="#13C296"></circle><circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296"></circle><circle cx="75.6654" cy="16" r="1.66667" transform="rotate(180 75.6654 16)" fill="#13C296"></circle><circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296"></circle><circle cx="75.6654" cy="59" r="1.66667" transform="rotate(180 75.6654 59)" fill="#13C296"></circle><circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296"></circle><circle cx="75.6654" cy="30.6666" r="1.66667" transform="rotate(180 75.6654 30.6666)" fill="#13C296"></circle><circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#13C296"></circle><circle cx="75.6654" cy="1.66665" r="1.66667" transform="rotate(180 75.6654 1.66665)" fill="#13C296"></circle><circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#13C296"></circle><circle cx="60.9993" cy="132" r="1.66667" transform="rotate(180 60.9993 132)" fill="#13C296"></circle><circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="#13C296"></circle><circle cx="60.9993" cy="117.333" r="1.66667" transform="rotate(180 60.9993 117.333)" fill="#13C296"></circle><circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="#13C296"></circle><circle cx="60.9993" cy="102.667" r="1.66667" transform="rotate(180 60.9993 102.667)" fill="#13C296"></circle><circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="#13C296"></circle><circle cx="60.9993" cy="88" r="1.66667" transform="rotate(180 60.9993 88)" fill="#13C296"></circle><circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="#13C296"></circle><circle cx="60.9993" cy="73.3333" r="1.66667" transform="rotate(180 60.9993 73.3333)" fill="#13C296"></circle><circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="#13C296"></circle><circle cx="60.9993" cy="45" r="1.66667" transform="rotate(180 60.9993 45)" fill="#13C296"></circle><circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="#13C296"></circle><circle cx="60.9993" cy="16" r="1.66667" transform="rotate(180 60.9993 16)" fill="#13C296"></circle><circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="#13C296"></circle><circle cx="60.9993" cy="59" r="1.66667" transform="rotate(180 60.9993 59)" fill="#13C296"></circle><circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="#13C296"></circle><circle cx="60.9993" cy="30.6666" r="1.66667" transform="rotate(180 60.9993 30.6666)" fill="#13C296"></circle><circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="#13C296"></circle><circle cx="60.9993" cy="1.66665" r="1.66667" transform="rotate(180 60.9993 1.66665)" fill="#13C296"></circle><circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="#13C296"></circle><circle cx="46.3333" cy="132" r="1.66667" transform="rotate(180 46.3333 132)" fill="#13C296"></circle><circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="#13C296"></circle><circle cx="46.3333" cy="117.333" r="1.66667" transform="rotate(180 46.3333 117.333)" fill="#13C296"></circle><circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="#13C296"></circle><circle cx="46.3333" cy="102.667" r="1.66667" transform="rotate(180 46.3333 102.667)" fill="#13C296"></circle><circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="#13C296"></circle><circle cx="46.3333" cy="88" r="1.66667" transform="rotate(180 46.3333 88)" fill="#13C296"></circle><circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="#13C296"></circle><circle cx="46.3333" cy="73.3333" r="1.66667" transform="rotate(180 46.3333 73.3333)" fill="#13C296"></circle><circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="#13C296"></circle><circle cx="46.3333" cy="45" r="1.66667" transform="rotate(180 46.3333 45)" fill="#13C296"></circle><circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="#13C296"></circle><circle cx="46.3333" cy="16" r="1.66667" transform="rotate(180 46.3333 16)" fill="#13C296"></circle><circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="#13C296"></circle><circle cx="46.3333" cy="59" r="1.66667" transform="rotate(180 46.3333 59)" fill="#13C296"></circle><circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="#13C296"></circle><circle cx="46.3333" cy="30.6666" r="1.66667" transform="rotate(180 46.3333 30.6666)" fill="#13C296"></circle><circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="#13C296"></circle><circle cx="46.3333" cy="1.66665" r="1.66667" transform="rotate(180 46.3333 1.66665)" fill="#13C296"></circle><circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="#13C296"></circle></svg>                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="grid">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid">
        </div>
        <div className="grid">
          <h3>Services</h3>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
        <div className="grid">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a>
          </p>
          <p>Phone: <a href="tel:+1234567890">123-456-7890</a>
          </p>
        </div>

      </footer>

    </div>
  )
}

export default App

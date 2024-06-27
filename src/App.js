import React from "react";

function App() {
  return (
    <div className="">
      {/* <div className="resume-container">
        <header>
          <h1>John Doe</h1>
          <p>Web Developer</p>
          <p>Email: john.doe@example.com | Phone: (123) 456-7890</p>
          <p>LinkedIn: linkedin.com/in/johndoe | GitHub: github.com/johndoe</p>
        </header>
        <section>
          <h2>Profile</h2>
          <p>
            A highly skilled and motivated web developer with 5+ years of experience
            in creating dynamic and responsive websites and web applications.
            Proficient in HTML, CSS, JavaScript, and various modern frameworks.
          </p>
        </section>
        <section>
          <h2>Experience</h2>
          <div className="job">
            <h3>Senior Web Developer</h3>
            <p>ABC Company | January 2020 - Present</p>
            <ul>
              <li>
                Developed and maintained the company website using HTML, CSS, and
                JavaScript.
              </li>
              <li>
                Collaborated with designers to create a user-friendly interface.
              </li>
              <li>
                Implemented responsive design to ensure compatibility across various
                devices.
              </li>
            </ul>
          </div>
          <div className="job">
            <h3>Web Developer</h3>
            <p>XYZ Company | June 2016 - December 2019</p>
            <ul>
              <li>Created dynamic web applications using React and Node.js.</li>
              <li>Worked closely with the backend team to integrate APIs.</li>
              <li>Optimized website performance and improved loading times.</li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Education</h2>
          <p>Bachelor of Science in Computer Science</p>
          <p>University of Technology | Graduated May 2016</p>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Node.js</li>
            <li>Responsive Design</li>
            <li>Version Control (Git)</li>
            <li>Agile Development</li>
          </ul>
        </section>
        <section>
          <h2>Certifications</h2>
          <ul>
            <li>Certified JavaScript Developer</li>
            <li>Responsive Web Design Certification</li>
          </ul>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              Portfolio Website - A personal portfolio website showcasing my projects
              and skills.
            </li>
            <li>
              Task Manager App - A web application to manage and track tasks and
              projects.
            </li>
          </ul>
        </section>
        <footer>
          <p>References available upon request</p>
        </footer>
      </div> */}

      <div className="resume-container">
        <header>
          <h1>Hemant Kumar Morya</h1>
          <p>Front End Developer</p>
        </header>

        <section className="education">
          <h2>Education</h2>
          <p><strong>Bachelor of Science, Jaipur</strong> — B.Sc.</p>
          <p>Rajasthan University</p>
          <p>2016 - 2019</p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Profile Page</h3>
            <p>A template web page created to provide information about a profile using HTML and CSS.</p>
            <a href="https://morya0322.000webhostapp.com/profile/profile.html" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project">
            <h3>Web Page for IT Company</h3>
            <p>This web page was created to provide IT company services with HTML & CSS.</p>
            <a href="https://morya0322.000webhostapp.com/app-design/index.html" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project">
            <h3>CCTV Web Page</h3>
            <p>An informative web page created to increase sales of CCTV services.</p>
            <a href="https://morya0322.000webhostapp.com/cctv/index.html" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project">
            <h3>Netflix Dummy Web Page</h3>
            <p>A complete responsive designed dummy web page of Netflix using Bootstrap, HTML, and CSS.</p>
            <a href="https://morya0322.000webhostapp.com/boostrap/index.html" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project">
            <h3>Web Page for Interior Design</h3>
            <p>A web page providing services for interior design, designed using HTML and CSS.</p>
            <a href="https://morya0322.000webhostapp.com/interior%20designer/index.html" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project">
            <h3>Web Page for Travel Service</h3>
            <p>An informative web page created to provide travel services, designed using HTML and CSS.</p>
            <a href="https://morya0322.000webhostapp.com/travelling/index.html" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Bootstrap</li>
          </ul>
        </section>

        <section className="languages">
          <h2>Languages</h2>
          <ul>
            <li>English</li>
            <li>Hindi</li>
          </ul>
        </section>
      </div>

    </div>
  );
}

export default App;

import React from 'react';


  

const Frontend = () => {
    const roadmap = {
        "title": "Frontend Developer Roadmap",
        "sections": [
          {
            "title": "HTML",
            "topics": [
              "Semantic HTML",
              "HTML5",
              "Accessibility"
            ]
          },
          {
            "title": "CSS",
            "topics": [
              "CSS Box Model",
              "Layouts",
              "CSS Grid",
              "Flexbox",
              "Responsive Design",
              "CSS Preprocessors (Sass, Less)"
            ]
          },
          {
            "title": "JavaScript",
            "topics": [
              "ES6+",
              "DOM Manipulation",
              "Event Handling",
              "AJAX",
              "Promises",
              "Async/Await",
              "Module Bundlers (Webpack, Rollup)",
              "Linters (ESLint)"
            ]
          },
          {
            "title": "Frontend Frameworks/Libraries",
            "topics": [
              "React.js",
              "Angular",
              "Vue.js"
            ]
          },
          {
            "title": "UI/UX",
            "topics": [
              "UI Design Principles",
              "User-Centered Design",
              "Prototyping",
              "Wireframing",
              "Responsive Web Design"
            ]
          },
          {
            "title": "Version Control",
            "topics": [
              "Git",
              "GitHub",
              "GitLab"
            ]
          },
          {
            "title": "Build Tools",
            "topics": [
              "Task Runners (Gulp, Grunt)",
              "Module Bundlers (Webpack, Rollup)",
              "Package Managers (npm, Yarn)"
            ]
          },
          {
            "title": "Testing",
            "topics": [
              "Unit Testing (Jest, Mocha, Jasmine)",
              "End-to-End Testing (Cypress, Selenium)",
              "Linters (ESLint, Stylelint)"
            ]
          },
          {
            "title": "Performance Optimization",
            "topics": [
              "Code Minification",
              "Image Optimization",
              "Caching",
              "Lazy Loading",
              "Performance Auditing"
            ]
          },
          {
            "title": "Browser Dev Tools",
            "topics": [
              "Inspecting Elements",
              "Debugging",
              "Performance Profiling",
              "Network Analysis"
            ]
          }
        ]
      }
  return (
    <div className="bg-gray-100 py-6 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 text-maroon">{roadmap.title}</h1>
        {roadmap.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-pulp">{section.title}</h2>
            <ul className="list-disc list-inside">
              {section.topics.map((topic, index) => (
                <li key={index} className="mb-2">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;

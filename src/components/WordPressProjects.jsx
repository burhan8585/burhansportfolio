import React, { useEffect } from "react";

const WordPressProjects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const wpProjects = [
    {
      title: "WP Portfolio Site",
      image: "https://bellacarry.in/wp-content/uploads/2025/05/IHK06518-removebg-preview.webp",
      live: "https://bellacarry.in/",
      github: "#",
    },
    {
      title: "E-commerce WP",
      image: "https://via.placeholder.com/300x200",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900  text-center">
      <h2 className="text-3xl font-bold text-indigo-600 mt-5 dark:text-white mb-10">
        WordPress Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {wpProjects.map((project, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 font-semibold dark:text-white">{project.title}</h3>
            <div className="mt-2 flex justify-center gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 underline"
              >
                Live
              </a>
              {/* <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-300 underline"
              >
                GitHub
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WordPressProjects;

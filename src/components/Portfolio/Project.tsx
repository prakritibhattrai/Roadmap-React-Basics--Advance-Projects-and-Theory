import React, { useEffect, useState } from "react";
import "animate.css"; // optional animation library
import video1 from "../../assets/videos/Recording1.mp4";
import video2 from "../../assets/videos/Recording2.mp4";

const ProjectSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("projects");
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check visibility on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="projects"
      className="py-20 bg-gradient-to-t from-sky-100 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-sky-500 mb-12 tracking-tight">
          My Projects
        </h2>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 transition-all duration-1000 ease-in-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Project 1 */}
          <div className="max-w-sm mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <video
              className="w-full h-72 object-cover rounded-t-lg shadow-md"
              src={video1}
              type="video/mp4"
              autoPlay
              muted
              loop
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                E-commerce Platform
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                A fully responsive e-commerce platform with features like
                product filtering, inventory management, and secure payment
                integration.
              </p>
              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform">
                View Project
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="max-w-sm mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <video
              className="w-full h-72 object-cover rounded-t-lg shadow-md"
              src={video2}
              type="video/mp4"
              autoPlay
              muted
              loop
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                AI-Powered Food Delivery
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                A food delivery application that provides personalized
                recommendations based on dietary preferences.
              </p>
              <a
                href="https://honeycomb.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 px-6 py-3 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform">
                  View Project
                </button>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="max-w-sm mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <video
              className="w-full h-72 object-cover rounded-t-lg shadow-md"
              src={video1}
              type="video/mp4"
              autoPlay
              muted
              loop
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Climate Resilience Tracker
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                A web-based application built to track and analyze water
                resource availability in rural Nepal.
              </p>
              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

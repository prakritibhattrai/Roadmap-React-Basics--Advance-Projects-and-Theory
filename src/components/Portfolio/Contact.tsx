const ContactSection = () => {
  return (
    <div className="container mx-auto dark:bg-slate-900 flex flex-col lg:flex-row items-center py-20 px-20 gap-8 text-left">
      {/* Left Side - Text Section */}
      <div className="lg:basis-1/2 w-full text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl mb-6 font-extrabold text-gray-800 dark:text-white animate__animated animate__fadeInDown font-serif">
          <span className="text-sky-500">Get in</span>
          <br /> Touch with Me
        </h1>

        <div className="space-y-4 text-md text-gray-700 dark:text-gray-300 font-light">
          <p className="animate__animated animate__fadeInUp">
            Looking for a developer who is equal parts logic and sarcasm? You're
            in the right place. Let’s chat about how we can make the web a
            little more fun (and a lot less buggy)
          </p>
        </div>

        <div className="mt-6 flex gap-6 justify-center lg:justify-start">
          {/* Email Link Button */}
          <a
            href="mailto:prakriti.bhattarai5@gmail.com"
            className="bg-gradient-to-l from-green-500 to-blue-500 text-white rounded-full py-2 px-6 text-md shadow-md hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 transition-transform duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1s"
          >
            Email Me
          </a>

          {/* LinkedIn Link Button */}
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-l from-sky-500 to-teal-500 text-white rounded-full py-2 px-6 text-md shadow-md hover:bg-gradient-to-r hover:from-sky-600 hover:to-teal-600 transition-transform duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1s"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right Side - Profile Image Section */}
      <div className="lg:basis-1/2 w-full flex justify-center animate__animated animate__fadeInRight">
        <div className="relative">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full h-64 w-64 shadow-lg object-cover"
          />
          {/* Gradient overlay for better blending */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

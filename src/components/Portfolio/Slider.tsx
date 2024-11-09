export function Banner() {
  return (
    <>
      <div className="container mx-auto dark:bg-slate-900 flex flex-col lg:flex-row items-center py-20 px-20 gap-8 text-left">
        {/* Left Side - Text Section */}
        <div className="lg:basis-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl mb-6 font-extrabold text-gray-800 dark:text-white animate__animated animate__fadeInDown font-serif">
            <span className="text-sky-500">Let's Walk</span>
            <br /> Through My
            <span className="text-green-500"> Journey</span>
          </h1>

          <div className="space-y-4 text-md text-gray-700 dark:text-gray-300 font-light">
            <p className="animate__animated animate__fadeInUp">
              I believe there is much more in web development, <br />
              and I am trying to reach every bit of it!
            </p>
          </div>

          <button className="mt-6 bg-gradient-to-l from-green-500 to-blue-500 text-white rounded-full py-2 px-6 text-md shadow-md hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 transition-transform duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
            View Resume
          </button>
        </div>

        {/* Right Side - Profile Image Section */}
        <div className="lg:basis-1/2 w-full flex justify-center animate__animated animate__fadeInRight">
          <div className="relative">
            <img
              src="https://i.pinimg.com/564x/c3/fd/13/c3fd1391735e8b9d725abaf6cc7f7d62.jpg"
              alt="Profile"
              className="rounded-full h-64 w-64 shadow-lg object-cover"
            />
            {/* Gradient overlay for better blending */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent"></div>
          </div>
        </div>

        {/* Empty Space - For Alignment */}
      </div>
    </>
  );
}

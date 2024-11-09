const SkillsSection = () => {
  return (
    <div className="w-full px-16 p-7 bg-white bg-gradient-to-t from-sky-100 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Left Section - Skill Tags */}
        <div className="lg:basis-1/2 p-4 space-y-12">
          <p className="pt-2 underline  text-left text-4xl max-w-2xl mx-auto">
            "Skills are important, but soft skills are more important for a
            Software Engineer."
          </p>
        </div>

        {/* Right Section - Skills with Gradient Progress Bars */}
        <div className="lg:basis-1/3 w-18 text-center lg:text-left">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-6">
            Skills Proficiency
          </h3>

          {/* Gradient Progress Bars */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                JavaScript
              </span>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                React
              </span>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Node.js
              </span>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-gradient-to-r from-green-600 to-blue-500 h-2 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                AWS
              </span>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-gradient-to-r from-orange-500 to-yellow-600 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

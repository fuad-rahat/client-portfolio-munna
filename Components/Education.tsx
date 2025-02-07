import React from "react";

const Education = () => {
  const educationData = [
    {
      title: "Secondary School Certificate(SSC)",
      institution: "Trishal Govt. Nazrul Academy",
      date: "2017 - 2019",
      image: "/education/bachelor.png",
    },
    {
      title: "Higher Secondary School Certificate",
      institution: "Alamgir Monsur Mintu Memorial College, Mymensingh.",
      date: "2019 - 2021",
      image: "/education/hsc.png",
    },
    {
      title: "B.Sc. in Software Engineering",
      institution: "Daffodil International University, Ashulia",
      date: "2023 - Present",
      image: "/education/ssc.png",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-800 md:py-32 max-sm:pb-14 max-sm:relative -top-16">
      <div className="max-w-5xl mx-auto md:px-4">
        {/* Header */}
        {/* <div className="text-center mb-14">
          <h3 className="text-3xl font-semibold mb-3">Education</h3>
          <p className="text-sm font-bold uppercase text-gray-600">
            Academic Background
          </p>
          <div className="w-24 h-1 bg-[#1E73B7] mx-auto mt-3"></div>
        </div> */}

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Image */}
          <div className="flex  bg-[#B3D3D2] h-[30rem]  justify-center items-center">
            <img
              src="/Basic photos/Education.png"
              alt="Education"
              className="w-72 h-72 object-cover"
            />
          </div>

          {/* Right Side - Timeline */}
          <div className=" max-sm:px-4 ">
            <p className="text-4xl font-bold ">Educational Background</p>
          <div className="relative ml-6  mt-10 left-24">
            {/* Vertical Line - Starts at First Item and Ends at Third */}
            <div className="absolute left-[-4px] top-0 w-1 bg-[#1E73B7] h-full rounded-full"
              style={{ height: '15rem' }} // Adjusted to stop at the last item
            ></div>

            {educationData.map((edu, index) => (
              <div key={index} className="mb-10 ml-6 relative last:mb-0">
                {/* Rotated Rectangle (Diamond Shape) */}
                <div className="absolute -left-[2.2rem] w-5 h-5 bg-[#1E73B7] transform rotate-45"></div>

                {/* Content */}
                <time className="text-xl uppercase font-bold text-[#1E73B7]">{edu.date}</time>
                <h3 className="text-sm font-bold">{edu.title}</h3>
                <p className="text-sm font-bold ">{edu.institution}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

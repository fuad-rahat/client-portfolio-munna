import React from "react";

const Page = () => {
  const imageCount = 9;
  const images = Array.from(
    { length: imageCount },
    (_, i) => `/Projects/C project/${i + 1}.png`
  );

  return (
    <div className=" max-sm:p-2">
      <p className="max-w-5xl text-3xl text-center md:mt-14 md:text-5xl py-20 md:py-10 font-bold mx-auto">
        Software Development Capstone Project
      </p>
      <div className="bg-[#C3F4E9]">
        <p className="py-14 text-5xl text-center font-bold">ABSTRACT</p>
        <p className="text-center max-w-5xl mx-auto">
          The implementation of this banking management system promises numerous
          benefits. This project was chosen for its focus on several key areas,
          including time-saving, financial efficiency, and accessibility. Users
          will experience a significant reduction in waiting times, as
          transactions can be conducted swiftly online, without the need to
          queue at bank branches. Additionally, the option to utilize digital
          currency streamlines payment processes for both buyers and sellers,
          eliminating concerns about exact change. By providing users with
          access to account information and banking services remotely, this
          system eliminates the need for physical visits to branches. Users can
          effortlessly manage their finances, from transferring funds to
          checking balances, enhancing efficiency and convenience. Moreover, the
          system&apos;s menu feature enables users to explore available banking
          services without visiting branches, promoting informed
          decision-making. This accessibility fosters healthy competition among
          banks, leading to improved services and offerings for users.
          Additionally, the implementation of this system benefits both users
          and banking institutions. Reduced labor requirements translate to cost
          savings for banks, while the system&apos;s order tracking and
          reporting capabilities enable efficient service management. User
          feedback mechanisms, such as rating systems and comments, empower
          banks to refine their services continually, enhancing customer
          satisfaction and loyalty. Overall, the introduction of this banking
          management system heralds a new era of efficiency, accessibility, and
          innovation in banking services, benefiting users, institutions, and
          the broader community alike.
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-5">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Figma Project ${index + 1}`}
              className="w-[60rem] rounded-lg shadow-md"
            />
          ))}
        </div>
        <p className="max-w-5xl mx-auto text-center text-2xl font-semibold py-20">
          This document provides a brief overview of the project to give you a
          general idea of its scope and objectives. For more in-depth details,
          including technical specifications, workflows, or methodologies,
          please refer to the main documentation. Feel free to contact me if
          you&apos;d like access to the full documentation or have any questions
          about the project.
        </p>
      </div>
    </div>
  );
};

export default Page;

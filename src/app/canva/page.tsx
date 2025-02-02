import React from 'react';

const CanvaGallery = () => {
  // Array of Canva URLs to link to
  const links = [
    "https://www.canva.com/design/DAF0Bwgx1Zc/7k2s_5VlNi-fqBQzS65dvg/edit",
    "https://www.canva.com/design/DAGF2H6l1Y8/VTpJFCS9E5ttAqpcLb1Drw/edit",
    "https://www.canva.com/design/DAFuEUw1fjU/EzXkOY4G2_YiIYDsl3LJcw/edit",


    "https://www.canva.com/design/DAF-8Grd-KA/Z8dB5jfz597VhVvyye10xg/edit",
    "https://www.canva.com/design/DAGDTfRLPxs/VenZ0hI1U6swsKuQbPqaoA/edit",

    "https://www.canva.com/design/DAFjnnIH_AE/derNubYXxtG1msHJXNDt5w/edit",
    "https://www.canva.com/design/DAFiKM8oYJ4/rljCLXTKB1K4R5pgbGD7bQ/edit",

    "https://www.canva.com/design/DAFiJwvsLRM/2iv3eGJyc_ojA22hgNpoGg/edit",

  ];

  // Use the number of links to determine the image count.
  const imageCount = links.length;
  // Generate image paths sequentially (assuming images are named 1.png, 2.png, etc.)
  const images = Array.from({ length: imageCount }, (_, i) => `/Projects/Canva/${i + 1}.png`);

  return (
    <div>
      <div className="max-w-5xl mx-auto py-3">
        <h2 className="text-4xl font-bold py-3 mb-4 ml-3">
          Some Examples of my Canva presentations:
        </h2>
      </div>
      <div className="bg-[#D9D9D9]">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 p-5">
          {images.map((src, index) => (
            <a
              key={index}
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={src}
                alt={`Canva Presentation ${index + 1}`}
                className="w-full h-[15rem] rounded-lg shadow-md object-cover"
              />
            </a>
          ))}
        </div>
        <div className="max-w-5xl mx-auto relative left-5">
          <p className="text-3xl py-3 text-[#1E68D6] font-bold">Note:</p>
          <p>
            The presentation slides I created stem from extensive research efforts. The content was developed through both independent work and collaborative team efforts.
          </p>
          <p>
            Portions of the research were conducted solely by me, including gathering data, analyzing key findings, and synthesizing this information into cohesive insights. The slides reflecting this independent work emphasize [specific examples, such as topic areas, unique data, or creative analyses].
          </p>
          <p>
            Other sections of the research were carried out as part of a team. In these collaborative efforts, I contributed by [explain your role, such as coordinating discussions, analyzing data, or presenting specific sections]. The slides associated with team research capture the shared knowledge and collective insights.
          </p>
          <p>
            By integrating both solo and teamwork contributions, the presentation ensures a well-rounded and comprehensive perspective on the topic. It demonstrates a balanced approach to problem-solving, collaboration, and the ability to distill research findings into accessible visual formats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CanvaGallery;

import React from "react";

const Page = () => {
  // Array of Behance URLs in the desired order.
  const links = [
    "https://www.behance.net/gallery/205891901/Carousel-Animation-for-Apple-watch",
    "https://www.behance.net/gallery/205860193/YouTube-UIUX-with-scrollable-sections",
    "https://www.behance.net/gallery/205517359/Carousel-Animation",
    "https://www.behance.net/gallery/205471111/Animated-Charts",
    "https://www.behance.net/gallery/205427891/Responsive-Table",
    "https://www.behance.net/gallery/205384337/Smart-Animated-card",
    "https://www.behance.net/gallery/205300895/CARAXES-poster-from-House-of-the-Dragon",
    "https://www.behance.net/gallery/204952019/Ads-for-shoe-Brand",
    "https://www.behance.net/gallery/204953483/Homepage-of-furniture-Website",
    "https://www.behance.net/gallery/203401063/Futuristic-Shoe-Banner",
    
    "https://www.behance.net/gallery/203396927/Animated-Menu-bar",
    
    "https://www.behance.net/gallery/203204039/Simple-App-design",
    
  ];

  // Create an array of image sources using the same count as links.
  const images = links.map((_, index) => `/Projects/Figma/${index + 1}.png`);

  return (
    <div>
      <div className="max-w-5xl mx-auto max-sm: mt-14">
        <h2 className="text-3xl md:text-4xl font-bold py-3 mb-4 ml-3 relative">
          Checkout My Figma Projects
        </h2>
      </div>
      <div className="bg-[#D9D9D9]">
        <div className="max-w-5xl mx-auto grid grid-cols-1  lg:grid-cols-3 gap-5 p-5">
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
                alt={`Figma Project ${index + 1}`}
                className="w-full h-[15rem] object-cover rounded-lg shadow-md"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

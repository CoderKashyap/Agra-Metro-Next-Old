import { useEffect } from 'react';

const injectKeyframes = (keyframes: string[], className: string) => {
  const styleSheet = document.createElement('style');
  const keyframesString = `
    @keyframes ${className} {
      0% {
        background-image: url('${keyframes[0]}');
      }
      ${keyframes.map((frame, index) => `
        ${(index / (keyframes.length - 1)) * 100}% {
          background-image: url('${frame}');
        }
      `).join('')}
      100% {
        background-image: url('${keyframes[0]}');
      }
    }
  `;
  styleSheet.appendChild(document.createTextNode(keyframesString));
  document.head.appendChild(styleSheet);
};







export default function TourGuide() {

  const tourGuideData = [
    {
      images: [
        "../../../public/tourGuide/Fatehpur-Sikri.jpg",
        "../../../public/tourGuide/etma-ud-Daulah.jpg",
        "../../../public/tourGuide/akbar-tomb-sikandra.jpg",
        "../../../public/tourGuide/redfort.jpg",
        "../../../public/tourGuide/tajMahal.webp",
        "../../../public/tourGuide/tajMahal.webp",
      ],
      heading: "Famous Attractions",
      description: "Agra’s Must-Visit Architectural Gems"
    },
    {
      images: [
        "../../../public/tourGuide/downTownCafe.webp",
        "../../../public/tourGuide/saltCafe.jpg",
        // "/tourGuide/oberoiAmarvilas.webp",
        "../../../public/tourGuide/itcMughal.jpg",
        "../../../public/tourGuide/oberoiAmarvilas1.jpg",
        "../../../public/tourGuide/moleculeCafe.webp",
        "../../../public/tourGuide/moleculeCafe.webp",
      ],
      heading: "Hotel, Restro & cafes",
      description: "Agra’s Best Dine, Play, Enjoy & Stay."
    },
    {
      images: [
        "../../../public/tourGuide/Jewlery-Shopping-Agra.jpg",
        "../../../public/tourGuide/shahganj-market.jpg",
        // "/tourGuide/sadarBazar.jpg",
        "../../../public/tourGuide/sadarBazar1.jpg",
        "../../../public/tourGuide/Kinari-Bazaar-1.jpg",
        "../../../public/tourGuide/shoppingAgra.jpg",
        "../../../public/tourGuide/shoppingAgra.jpg",
      ],
      heading: "Famous Markets",
      description: "The Pulse of Agra's Streets."
    },
    {
      images: [
        "../../../public/tourGuide/escapeRooms.jpg",
        "../../../public/tourGuide/trampoline.jpg",
        "../../../public/tourGuide/cosmos-mall.jpg",
        "../../../public/tourGuide/waterPark.jpg",
        "../../../public/tourGuide/cinema.jpg",
        "../../../public/tourGuide/cinema.jpg",
      ],
      heading: "Enjoy & Entertain",
      description: "Malls, Cinema, & Adventure in Agra."
    }
  ]



  useEffect(() => {
    tourGuideData.forEach((tgData, i) => {
      injectKeyframes(tgData?.images, `animate${i}`);
    })
  }, []);


  return (
    <>

      <section className="xl:px-18 px-3">

        <div className="font-quando lg:p-4 text-center p-2 text-gray-600 font-bold lg:text-3xl text-3xl">Tour Guide</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 cursor-pointer items-center justify-items-center gap-6 py-6 px-3 md:px-1 w-full">
          {tourGuideData && tourGuideData.map((data, i) => (
            <div key={i} className="max-w-sm group border border-gray-300 hover:shadow-md rounded-2xl p-4 md:p-4 flex justify-center items-center flex-col w-full h-full xl:w-full transition-all duration-100 ease-in-out">

              <div className="h-40 w-72 bg-cover bg-center bg-no-repeat          rounded-2xl group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-175 ease-in-out object-contain" style={{ animation: `animate${i} 30s linear infinite forwards` }} >

              </div>
              {/* <img 
                                height="300"
                                width="300"
                                className="group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-175 ease-in-out object-contain"
                                src={data.image}
                                alt="image1"
                                srcSet=""
                            /> */}

              <h1 className="font-quando text-gray-600 group-hover:scale-100 group-hover:-translate-y-2 transition-all duration-175 ease-in-out text-md sm:text-lg font-semibold mt-3">
                {data.heading}
              </h1>
              <p className="text-xs text-center text-gray-500">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </section>



    </>)
}

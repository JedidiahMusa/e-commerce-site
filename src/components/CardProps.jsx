import React from "react";
import shirt from "../assets/shirt.png";
import jeans from "../assets/jeans.png";
import sweater from "../assets/sweater.png";
import vest from "../assets/vest.png";
import jacket from "../assets/jacket.png";
import jersey from "../assets/jersey.png";

function CardProps() {
  const cardData = [
    {
      img: shirt,
      title: "T-Shirt",
      rating: "⭐⭐⭐⭐⭐",
      price: "$120",
    },
    {
      img: jeans,
      title: "Jeans",
      rating: "⭐⭐⭐⭐⭐",
      price: "$100",
    },
    {
      img: sweater,
      title: "Swaeater",
      rating: "⭐⭐⭐⭐⭐",
      price: "$200",
    },
    {
      img: vest,
      title: "Vest",
      rating: "⭐⭐⭐⭐⭐",
      price: "$90",
    },
    {
      img: jacket,
      title: "Jacket",
      rating: "⭐⭐⭐⭐⭐",
      price: "$140",
    },
    {
      img: jersey,
      title: "Jersey",
      rating: "⭐⭐⭐⭐⭐",
      price: "$70",
    },
  ];

  return (
    <div>
      

      <div className="flex items-center my-8 justify-center">
        <p className="font-bold text-4xl font-[Anton] ">NEW ARRIVALS</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full overflow-x-hidden p-4 gap-4">
        {cardData.map((card, index) => (
          <div key={index} className="h-full w-full">
            <div className=" flex flex-col h-full ">
              <div className="h-[15rem] md:h-[18rem] flex items-center justify-center object-contain rounded-3xl bg-gray-200 w-full ">
                <img
                  src={card.img}
                  alt=""
                  className="object-contain h-full w-full "
                />
              </div>

              <div className="flex p-2 flex-col ">
                <p className="font-bold text-xl ">{card.title}</p>
                <p className="mt-2">{card.rating}</p>
                <p className="mt-2 text-2xl font-[Anton]">{card.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardProps;

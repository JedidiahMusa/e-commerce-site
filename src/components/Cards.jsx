import React from "react";
import shirt from "../assets/shirt.png";
import jeans from "../assets/jeans.png";
import sweater from "../assets/sweater.png";
import Rating from "@mui/material/Rating";
import vest from "../assets/vest.png";
import tank from "../assets/tank.png";
import hoodie from "../assets/hoodie.png";
import ribbed from "../assets/ribbed.png";
import jacket from "../assets/jacket.png";
import jersey from "../assets/jersey.png";
import { useState, useEffect } from "react";

function Cards() {
  const [viewAll, setViewAll] = useState(false);
  const [cardsPerRow, setCardsPerRow] = useState(2);
  useEffect(() => {
    const updateCardsPerRow = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setCardsPerRow(5);
      } else if (width >= 768) {
        setCardsPerRow(4);
      } else if (width >= 640) {
        setCardsPerRow(3);
      } else {
        setCardsPerRow(2);
      }
    };

    updateCardsPerRow();
    window.addEventListener("resize", updateCardsPerRow);

    return () => window.removeEventListener("resize", updateCardsPerRow);
  }, []);
  const cardData = [
    {
      img: shirt,
      title: "T-Shirt",
      price: "$120",
    },
    {
      img: jeans,
      title: "Jeans",
      price: "$100",
    },
    {
      img: sweater,
      title: "Swaeater",
      price: "$200",
    },
    {
      img: vest,
      title: "Vest",
      price: "$90",
    },
    {
      img: jacket,
      title: "Jacket",
      price: "$140",
    },
    {
      img: jersey,
      title: "Jersey",
      price: "$70",
    },
  ];
  const cardData2 = [
    {
      img: tank,
      title: "Tank Top",
      price: "$40",
    },
    {
      img: ribbed,
      title: "Ribbed Top",
      price: "$20",
    },
    {
      img: hoodie,
      title: "Hoodie",
      price: "$130",
    },
    {
      img: vest,
      title: "Vest",
      price: "$90",
    },
    {
      img: jacket,
      title: "Jacket",
      price: "$140",
    },
    {
      img: jersey,
      title: "Jersey",
      price: "$70",
    },
  ];
  const [ratings, setRatings] = useState(Array(cardData.length).fill(0));
  const handleRatingChange = (index, newValue) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = newValue;
    setRatings(updatedRatings);
  };

  return (
    <>
      <div className=" w-full px-[1rem] md:px-[3rem] lg:px-[5rem]">
        <div className="flex items-center my-8 justify-center">
          <p className="font-bold text-4xl font-[Anton] ">NEW ARRIVALS</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full overflow-x-hidden gap-4">
          {(viewAll ? cardData : cardData.slice(0, cardsPerRow)).map(
            (card, index) => (
              <div key={index} className="h-full w-full">
                <div className=" flex flex-col h-full ">
                  <div className="h-[15rem] group overflow-hidden md:h-[18rem] flex items-center justify-center object-contain rounded-3xl bg-gray-200 w-full ">
                    <img
                      src={card.img}
                      alt=""
                      className="object-contain group-hover:scale-125 transition ease-in-out duration-700 h-full w-full "
                    />
                  </div>

                  <div className="flex p-2 flex-col ">
                    <p className="font-bold ">{card.title}</p>
                    <div className=" flex gap-2 ">
                      <div className="mt-2 flex items-center gap-2">
                        <Rating
                          name={`rating-${index}`}
                          value={ratings[index]}
                          size="small"
                          precision={0.5}
                          onChange={(event, newValue) =>
                            handleRatingChange(index, newValue)
                          }
                        />
                        <p className="text-[.8rem] text-gray-600">
                          {ratings[index]}/5
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 text-[1.2rem] font-bold ">
                      {card.price}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="w-full my-8 flex justify-center">
          <button
            onClick={() => setViewAll(!viewAll)}
            className="flex items-center font-semibold text-[.9rem] hover:border-gray-500 transition ease-in-out duration-300 hover:scale-105 justify-center p-2 w-[10rem] md:w-[12rem] border-1 border-gray-300 rounded-full"
          >
            {viewAll ? "View Less" : "View More"}
          </button>
        </div>
        <div className="h-[1.5px]  w-full bg-gray-300 "></div>
      </div>
      





      <div className=" w-full px-[1rem] md:px-[3rem] lg:px-[5rem]">
        <div className="flex items-center my-8 justify-center">
          <p className="font-bold text-4xl font-[Anton] ">TOP SELLING</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full overflow-x-hidden gap-4">
          {(viewAll ? cardData2 : cardData2.slice(0, cardsPerRow)).map(
            (card, index) => (
              <div key={index} className="h-full w-full">
                <div className=" flex flex-col h-full ">
                  <div className="h-[15rem] md:h-[18rem] group flex items-center justify-center object-contain rounded-3xl bg-gray-200 w-full ">
                    <img
                      src={card.img}
                      alt=""
                      className="object-contain group-hover:scale-125 transition ease-in-out duration-700 h-full w-full "
                    />
                  </div>

                  <div className="flex p-2 flex-col ">
                    <p className="font-bold ">{card.title}</p>
                    <div className=" flex gap-2 ">
                      <div className="mt-2 flex items-center gap-2">
                        <Rating
                          name={`rating-${index}`}
                          value={ratings[index]}
                          size="small"
                          precision={0.5}
                          onChange={(event, newValue) =>
                            handleRatingChange(index, newValue)
                          }
                        />
                        <p className="text-[.8rem] text-gray-600">
                          {ratings[index]}/5
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 text-[1.2rem] font-bold ">
                      {card.price}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="w-full my-8 flex justify-center">
          <button
            onClick={() => setViewAll(!viewAll)}
            className="flex items-center font-semibold text-[.9rem] hover:border-gray-500 transition ease-in-out duration-300 hover:scale-105 justify-center p-2 w-[10rem] md:w-[12rem] border-1 border-gray-300 rounded-full"
          >
            {viewAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;

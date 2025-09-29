import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

function Cards() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewAll, setViewAll] = useState(false);
  const [cardsPerRow, setCardsPerRow] = useState(2);

  const [ratings, setRatings] = useState([]);

  // Fetch + filter categories
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const all = await res.json();

        // Only clothes, jewelry, and simulated shoes
        const filtered = all.filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing" ||
            item.category === "jewelery" ||
            item.title.toLowerCase().includes("shoe") ||
            item.title.toLowerCase().includes("sneaker") ||
            item.title.toLowerCase().includes("boot")
        );

        setProducts(filtered);
        setRatings(Array(filtered.length).fill(0));
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Responsive grid logic
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

  const handleRatingChange = (index, newValue) => {
    const updated = [...ratings];
    updated[index] = newValue;
    setRatings(updated);
  };

  if (loading) {
    return <p className="text-center py-10">Loading products...</p>;
  }

  return (
    <Element name="cards">
      <div className="w-full px-[1rem] md:px-[3rem] lg:px-[5rem]">
        <div className="flex items-center my-8 justify-center">
          <p className="font-extrabold text-4xl font-[Montserrat]">
            FEATURED PRODUCTS
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {(viewAll ? products : products.slice(0, cardsPerRow)).map(
            (card, index) => (
              <div key={card.id} className="h-full w-full">
                <div className="flex flex-col h-full">
                  <Link
                    to={`/items/${card.id}`}
                    className="h-[15rem] md:h-[18rem] group overflow-hidden flex items-center justify-center object-contain rounded-3xl bg-gray-200 w-full"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-contain group-hover:scale-125 transition ease-in-out duration-700 h-full w-full"
                    />
                  </Link>

                  <div className="flex p-2 flex-col">
                    <p className="font-bold line-clamp-2">{card.title}</p>
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
                    <p className="mt-2 text-[1.2rem] font-bold">
                      ${card.price}
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
    </Element>
  );
}

export default Cards;

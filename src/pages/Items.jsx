import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Items() {
  const navigate = useNavigate();
  const { id } = useParams(); // product ID from the route like /items/1
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("Small");
  const [number, setNumber] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.image); // default selected
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return <p className="p-10 text-center">Loading product...</p>;
  }

  const basePrice = product.price;
  const discount = 0.2; // 20% discount
  const finalPrice = basePrice * (1 - discount);
  const totalPrice = finalPrice * number;
  const discountPercent = discount * 100;

  return (
    <div className="w-full py-12 min-h-screen px-4 md:px-12 lg:px-20">
      <div className="w-full md:grid grid-cols-2 gap-12">
        {/* Left section */}
        <div className="w-full md:pb-0 gap-4 pb-6 md:flex md:flex-row-reverse">
          {/* Main Image */}
          <div className="bg-gray-200 mb-4 flex-1 h-[22rem] md:h-full flex items-center justify-center rounded-3xl">
            <img
              className="object-contain h-full"
              src={selectedImage}
              alt={product.title}
            />
          </div>

          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4">
            {[product.image, product.image, product.image].map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`w-full group p-2 h-35 md:h-full md:w-30 lg:w-32 rounded-3xl bg-gray-200 cursor-pointer ${
                  selectedImage === img
                    ? "border-2 border-black"
                    : "border-2 border-transparent"
                }`}
              >
                <img
                  className="w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out object-contain"
                  src={img}
                  alt={`thumb-${index}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="w-full h-full">
          {/* Title */}
          <h1 className="text-3xl mb-4 font-extrabold font-[Montserrat]">
            {product.title}
          </h1>

          {/* Rating */}
          <Rating name="User Rating" readOnly value={4} size="medium" />

          {/* Price */}
          <div className="flex gap-4 items-center mt-3">
            <p className="text-3xl font-semibold">${totalPrice.toFixed(2)}</p>
            <p className="text-2xl line-through text-gray-400 font-semibold">
              ${(basePrice * number).toFixed(2)}
            </p>
            <p className="px-4 bg-red-100 flex items-center justify-center rounded-2xl text-red-500 font-semibold text-sm">
              -{discountPercent}%
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-500 my-5 leading-relaxed text-[.95rem]">
            {product.description}
          </p>
          <hr className="my-6 text-gray-300" />

          {/* Sizes */}
          <div>
            <p className="text-gray-600 font-semibold text-[.9rem]">
              Choose Size
            </p>
            <div className="flex py-4 gap-4">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-2 px-4 rounded-3xl cursor-pointer transition-all duration-200 ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="py-6 flex gap-4">
            <div className="flex bg-gray-200 w-32 h-12 rounded-3xl items-center px-4 justify-between text-2xl text-gray-700">
              <p
                className="text-3xl cursor-pointer select-none"
                onClick={() => setNumber((n) => Math.max(1, n - 1))}
              >
                -
              </p>
              <p className="text-lg">{number}</p>
              <p
                className="text-3xl cursor-pointer select-none"
                onClick={() => setNumber((n) => n + 1)}
              >
                +
              </p>
            </div>
            <button
              onClick={() => addToCart(product, number, selectedSize)}
              className="bg-black flex-1 h-12 rounded-3xl text-white font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;

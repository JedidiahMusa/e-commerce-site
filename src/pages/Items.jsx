import jorts from "../assets/jorts.png";
import Rating from "@mui/material/Rating";

function Items() {
  return (
    <div className="w-full pt-10 min-h-screen px-4 md:px-12 lg:px-16">
      <div className="w-full gap-8 md:grid grid-cols-2 ">
        {/**left secition */}
        <div className="w-full md:pb-0 gap-4 pb-6 md:flex md:flex-row-reverse">



          <div className="bg-gray-200 mb-4 flex-1 h-[22rem] md:h-full flex items-center justify-center rounded-3xl">
            <img className="object-contain h-full" src={jorts} alt="" />
          </div>


          <div className="h-full gap-4 justify-between flex md:flex-col">
            <div className="w-full p-2 h-35 md:h-full md:w-30 lg:w-32 rounded-3xl bg-gray-200">
              <img className="w-full h-full object-contain" src={jorts} alt="" />
            </div>
            <div className="w-full p-2 h-35 md:h-full md:w-30 lg:w-32 rounded-3xl bg-gray-200">
              <img className="w-full h-full object-contain" src={jorts} alt="" />
            </div>
            <div className="w-full p-2 h-35 md:h-full md:w-30 lg:w-32 rounded-3xl bg-gray-200">
              <img className="w-full h-full object-contain" src={jorts} alt="" />
            </div>
          </div>



        </div>

        {/**right section */}
        <div className="w-full h-full">
          <p className="text-3xl font-extrabold font-[Montserrat]">ONE LIFE BLACK JORTS</p>
          <div></div>
          <p></p>
          <p></p>
          <hr />
          <p></p>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <hr />
          <p></p>
          <div><button></button><button></button><button></button><button></button></div>
          <hr />
          <div>
            <div></div>
            <button></button>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Items;

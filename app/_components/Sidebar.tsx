export default function SideBar() {
  return (
    <div className="mr-6 w-[205px] bg-[#FFFFFF] h-screen px-5 py-9">
      <div className="flex items-center">
        <img className="w-[36px] h-[29px] mr-[8px]" src="NOMNOM.png" />
        <div>
          <div className="font-semibold">NomNom</div>
          <div className="text-[12px]">Swift Delivery</div>
        </div>
      </div>

      <div>
        <button className="mt-[40px] mb-[24px] btn  rounded-2xl w-[165px]">
          <img className="w-[22px] h-[22px]" src="FoodMenu.png" />
          <div>Food menu</div>
        </button>
        <button className="btn btn-outline border-white rounded-2xl w-[165px] ">
          <img className="w-[22px]  h-[22px]" src="Truckicon.png" />
          <div>Orders</div>
        </button>
      </div>
    </div>
  );
}

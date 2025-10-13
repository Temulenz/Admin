import { EditButtonDialog } from "./admin/editButtonDialog";

export const FoodCard = () => {
  return (
    <div className="mx-4 relative border rounded-2xl px-4 ">
      <div className="py-4">
        <img className="w-[239px] h-[129px]" src="food.png" alt="Food image" />
        <div className="absolute top-20 right-8.5">
          <EditButtonDialog />
        </div>
      </div>
      <div className="text-4 flex justify-between">
        <div className="text-[#EF4444]">Food.name</div>
        <div>Food.price</div>
      </div>
      <div className="text-4 mb-4 mt-2">Food.description</div>
    </div>
  );
};

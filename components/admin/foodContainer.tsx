"use client";

import { AddDishesTo } from "../AddDish";
import { FoodCard } from "../foodCard";

export const FoodContainer = () => {
  return (
    <div>
      <div className="my-6 p-6 bg-[#FFFFFF] ">
        <div className="text-[20px] mb-[16px] font-semibold">Food.typename</div>
        <div className="flex">
          <AddDishesTo></AddDishesTo>

          <FoodCard></FoodCard>
        </div>
      </div>
    </div>
  );
};

export default FoodContainer;

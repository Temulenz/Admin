"use client";

import { useEffect, useState } from "react";
import { AddDishesTo } from "../AddDish";
import { FoodCard } from "../foodCard";
import { FoodType } from "@/lib/types";
import { CategoryType } from "../dialogDemo";

export const FoodContainer = ({
  foods,
  category,
  refetchFoods,
}: {
  foods: FoodType[];
  category: CategoryType;
  refetchFoods: () => Promise<void>;
}) => {
  return (
    <div>
      <div className="my-6 p-6 bg-[#FFFFFF] ">
        <div className="text-[20px] mb-[16px] font-semibold">
          {category.name}
        </div>
        <div className="flex">
          <AddDishesTo
            categoryId={category._id}
            refetchFoods={refetchFoods}
          ></AddDishesTo>

          {foods.map((food: FoodType) => (
            <FoodCard
              key={food._id}
              comment={food.ingredients}
              image={food.imageUrl}
              name={food.name}
              price={food.price}
            ></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodContainer;

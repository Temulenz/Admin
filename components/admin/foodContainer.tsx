"use client";

import { useEffect, useState } from "react";
import { AddDishesTo } from "../AddDish";
import { FoodCard } from "../foodCard";
type Food = {
  name: string;
  price: number;
  ingredients: string;
  image: string;
};

export const FoodContainer = () => {
  const [food, setFood] = useState<Food[]>([]);
  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/api/addDish");
    const responseData = await result.json();

    const { data } = responseData;

    setFood(data);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <div className="my-6 p-6 bg-[#FFFFFF] ">
        <div className="text-[20px] mb-[16px] font-semibold">Food.typename</div>
        <div className="flex">
          <AddDishesTo></AddDishesTo>

          {food.map((dish, index) => (
            <FoodCard
              key={index}
              comment={dish.ingredients}
              image={dish.image}
              name={dish.name}
              price={dish.price}
            ></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodContainer;

"use client";
import { AddDishesTo } from "@/components/AddDish";
import AdminLayout from "../_components/AdminLayout";
import { FoodCard } from "@/components/foodCard";
import FoodContainer from "@/components/admin/foodContainer";
import HeaderAdmin from "@/components/admin/headerAdmin";
import { useEffect, useState } from "react";

function FoodMenu() {
  type Categor = {
    name: string;
    _id: string;
  };

  const [categories, setCategories] = useState<Categor[]>([]);
  const [foods, setFoods] = useState<any[]>([]);

  const getCategories = async () => {
    const result = await fetch(
      "https://be-seven-blond.vercel.app/api/addCategory"
    );
    const responseData = await result.json();
    console.log({ responseData });
    const { data } = responseData;
    console.log(data);
    setCategories(data);
  };

  const getFoods = async () => {
    const result = await fetch("https://be-seven-blond.vercel.app/api/addDish");
    const responseData = await result.json();
    setFoods(responseData.data);
  };

  useEffect(() => {
    getCategories();
    getFoods();
  }, []);

  console.log(foods);
  return (
    <div className="bg-[#F4F4F5]">
      <AdminLayout>
        <div>
          <HeaderAdmin></HeaderAdmin>
          {categories.map((category) => (
            <FoodContainer
              key={category._id}
              refetchFoods={() => getFoods()}
              foods={foods.filter(
                (food) => food.categoryId._id == category._id
              )}
              category={category}
            ></FoodContainer>
          ))}
        </div>
      </AdminLayout>
    </div>
  );
}

export default FoodMenu;

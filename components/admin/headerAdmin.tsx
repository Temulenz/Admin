"use client";

import FoodMenu from "@/app/foodmenu/page";
import { FoodCard } from "../foodCard";
import FoodContainer from "./foodContainer";
import PlusButton from "./plusButton";

import { ChangeEvent, useEffect, useState } from "react";

export const HeaderAdmin = () => {
  type Categor = {
    name: string;
    _id: string;
  };

  const [categories, setCategories] = useState<Categor[]>([]);

  const deleteCategories = async (_id: string) => {
    await fetch("https://be-seven-blond.vercel.app/api/addCategory", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: _id,
      }),
    });
    getCategories();
  };

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

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div className="bg-[#FFFFFF] p-6 ">
        <div className="text-[20px] font-bold  mb-[16px]">Dishes category</div>
        <div className="flex">
          <div className="flex gap-2">
            {categories.map((categor, index) => (
              <div key={index}>
                <div className="flex items-center relative justify-between rounded-4xl mr-2 py-2 pl-4 pr-2 border-2 ">
                  <p className="mr-2">{categor.name}</p>
                  <p className="btn rounded-2xl btn-xs">112</p>
                  <button
                    className="btn btn-xs btn-circle ml-2 bg-white  "
                    onClick={() => deleteCategories(categor._id)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <PlusButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;

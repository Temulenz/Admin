"use client";

import PlusButton from "./plusButton";

import { ChangeEvent, useEffect, useState } from "react";

export const HeaderAdmin = () => {
  type Categor = {
    name: string;
  };

  const [categories, setCategories] = useState<Categor[]>([]);
  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/api/addCategory");
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
            {categories.map((categor) => (
              <button className="flex items-center justify-between rounded-4xl mr-2 py-2 px-4 border-2 ">
                <p className="mr-2">{categor.name}</p>
                <p className="btn rounded-2xl btn-xs">112</p>
              </button>
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

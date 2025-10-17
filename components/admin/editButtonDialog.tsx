"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useEffect, useState } from "react";

export type CategoryType = {
  name: string;
  _id: string;
};

export const EditButton = () => {
  type Food = {
    name: string;
    _id: string;
    ingredients: string;
    price: number;
    image: File;
  };

  const [image, setImage] = useState<File | undefined>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [ingredients, setIngredients] = useState<string>("");
  const [foods, setFoods] = useState<Food[]>([]);

  const addFoodHandler = async () => {
    if (!name || !price || !image || !ingredients) {
      alert("All fields are required");
      return;
    }

    const form = new FormData();

    form.append("name", name);
    form.append("price", String(price));
    form.append("ingredients", ingredients);
    form.append("image", image); // File object
  };

  const getFoods = async () => {
    const result = await fetch("http://localhost:4000/api/addDish");
    const data = await result.json();
    setFoods(data.data);
  };

  const deleteFood = async (_id: string) => {
    try {
      const response = await fetch("http://localhost:4000/api/addDish", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: _id }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Food Deleted");
      } else {
        alert(data.error || "Cant food delete");
      }
    } catch (error) {
      alert("Error");
    }
    getFoods();
  };

  useEffect(() => {
    getFoods();
  }, []);

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };
  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };
  const ingredientsChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIngredients(e.target.value);
  };

  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <div className="btn btn-circle   ml-[97px] mt-[62px]">
              <img
                src="plus.svg
        "
              />
            </div>
          </DialogTrigger>
          <DialogContent className="w-[460px]">
            <DialogHeader>
              <DialogTitle>Dishes Info</DialogTitle>
            </DialogHeader>

            <div className="grid gap-3">
              <Label htmlFor="name-1">Dish name</Label>
              <Input
                placeholder="Type food name"
                id="name"
                name="name"
                value={name}
                onChange={nameChangeHandler}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="name-1">Dish category</Label>
              <Input
                placeholder="Type food name"
                id="name"
                name="name"
                value={name}
                onChange={nameChangeHandler}
              />
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Ingredients</Label>
                <Textarea
                  className="h-[90px]"
                  placeholder="List ingredients... "
                  id="ingredients"
                  name="ingredients"
                  value={ingredients}
                  onChange={ingredientsChangeHandler}
                />
              </div>
            </div>

            <div className="grid gap-3">
              <Label>Price</Label>
              <Input
                placeholder="Enter price ..."
                id="price"
                name="price"
                value={price}
                type="number"
                onChange={priceChangeHandler}
              />
            </div>

            <div className="items-center   gap-3">
              <Label className="py-4" htmlFor="picture">
                Food image
              </Label>
              <Input
                className="w-[414px]  h-[138px]"
                id="picture"
                type="file"
                onChange={fileChangeHandler}
              />
            </div>

            <div className="flex justify-between">
              {foods.map((food) => (
                <div key={food._id}>
                  <button
                    onClick={() => deleteFood(food._id)}
                    type="button"
                    className="outline-solid outline-red-300 rounded py-2 px-4"
                  >
                    <img src="trash.svg" />
                  </button>
                </div>
              ))}

              <button
                className="py-2 px-4 bg-black rounded"
                onClick={addFoodHandler}
                type="button"
              >
                <p className="text-white">Save changes</p>
              </button>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

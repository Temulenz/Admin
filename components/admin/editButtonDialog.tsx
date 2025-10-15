"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useEffect, useState } from "react";

export const EditButton = () => {
  const [image, setImage] = useState<File | undefined>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [ingredients, setIngredients] = useState<string>("");

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

    try {
      const response = await fetch("http://localhost:4000/api/addDish", {
        method: "DELETE",
        body: form,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Food created successfully!");
        setName("");
        setPrice(0);
        setImage(undefined);
        setIngredients("");
      } else {
        alert(data.error || "Failed to create food");
      }
    } catch (error) {
      alert("Failed to create food");
    }
  };
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
              <button
                type="button"
                className="outline-solid outline-red-300 rounded py-2 px-4 "
              >
                <img src="trash.svg" />
              </button>

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

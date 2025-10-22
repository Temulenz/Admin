"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogFooter,
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

export const AddDishButton = ({
  categoryId,
  refetchFoods,
}: {
  categoryId: string;
  refetchFoods: () => Promise<void>;
}) => {
  const [image, setImage] = useState<File | undefined>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [ingredients, setIngredients] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const addFoodHandler = async () => {
    if (!name || !price || !image || !ingredients) {
      alert("All fields are required");
      return;
    }

    const form = new FormData();

    form.append("name", name);
    form.append("price", String(price));
    form.append("ingredients", ingredients);
    form.append("image", image);
    form.append("categoryId", categoryId);

    try {
      const response = await fetch(
        "https://be-seven-blond.vercel.app/api/addDish",
        {
          method: "POST",
          body: form,
        }
      );

      const data = await response.json();
      if (response.ok) {
        await refetchFoods();
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
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
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
            <div className="btn btn-circle btn-secondary  ml-[97px] mt-[62px]">
              <img
                src="plus.svg
        "
              />
            </div>
          </DialogTrigger>
          <DialogContent className="w-[460px] h-[592px]">
            <DialogHeader>
              <DialogTitle>Dishes Info</DialogTitle>
            </DialogHeader>
            <div className="flex justify-between items-center">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Food name</Label>
                <Input
                  className="w-[194px]"
                  placeholder="Type food name"
                  id="name"
                  name="name"
                  value={name}
                  onChange={nameChangeHandler}
                />
              </div>
              <div className="grid gap-3">
                <Label>Food price</Label>
                <Input
                  placeholder="Enter price ..."
                  id="price"
                  name="price"
                  value={price}
                  type="number"
                  onChange={priceChangeHandler}
                />
              </div>
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

            <div className="items-center   gap-3 relative">
              <Label className="py-4" htmlFor="picture">
                Food image
              </Label>
              <div className="w-[414px] border flex justify-center items-center h-[138px]">
                Choose a file or drag & drop it here
              </div>
              <Input
                className="w-[414px]  h-[138px] absolute  inset-0 opacity-0  "
                id="picture"
                type="file"
                onChange={fileChangeHandler}
              />

              {previewUrl && (
                <div className="mt-2">
                  <img
                    src={previewUrl}
                    alt="Selected food"
                    className="w-full h-[180px] object-cover rounded border"
                  />
                </div>
              )}
            </div>

            <DialogFooter>
              <Button onClick={addFoodHandler} type="button">
                Add dish
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

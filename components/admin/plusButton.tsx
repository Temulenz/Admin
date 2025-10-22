"use client";

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
import { Button } from "@/components/ui/button";

import { ChangeEvent, useState, useEffect } from "react";

export const PlusButton = () => {
  const [newCategory, setNewCategory] = useState<string | undefined>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const newCategoryNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };
  const createCategoryHandler = async () => {
    await fetch("https://be-seven-blond.vercel.app/api/addCategory", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newCategory,
      }),
    });
    setModalOpen(false);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="btn btn-circle btn-secondary  ">
            <img src="plus.svg" />
          </div>
        </DialogTrigger>
        <DialogContent className="p-6">
          <DialogHeader>
            <DialogTitle>Add new category</DialogTitle>
          </DialogHeader>

          <div className="gap-3">
            <Label htmlFor="name-1 ">Category name</Label>
            <Input
              className="px-3 py-2 mt-2"
              placeholder="Type food name"
              id="name-1"
              name="name"
              onKeyDown={(e) =>
                e.key === "Enter" && (createCategoryHandler(), alert("orloo"))
              }
              onChange={newCategoryNameChangeHandler}
            />
          </div>

          <DialogFooter>
            <Button onClick={createCategoryHandler} type="button">
              Add category
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlusButton;

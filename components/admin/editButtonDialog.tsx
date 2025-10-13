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
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import EditButtonDropDown from "./editButtonDropDown";

export function EditButtonDialog() {
  const [pev, setPev] = useState("");
  const handleonimage = (e: any) => {
    const file = e.target.files[0];
    const filepev = URL.createObjectURL(file);
    setPev(filepev);
  };

  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <div className="btn btn-circle btn-lg btn-outline ">
              <img src="plus.svg" />
            </div>
          </DialogTrigger>
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>Dishes Info</DialogTitle>
            </DialogHeader>

            <div className="gap-3 flex">
              <Label className="pr-4 ">Dish name</Label>
              <Input placeholder="Enter price ..." name="username" />
            </div>

            <div className="flex gap-3">
              <Label>Dish category</Label>
              <EditButtonDropDown />
            </div>

            <div className="flex gap-4">
              <Label htmlFor="name-1">Ingredients</Label>
              <Textarea
                className="h-[90px]"
                placeholder="List ingredients... "
                id="name-1"
              />
            </div>

            <div className="flex gap-3">
              <Label>Dish category</Label>
              <Input
                placeholder="Enter price ..."
                id="username-1"
                name="username"
              />
            </div>

            <div className="flex gap-4">
              <Label htmlFor="name-1">Food image</Label>
              <div>
                <input
                  className="w-[414px]  h-[138px] border"
                  onChange={(e) => {
                    handleonimage(e);
                  }}
                  type="file"
                />
                <img src={pev}></img>
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Add dish</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}

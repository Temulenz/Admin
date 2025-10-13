import { Dialog } from "@radix-ui/react-dialog";
import { AddDishButton } from "./dialogDemo";

export function AddDishesTo() {
  return (
    <div className="w-[235px] h-[241px] border border-red-600 border-dashed">
      <AddDishButton></AddDishButton>
      <div className="flex items-center justify-center mt-7 ">
        Add new Dish To Salads
      </div>
    </div>
  );
}

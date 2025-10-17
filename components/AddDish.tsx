import { Dialog } from "@radix-ui/react-dialog";
import { AddDishButton } from "./dialogDemo";

export function AddDishesTo({
  categoryId,
  refetchFoods,
}: {
  categoryId: string;
  refetchFoods: () => Promise<void>;
}) {
  return (
    <div className="w-[235px] h-[241px] border border-red-600 border-dashed">
      <AddDishButton
        categoryId={categoryId}
        refetchFoods={refetchFoods}
      ></AddDishButton>
      <div className="flex items-center justify-center mt-7 ">
        Add new Dish To Salads
      </div>
    </div>
  );
}

import { EditButton } from "./admin/editButtonDialog";

export const FoodCard = ({
  image,
  name,
  price,
  comment,
}: {
  image: string;
  price: number;
  comment: string;
  name: string;
}) => {
  return (
    <div className="mx-2 relative border rounded-2xl px-4 ">
      <div className="py-4">
        <img className="w-[239px] h-[129px]" src={image} alt="Food image" />
        <div className="absolute top-7 right-8.5">
          <EditButton />
        </div>
      </div>
      <div className="text-4 flex justify-between">
        <div className="text-[#EF4444]">{name}</div>
        <div>{price}</div>
      </div>
      <div className="text-4 mb-4 mt-2">{comment}</div>
    </div>
  );
};

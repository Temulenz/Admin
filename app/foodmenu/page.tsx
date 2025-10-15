import { AddDishesTo } from "@/components/AddDish";
import AdminLayout from "../_components/AdminLayout";
import { FoodCard } from "@/components/foodCard";
import FoodContainer from "@/components/admin/foodContainer";
import HeaderAdmin from "@/components/admin/headerAdmin";

function FoodMenu() {
  return (
    <div className="bg-[#F4F4F5]">
      <AdminLayout>
        <div>
          <HeaderAdmin></HeaderAdmin>
          <FoodContainer></FoodContainer>
          <FoodContainer></FoodContainer>
          <FoodContainer></FoodContainer>
          <FoodContainer></FoodContainer>
          <FoodContainer></FoodContainer>
        </div>
      </AdminLayout>
    </div>
  );
}

export default FoodMenu;

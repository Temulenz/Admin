import { ReactNode } from "react";
import Profile from "./Header";
import SideBar from "./Sidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex mr-10">
      <SideBar></SideBar>
      <div className="w-screen">
        {" "}
        <Profile></Profile>
        {children}
      </div>
    </div>
  );
}

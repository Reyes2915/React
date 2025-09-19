import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { Link, useLocation } from "react-router";
import { NavigationMenuList } from "../navigation-menu";
import { cn } from "@/lib/utils";

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive=(path:string)=>{
    return path===pathname;
  }
  return (
    <NavigationMenu className="py-5">
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink 
          className={
            cn(isActive('/')&& "bg-slate-200 ",'p-2 rounded-md')} asChild>
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink 
          className={cn(isActive('/search')&& "bg-slate-200 ",'p-2 rounded-md')} asChild>
            <Link to="/search">Buscar Superhéroes</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

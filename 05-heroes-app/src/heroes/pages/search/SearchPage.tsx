import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadCrumbs } from "@/components/ui/custom/CustomBreadCrumbs";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchHeroesAction } from "@/heroes/actions/search-heros.action";
import { HeroGrid } from "@/heroes/components/HeroGrid";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();


  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;


  const {data:heroes=[]}= useQuery({
    queryKey: ['search', { name,strength }],
    queryFn: () => searchHeroesAction({ name,strength }),
    staleTime:1000*60*5
  });
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de Superhéroes"
        description="Descubre,explora y administra super héroes y villanos"
      ></CustomJumbotron>

      <CustomBreadCrumbs
        currentPage="Buscador de Heroes"
       /*  breadcrumbs={[
          {
            label: "Home",
            to: "/",
          },
          {
            label: "Home1",
            to: "/",
          },
          {
            label: "Home2",
            to: "/",
          },
          {
            label: "Home3",
            to: "/",
          },
        ]} */
      ></CustomBreadCrumbs>

       <HeroStats />

      {/* Filter and search */}
      <SearchControls />

      {/*  */}

      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;

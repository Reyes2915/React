import { Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/ui/custom/CustomPagination";
import { CustomBreadCrumbs } from "@/components/ui/custom/CustomBreadCrumbs";
import { useSearchParams } from "react-router";
import { use, useMemo } from "react";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {favoriteCount,favorites}=use(FavoriteHeroContext);

  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const category = searchParams.get("category") ?? "all";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  /* const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all"); */

  /* useEffect(()=>{
    getHeroesByPage().then(heroes=>{
      console.log({heroes});
    });
  },[]); */

  /* const { data:heroesResponse } = useQuery({
    queryKey: ['heroes',{page,limit}],
    queryFn: () => getHeroesByPageAction(+page,+limit),
    staleTime: 1000 * 60 * 5, //5 minutos
  }); */

  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);

  const { data: summary } = useHeroSummary();



  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de Superhéroes"
          description="Descubre,explora y administra super héroes y villanos"
        ></CustomJumbotron>

        <CustomBreadCrumbs currentPage="Super Heroes"></CustomBreadCrumbs>

        <HeroStats></HeroStats>

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() => {
                setSearchParams((prev) => {
                  prev.set("tab", "all");
                  prev.set("category", "all");
                  prev.set("page", "1");
                  return prev;
                });
              }}
            >
              All Characters ({summary?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => {
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  prev.set("category", "favorites");

                  return prev;
                });
              }}
            >
              <Heart className="h-4 w-4" />
              Favorites ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() => {
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  prev.set("category", "hero");
                  prev.set("page", "1");

                  return prev;
                });
              }}
            >
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => {
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  prev.set("category", "villain");
                  prev.set("page", "1");

                  return prev;
                });
              }}
            >
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <HeroGrid heroes={heroesResponse?.heroes ?? []}></HeroGrid>
          </TabsContent>
          <TabsContent value="favorites">
            <HeroGrid heroes={favorites}></HeroGrid>
          </TabsContent>
          <TabsContent value="heroes">
            <HeroGrid heroes={heroesResponse?.heroes ?? []}></HeroGrid>
          </TabsContent>
          <TabsContent value="villains">
            <HeroGrid heroes={heroesResponse?.heroes ?? []}></HeroGrid>
          </TabsContent>
        </Tabs>

        {
          selectedTab !== 'favorites' &&(
            
            <CustomPagination totalPages={8}></CustomPagination>
          )
        }

      </>
    </>
  );
};

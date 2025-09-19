import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Zap } from "lucide-react";
import { HeroStatCard } from "./HeroStatCard";

import { useHeroSummary } from "../hooks/useHeroSummary";
import { FavoriteHeroContext } from "../context/FavoriteHeroContext";
import { use } from "react";

export const HeroStats = () => {
  const {data:summary}= useHeroSummary();
  const {favoriteCount}=use(FavoriteHeroContext);

if(!summary){
  return <div>Cargando...</div>
}

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Characters
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent></CardContent>
      </Card>

      <HeroStatCard
        title="Total de personajes"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            {summary?.heroCount}
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {summary?.villainCount}
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        title="Favoritos"
        icon={<Heart className="h-4 w-4 text-muted-foreground"></Heart>}
      >
        <div className="text-2xl font-bold text-red-600">{favoriteCount}</div>
        <p className="text-xs text-muted-foreground">
          {((favoriteCount / summary.totalHeroes) * 100).toFixed(2)}% of total
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Fuerte"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summary?.strongestHero.alias}</div>
        <p className="text-xs text-muted-foreground">
          Strength: {summary?.strongestHero.strength}
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Favoritos"
        icon={<Heart className="h-4 w-4 text-muted-foreground"></Heart>}
      >
        <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
        <p className="text-xs text-muted-foreground">
          Intelligence: {summary?.smartestHero.intelligence}
        </p>
      </HeroStatCard>

      {/* 

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Strongest</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">Superman</div>
              <p className="text-xs text-muted-foreground">Strength: 10/10</p>
            </CardContent>
          </Card>

          < */}
    </div>
  );
};

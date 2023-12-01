import React from "react";
import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/header";
import { getAnimeResponse, getNestedAnimeresponse, reproduce } from "../lib/api-lib";

export default async function Home(): Promise<JSX.Element> {
  // const response: Response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const anime: any = await response.json();

  const anime = await getAnimeResponse('top/anime', 'limit=8')
  let recommendAnime = await getNestedAnimeresponse('recommendations/anime', 'entry')
   recommendAnime = reproduce(recommendAnime, 8)

  return (
    <>
    <section>
      <Header title="paling populer" linkHref="/populer" linkTitle="see all" />
      <AnimeList animeAPI={anime}/>    
    </section>
    <section>
      <Header title="Recomendation" />
      <AnimeList animeAPI={recommendAnime}/>    
    </section>
    </>
  );
}

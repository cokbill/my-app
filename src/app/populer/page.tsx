"use client";
import React, { FC, useState, useEffect, Suspense } from "react";
import Pagemenu from "../components/utils/Pagemenu";
import Pagination from "../components/utils/Pagination";
import AnimeList from "../components/AnimeList";
import Loading from "./loading";
import { getAnimeResponse } from "@/lib/api-lib";

const Page: FC = () => {
  const [page, Setpage] = useState<number>(1);
  const [anime, setAnime] = useState<any>([]);

  const fetchAnime = async (): Promise<any> => {
    // const response: Response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    // );
    // const data: any = await response.json();

    const data = await getAnimeResponse('top/anime', `page=${page}`)
    setAnime(data);
  };

  useEffect(() => {
    fetchAnime();
  }, [page]);
  return (
    <>
      <Pagemenu title={`Top Populer #${page}`} />
      <Suspense fallback={<Loading />}>
        <AnimeList animeAPI={anime} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Pagination page={page} setPage={Setpage} lastPage={anime.pagination?.last_visible_page} />
      </Suspense>
    </>
  );
};

export default Page;

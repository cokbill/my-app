import React, {FC, Suspense,} from 'react'
import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/header";
import { getAnimeResponse } from '@/lib/api-lib';
import Loading from '@/app/loading';

type paramsProps = {
  params: {
    keyword: string
  }
}
const Page:FC<paramsProps> = async ({params}) => {
  const {keyword} = params
  const decodedKeyword = decodeURI(keyword)
  // const response = await fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`)
  // const data:any = await response.json()

  const data = await getAnimeResponse('anime', `q=${keyword}`)
  return (
    <>
    <section>
        <Header title={`search for : ${decodedKeyword}`} />
      <Suspense fallback={<Loading />}>
        <AnimeList animeAPI={data}/>    
      </Suspense>
    </section>
    </>
  )
}

export default Page
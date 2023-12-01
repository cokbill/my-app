import VideoPlayer from "@/app/components/utils/videoPlayer";
import { getAnimeResponse } from "@/lib/api-lib";
import Image from "next/image";
import React, { FC } from "react";

type paramsProps = {
  params: {
    id: string;
  };
};

const page: FC<paramsProps> = async ({ params }) => {
  const id = params.id;

  const Anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="pt-4 px-6">
        <h3 className="text-2xl tracking-wide">
          {Anime.data.title} - {Anime.data.year}
        </h3>
      </div>
      <div className="flex pt-4 px-6 gap-2 overflow-x-auto">
        <div className="flex flex-col w-36 justify-center items-center rounded border border-black p-2 hover:text-white hover:bg-red-700 transition-all">
          <h3 className="text-xl">RANK</h3>
          <p className="text-lg">{Anime.data.rank}</p>
        </div>
        <div className="flex flex-col w-36 justify-center items-center rounded border border-black p-2 hover:text-white hover:bg-red-700 transition-all">
          <h3 className="text-xl">Score</h3>
          <p className="text-lg">{Anime.data.score}</p>
        </div>
        <div className="flex flex-col w-36 justify-center items-center rounded border border-black p-2 hover:text-white hover:bg-red-700 transition-all">
          <h3 className="text-xl">Members</h3>
          <p className="text-lg">{Anime.data.members}</p>
        </div>
        <div className="flex flex-col w-36 justify-center items-center rounded border border-black p-2 hover:text-white hover:bg-red-700 transition-all">
          <h3 className="text-xl">Season</h3>
          <p className="text-lg">{Anime.data.season}</p>
        </div>
        <div className="flex flex-col w-36 justify-center items-center rounded border border-black p-2 hover:text-white hover:bg-red-700 transition-all">
          <h3 className="text-xl">Year</h3>
          <p className="text-lg">{Anime.data.year}</p>
        </div>
      </div>
      <div className="pt-4 px-6 flex sm:flex-nowrap flex-wrap gap-2 mb-10">
        <Image
          src={Anime.data.images.webp.image_url}
          width={350}
          height={350}
          alt={Anime.data.images.jpg.image_url}
          className="w-full object-cover rounded"
        />
        <p className="text-xl text-justify">{Anime.data.synopsis}</p>
      </div>
      <div className="">
        <VideoPlayer videoId={Anime.data.trailer?.youtube_id} />
      </div>
    </>
  );
};

export default page;

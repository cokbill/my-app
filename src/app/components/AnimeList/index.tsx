import Image from "next/image";
import Link from "next/link";

type Anime = {
  mal_id: number;
  title: string;
  type: string;
  rating: string;
  images: {
    webp: {
        image_url: string;
    };
  };
  duration: string;
};

type AnimeListProps = {
  animeAPI: {
    data: Anime[];
  };
};

export default function AnimeList({ animeAPI }: AnimeListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 px-4">
      {animeAPI.data?.map((anime: Anime) => {
        const { mal_id, title, type, rating, images, duration } = anime;
        return (
          <div key={mal_id} className="border border-slate-200 shadow-xl rounded-lg overflow-hidden transition-all">
            <Link href={`anime/${mal_id}`}>
            <Image
              src={images.webp.image_url}
              alt="Picture of the author"
              width={350}
              height={350}
              className="w-full max-h-64 object-contain"
              priority
            />
            <h3 className="text-md lg:text-lg font-bold px-3 pt-2">{title}</h3>
            </Link>
            <p className="font-md text-sm font-semibold px-3">{type}</p>
            <p className="font-md text-sm font-medium px-3">{rating}</p>
            <p className="font-light text-xs px-3">{duration}</p>
            <Link href={`anime/${mal_id}`}>
              <button className="bg-red-500 hover:bg-red-700 text-white text-sm font-medium py-1 px-3 rounded-md mx-3 my-2">
                details
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

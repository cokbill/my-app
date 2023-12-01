import { Skeleton } from "@/app/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 px-4 mt-5">
      {Array.from({length : 8}, (_, i) => i + 1).map((id: any) => {
        return (
          <div key={id} className="border border-slate-100 shadow-xl rounded-lg overflow-hidden transition-all p-2 h-[370px]">
            <Skeleton className="mb-3 w-full h-64 bg-slate-300"></Skeleton>
            <Skeleton className="mb-2 w-full h-4 bg-slate-300"></Skeleton>
            <Skeleton className="mb-2 w-[10%] h-3 bg-slate-300"></Skeleton>
            <Skeleton className="mb-2 w-1/2 h-[10px] bg-slate-300">
            </Skeleton>
            <Skeleton className="mb-[7px] w-[20%] h-2 bg-slate-300">
            </Skeleton>
          </div>
        );
      })}
    </div>
    )
}
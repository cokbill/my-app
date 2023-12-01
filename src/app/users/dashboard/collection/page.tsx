import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/dashboard/header";

export default function page() {
  return (
    <section className="mt-4">
      <Header title="My Collection" />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mx-3 mt-5">
        <Link href="" className="border border-slate-200 relative">
          <Image src="" width={100} height={100} alt="" className="w-full" />
          <div className="w-full bg-red-600 flex justify-center items-center absolute bottom-0 h-16">
            <h5 className="text-lg">ini adalah judul</h5>
          </div>
        </Link>
        <Link href="" className="border border-slate-200 relative">
          <Image src="" width={100} height={100} alt="" className="w-full" />
          <div className="w-full bg-red-600 flex justify-center items-center absolute bottom-0 h-16">
            <h5 className="text-lg">ini adalah judul</h5>
          </div>
        </Link>
        <Link href="" className="border border-slate-200 relative">
          <Image src="" width={100} height={100} alt="" className="w-full" />
          <div className="w-full bg-red-600 flex justify-center items-center absolute bottom-0 h-16">
            <h5 className="text-lg">ini adalah judul</h5>
          </div>
        </Link>
      </div>
    </section>
  );
}

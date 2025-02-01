'use client';
import Header from "@/components/ui/Header";


export default function Main() {
  return (
    <div>
      <Header></Header>
      <div className="flex p-10">
        <div className="flex-shrink-0">
          <img src="https://scrimba.com/links/travel-journal-japan-image-url" className=" w-28 rounded-md size-40" />
        </div>
        <div className="pl-5">
          <div className="flex text-sm">
            <p>Japan</p>
            <p className="pl-2">View on Google Maps</p>
          </div>
          <h2 className="text-2xl font-bold">Mount Fuji</h2>
          <p className="mt-3 font-bold text-xs">12 Jan, 2021 - 24 Jan, 2021</p>
          <p className="mt-1 max-w-[300px] text-sm">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
      </div>
    </div >
  );
}

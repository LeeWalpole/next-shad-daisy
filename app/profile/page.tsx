import Link from "next/link"
import { HeartIcon } from "@heroicons/react/24/outline"

import Swiper from "@/components/Swiper"

// import Carousel from '$lib/components/Carousel.svelte';
const images = [
  "https://via.placeholder.com/100x100.png?text=Image+1",
  "https://via.placeholder.com/400x500.png?text=Image+2",
  "https://via.placeholder.com/400x500.png?text=Image+3",
]

export default function IndexPage() {
  return (
    <section className="feed m-auto flex flex-row gap-7 sm:w-96">
      <article className="w-full bg-slate-900">
        <figure className="relative aspect-[4/5] w-full bg-red-200">
          <Swiper
            images={images}
            imageClassName="object-fill w-full h-full aspect-[4/5]"
          />
        </figure>
        <section className="relative z-10 mt-[-20px] grid grid-cols-[auto,1fr,auto] gap-3.5 overflow-visible rounded-t-[20px] bg-slate-950 px-3.5">
          <div className="avatar z-10 mt-[-25px]">
            <div className="ring-offset-base-100 h-28 w-28 rounded-full ring ring-primary ring-offset-2">
              <img
                src="https://via.placeholder.com/200x200.png?text=Avatar"
                alt="Alt"
              />
            </div>
          </div>
          <header className="flex flex-col items-start justify-center">
            <h5 className="text-md">Display Name</h5>
            <p className="text-xs">@username</p>
          </header>
          <header className="flex items-center justify-end gap-3.5">
            {/* <Icon src={Heart} outline className="h-8 w-8" /> */}
          </header>
        </section>
        <div className="cta-buttons flex items-center justify-between p-3.5">
          <button className="btn btn-primary">Primary</button>
          <div className="flex gap-3">
            <a href="#my-modal-1" className=" btn btn-square">
              1
            </a>
            <button className="btn btn-square">2</button>
          </div>
        </div>
      </article>
    </section>
  )
}

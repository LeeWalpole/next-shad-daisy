import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Swiper from "@/components/Swiper"
import { Icons } from "@/components/icons"

// import Carousel from '$lib/components/Carousel.svelte';
const images = [
  "https://github.com/shadcn.png",
  "https://via.placeholder.com/400x500.png?text=Image+2",
  "https://via.placeholder.com/400x500.png?text=Image+3",
]

export default function IndexPage() {
  return (
    <section className="feed m-auto flex flex-row gap-7 sm:w-96">
      <article className="w-full ">
        <figure className="relative aspect-[4/5] w-full">
          <Swiper
            images={images}
            imageClassName="object-fill w-full h-full aspect-[4/5]"
          />
        </figure>
        <section className="relative z-10 mt-[-20px] grid grid-cols-[auto,1fr,auto] gap-3.5 overflow-visible rounded-t-[20px] px-3.5">
          <div className="avatar z-10 mt-[-25px]">
            <div className="ring-offset-base-100 h-28 w-28 rounded-full ring ring-primary ring-offset-2">
              <Avatar className="h-28 w-28">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Colm Tuite"
                  className="h-full w-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <header className="flex flex-col items-start justify-center pt-3.5">
            <h5 className="text-lg font-bold">Display Name</h5>
            <p className="text-sm">@username</p>
            <Icons.heart className="h-5 w-5 fill-current" />
            <Icons.heartSolid className="h-5 w-5 fill-current" />
          </header>
          <header className="flex items-center justify-end gap-3.5 pt-3.5">
            <Button variant="secondary">Chat</Button>
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

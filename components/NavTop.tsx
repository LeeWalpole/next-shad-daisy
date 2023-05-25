"use client"

import Link from "next/link"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Icon from "@/components/Icons"
import NavSide from "@/components/NavSide"
import Notifications from "@/components/Notifications"

export default function NavTop() {
  return (
    <header className="fixed top-0 z-40 w-full border-b bg-background">
      <nav className="grid w-full auto-cols-fr grid-cols-3">
        <div className="container flex h-16 w-full items-center  justify-start space-x-4 ">
          <Sheet>
            <SheetTrigger>
              <Icon
                name="chat"
                style="solid"
                className="h-6 w-6 text-blue-500"
              />
            </SheetTrigger>
            <SheetContent position="left" size="default">
              {/* <SheetTitle></SheetTitle> */}
              {/* <SheetDescription>
              </SheetDescription> */}
              <NavSide />
            </SheetContent>
          </Sheet>
        </div>
        <div className="container flex h-16 w-full items-center  justify-center space-x-4 ">
          <Link href="/">
            <Icon name="chat" style="solid" className="h-6 w-6 text-blue-500" />
          </Link>
        </div>
        <div className="container flex h-16 w-full items-center justify-end space-x-4 ">
          <Sheet>
            <SheetTrigger>
              <Icon
                name="chat"
                style="solid"
                className="h-6 w-6 text-blue-500"
              />
            </SheetTrigger>
            <SheetContent>
              {/* <SheetTitle></SheetTitle> */}
              {/* <SheetDescription>
              </SheetDescription> */}
              <Notifications />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

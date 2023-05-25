import { Ref } from "react"
import {
  BeakerIcon as OutlineBeakerIcon,
  ChatBubbleOvalLeftIcon as OutlineChatBubbleOvalLeftIcon,
  CogIcon as OutlineCogIcon,
  HeartIcon as OutlineHeartIcon,
  HomeIcon as OutlineHomeIcon,
  MagnifyingGlassIcon as OutlineMagnifyingGlassIcon,
  PlusCircleIcon as OutlinePlusCircleIcon,
  UserCircleIcon as OutlineUserCircleIcon,
  UserIcon as OutlineUserIcon,
} from "@heroicons/react/24/outline"
import {
  BeakerIcon as SolidBeakerIcon,
  ChatBubbleOvalLeftIcon as SolidChatBubbleOvalLeftIcon,
  CogIcon as SolidCogIcon,
  HeartIcon as SolidHeartIcon,
  HomeIcon as SolidHomeIcon,
  MagnifyingGlassIcon as SolidMagnifyingGlassIcon,
  PlusCircleIcon as SolidPlusCircleIcon,
  UserCircleIcon as SolidUserCircleIcon,
  UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid"

// Define the props for the Icon component
interface IconProps {
  name:
    | "beaker"
    | "heart"
    | "cog"
    | "userCircle"
    | "user"
    | "home"
    | "chatBubbleOvalLeftEllipsis"
    | "plusCircle"
    | "magnifyingGlass"
  style: "solid" | "outline"
  className?: string
  innerRef?: Ref<SVGSVGElement>
}

// Define a mapping of icons based on name and style
const iconMap: Record<
  IconProps["name"],
  Record<IconProps["style"], React.ComponentType<React.SVGProps<SVGSVGElement>>>
> = {
  beaker: {
    solid: SolidBeakerIcon,
    outline: OutlineBeakerIcon,
  },
  heart: {
    solid: SolidHeartIcon,
    outline: OutlineHeartIcon,
  },
  cog: {
    solid: SolidCogIcon,
    outline: OutlineCogIcon,
  },
  userCircle: {
    solid: SolidUserCircleIcon,
    outline: OutlineUserCircleIcon,
  },
  user: {
    solid: SolidUserIcon,
    outline: OutlineUserIcon,
  },
  home: {
    solid: SolidHomeIcon,
    outline: OutlineHomeIcon,
  },
  chat: {
    solid: SolidChatBubbleOvalLeftIcon,
    outline: OutlineChatBubbleOvalLeftIcon,
  },
  plusCircle: {
    solid: SolidPlusCircleIcon,
    outline: OutlinePlusCircleIcon,
  },
  magnifyingGlass: {
    solid: SolidMagnifyingGlassIcon,
    outline: OutlineMagnifyingGlassIcon,
  },
}

// Icon component that renders the appropriate icon based on the props
const Icons: React.FC<IconProps> = ({ name, style, className, innerRef }) => {
  // Get the selected icon component based on name and style
  const SelectedIcon = iconMap[name][style]

  // If the selected icon is not found, log an error and return null
  if (!SelectedIcon) {
    console.error(`Icon "${name}" with style "${style}" not found.`)
    return null
  }

  // Render the selected icon with the provided props
  return <SelectedIcon className={className} ref={innerRef} />
}

export default Icons

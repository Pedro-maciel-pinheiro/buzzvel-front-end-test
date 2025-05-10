import { StaticImageData } from "next/image"

export type MaxWidthProps = {
    className?:string
    children:React.ReactNode
}

export interface companyIconsProps {
    name:string
    href:string
    icon:string | StaticImageData
}

export type NumberOfUsersProps = {
    image:string | StaticImageData
    number:string
    title:string
}

export type UserCommentProps = {
    name: string;
    career: string;
    comment: string;
    imageUrl: string | StaticImageData;
  };


export interface NavBarMenuOption {
  name: string;
  href: string;
}

export interface DropdownProps{
  item:any
  isActive: boolean
  id:string
}

export interface NavBarMenuProps {
  name: string;
  href: string;
  options?: NavBarMenuOption[]; 
}
import { ButtonHTMLAttributes } from "react"

export type TAppButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  className?: string
  loaderColor?: string
}

export type TProduct =  {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}
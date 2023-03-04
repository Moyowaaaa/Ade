import { SetStateAction } from "react"

declare module 'locomotive-scroll'


type componentProps = {
    openMenu:boolean,
    setOpenMenu:React.Dispatch<SetStateAction<boolean | any>>
}


import { ButtonHTMLAttributes } from "react"
import '../styles/button.scss'

type ButonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButonProps) {
  return (
    <button className="button" {... props}/>
  )
}

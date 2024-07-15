import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 max-h-28">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={253} height={144} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-90">
            {link.label}
          </Link>
        ))}
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Resultados"
            variant="btn_dark_green"
          />
        </div>
      </ul>



      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>

  )
}

export default Navbar
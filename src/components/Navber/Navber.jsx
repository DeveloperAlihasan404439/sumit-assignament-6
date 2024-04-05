import Image from "next/image";
import Link from "next/link";
import menu from "../../assets/svg/menu.svg";
import logo from "../../assets/lws-logo-black.svg";
import avatar from "../../assets/svg/avatar.svg";
import shopping from "../../assets/svg/shopping-Cart.svg";
export default function Navber() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      {/* Navbar Start */}
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            width={200}
            height={200}
            src={menu}
            alt="menu"
            className="lg:hidden w-5 h-5"
          />

          <Link href="/">
            <Image
              width={100}
              height={100}
              src={logo}
              alt="menu"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          width={200}
          height={200}
          src={avatar}
          className="hidden lg:block w-[18px] h-[18px]"
          alt="login acount avatar"
        />
        <Image
          width={200}
          height={200}
          src={shopping}
          className="block w-5 h-5"
          alt="shopping cart icon"
        />
      </div>
      {/* Navbar end */}
    </nav>
  );
}

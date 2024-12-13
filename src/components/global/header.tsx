import { Navbar } from "./navbar";
import { NavbarMobile } from "./navbar-mobile";

export function Header() {
    return (
        <section>
            <div>
                <div className="hidden md:hidden xl:flex">
                    <Navbar />
                </div>
                <div className="md:flex xl:hidden">
                    <NavbarMobile />
                </div>
            </div>
            <div className="border border-white/30"></div>
        </section>
    )
}
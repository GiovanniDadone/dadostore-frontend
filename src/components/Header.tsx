import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
    return (
        <div className="border-b-2 border-b-purple-600 py-6 md: border-none">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold tracking-tigh text-purple-600">DadoStore</Link>
                <div className="md:hidden mr-7">
                    <MobileNav/>
                </div>
                <div className="hidden md:block">
                    <MainNav/>
                </div>
            </div>
        </div>
    );
};

export default Header;

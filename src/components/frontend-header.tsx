import { NavLink } from "react-router";

const FrontendHeader = () => {
    return (
        <header className="text-center flex items-center justify-between px-8 py-4">
            <div></div>
            <div>
                <nav>
                    <ul className="flex space-x-20">
                        <li><NavLink to="/" className="py-2.5 inline-block">Home</NavLink></li>
                        <li><NavLink to="/pricing" className="py-2.5 inline-block">Pricing</NavLink></li>
                        <li><NavLink to="/about" className="py-2.5 inline-block">About</NavLink></li>
                        <li><NavLink to="/contact" className="py-2.5 inline-block">Contact</NavLink></li>
                        <li><span className="size-12 bg-gray-200 rounded-lg inline-block"></span></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default FrontendHeader;
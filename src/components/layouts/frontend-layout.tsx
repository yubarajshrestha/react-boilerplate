import { Outlet } from "react-router";
import FrontendFooter from "@/components/frontend-footer";
import FrontendHeader from "@/components/frontend-header";

const FrontendLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <FrontendHeader />
            <Outlet />
            <FrontendFooter />
        </div>
    );
};

export default FrontendLayout;

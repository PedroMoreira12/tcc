import HeaderNavBar from "./HeaderNavBar";
import BodyContent from "./BodyContent";
import ResponsiveAppBar from "./HeaderNavBar";

export default function Layout({ children }) {
    return (
        <>
            <ResponsiveAppBar />
            {children}
        </>
    )
}
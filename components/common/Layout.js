import HeaderNavBar from "./HeaderNavBar";
import BodyContent from "./BodyContent";

export default function Layout({ children }) {
    return (
        <>
            <HeaderNavBar />
            <BodyContent>
                {children}
            </BodyContent>
        </>
    )
}
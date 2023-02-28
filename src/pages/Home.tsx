import { AboutRest } from "../components/About";
import { ContactUs } from "../components/ContactUs";
import { FormContact } from "../components/Form";
import { HomeCarousel } from "../components/HomeCarousel";
import { Info } from "../components/Info";
import { Maps } from "../components/Map";
import { MealList } from "../components/MealList";


export function Home() {
    return <>
        <HomeCarousel />
        <AboutRest />
        <MealList />
        <Maps />
        {/* <Info/>
        <FormContact/> */}
        <ContactUs/>
    </>
}
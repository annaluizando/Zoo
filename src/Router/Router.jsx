import { Route, Routes } from "react-router-dom";
import { AppAnimals} from "../components/AppAnimal/AppAnimal";
import { AppGallery } from "../components/AppGallery/AppGallery";
import AppHome from "../components/AppHome/AppHome";


export const Router = () => {
    return (
    <Routes>
        <Route path="/" element={<AppHome/>}/>
        <Route path="/animals" element={<AppAnimals/>}/>
        <Route path="/gallery" element={<AppGallery/>}/>
    </Routes>

    );
}
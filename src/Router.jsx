import { Route, Routes } from "react-router-dom";
import { AppAnimals} from "./AppAnimal";
import { AppGallery } from "./AppGallery";
import AppHome from "./AppHome";


export const Router = () => {
    return (
    <Routes>
        <Route path="/" element={<AppHome/>}/>
        <Route path="/animals" element={<AppAnimals/>}/>
        <Route path="/gallery" element={<AppGallery/>}/>
    </Routes>

    );
}
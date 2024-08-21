import { Route, createHashRouter, createRoutesFromElements } from "react-router-dom";

import MainPage from "../components/MainPage";
import Signs from "../components/Signs";
import DescriptionPage from "../components/DescriptionPage";


const router = createHashRouter(createRoutesFromElements(
    <Route path="/" element={<MainPage/>}>
        <Route index element={<Signs/>}/>
        <Route path="/:name" element={<DescriptionPage/>}/>
    </Route>
));

export default router;
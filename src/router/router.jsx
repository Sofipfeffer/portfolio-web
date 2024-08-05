import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home.jsx"
import NotFound from "../views/NotFound/NotFound.jsx"
import Contact from "../views/Contact/Contact.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
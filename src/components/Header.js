import { Carousel } from "flowbite-react";

import photo from "../assets/images/photo1.png";
import photoSecond from "../assets/images/photo2.png";

function Header() {
    return (
        <div className="inline-flex h-104 w-full justify-center items-center">
            <Carousel leftControl=" " rightControl=" " indicators={true} slide={true} slideInterval={1750} className="w-72">
                <div><img src={photo} width="290" height="290" /></div>
                <div><img src={photoSecond} width="290" height="290" /></div>
            </Carousel>
            <h1 className="ml-10 text-4xl text-center align-middle">
                Персональное портфолио
                <br />
                Бориса Селезнева
            </h1>
        </div>
    );
}

export default Header;
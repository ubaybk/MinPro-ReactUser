import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <>
        <div className="h-[50px] flex justify-between items-center px-5">
            <img src="./logo.png" alt="" />
            <h1 className="text-[10px] md:text-[16px]">@ 2024 Ubay Media. All Rights Reversved</h1>
            <div className="flex gap-2">
                <a href="https://bootcamp.dibimbing.id/students"><FaLinkedin /></a>
                <a href=""><FaGithubSquare /></a>
                <a href=""><FaInstagramSquare /></a>

            </div>
        </div>
        </>
    )
}

export default Footer
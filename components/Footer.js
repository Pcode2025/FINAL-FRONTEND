import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
    return <>
        <footer className="footer">
            <div className="footersec flex flex-center flex-col gap-2">
                <div className="logo">
                    <img style={{ width: "150px" }} src="/img/logo.png" alt="" />
                </div>
                <ul className="flex gap-2">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/blogs'>Blogs</Link></li>
                    <li><Link href='/gallery'>Gallery</Link></li>
                    <li><Link href='/projects'>Projects</Link></li>
                    <li><Link href='/app'>App</Link></li>
                    <li><Link href='/shop'>Shop</Link></li>
                    <li><Link href='/services'>Services</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                    <li><Link href='/about'>About</Link></li>
                </ul>
                <ul className="hero_social">
                    <li><a target="_blank" href="https://www.linkedin.com/in/rakshithgowdaofficial?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><GrLinkedinOption /></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/my.designnexus?igsh=Z2d5N2Qza3IzaWx1"><IoLogoInstagram /></a></li>
                    <li><a target="_blank" href="https://dribbble.com/Raks025"><LiaBasketballBallSolid /></a></li>
                    <li><a target="_blank" href="https://www.pinterest.com/rakshithgowdamsofficial2025/"><FaPinterest /></a></li>
                    <li><a target="_blank" href="/"><FaGithub /></a></li>
                </ul>
                <div className="copyrights">&copy; 2025 All Rights Reserved By <span>Rakshith</span></div>
            </div>
        </footer>
    </>
}
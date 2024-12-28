import Image from "next/image";
import Link from "next/link";
import {} from "react-icons/fa";
import { FaFacebook, FaYoutube, FaDribbble, FaInstagram, FaTwitter, FaArrowRight } from "react-icons/fa6";
import { Separator } from "../ui/separator";
import SocialList from "../global/social-list";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <Image src="/img/logo.png" alt="logo" width={100} height={100} />
            </span>
          </div>

          <SocialList />
        </div>

        <Separator className="mb-12 bg-accent" />

        <div className="container mx-auto px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-4">About us</h3>
              <p className="text-gray-400 mb-4">
                It all started with a simple idea: one Discord, one goal. A group of streamers came together, not just to share their passion but to
                build something bigger—something that could support, entertain, and inspire. And so, One Kingdom was born: a community where
                creativity thrives, friendships form, and success is something we achieve together.
              </p>
              <Link href="/about" className="flex items-center text-[#00F0FF] hover:underline">
                Read more <FaArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="md:col-span-1 flex flex-col lg:items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Who are we?</h3>
                <ul className="space-y-2 text-gray-400 ">
                  <li>
                    <Link href="/about" className="hover:text-white">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="hover:text-white">
                      what members say
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-1 flex flex-col lg:items-end">
              <div>
                <h3 className="text-xl font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400 ">
                  <li>
                    <Link href="/privacy" className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@onekingdom.net" className="hover:text-white">
                      Email: info@onekingdom.net
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Separator className=" my-4 bg-accent" />
        <div className="md:flex justify-between">
          <p className="t text-sm text-gray-400">Copyright &copy; {currentYear}. All rights reserved.</p>
          <p className="t text-sm text-gray-400">Made by Jochemwhite.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

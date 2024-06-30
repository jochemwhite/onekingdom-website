import Link from "next/link";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className=" bottom-0 w-full static ">
      <hr className="border-accent"/>


      <div className="container flex justify-between items-center my-8">
        <p>Copyright {currentYear} - Designed & Developed by Jochem van der wit</p>

        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;

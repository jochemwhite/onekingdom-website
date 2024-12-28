import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./menu-toggle";
import { Navigation } from "./navigation";
import type { Link } from "@/types/global";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 0px 0px)",

    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

interface HamburgerMenuProps {
  links: Link[];
}

export const HamburgerMenu = ({ links }: HamburgerMenuProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);


  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="h-full flex  flex-col justify-center items-end w-full">
      <MenuToggle toggle={() => toggleOpen()} />
      <motion.div className="absolute top-0 right-0 bg-primary h-screen w-full" variants={sidebar}>
        <Navigation Links={links} toggleMenu={toggleOpen} />
      </motion.div>
    </motion.nav>
  );
};

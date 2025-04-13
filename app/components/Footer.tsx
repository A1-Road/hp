import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 text-zinc-400 md:mb-0">
            &copy; 2024 A1Labs. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              <SiFacebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              <SiX className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              <SiInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

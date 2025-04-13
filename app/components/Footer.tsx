import Link from "next/link";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-10 text-zinc-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Logo and Brief Description */}
          <div>
            <Link
              href="/"
              className="mb-4 inline-block text-2xl font-bold text-white"
            >
              A1 Labs
            </Link>
            <p className="mb-4 text-sm">
              ブロックチェーン技術とAIで実社会の課題解決を目指します。
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/A1-Road"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
                aria-label="GitHub"
              >
                <SiGithub size={20} />
              </a>
              {/* Removed placeholder Twitter/LinkedIn */}
              <Link href="/contact" legacyBehavior>
                <a
                  className="text-zinc-400 transition-colors hover:text-white"
                  aria-label="Contact"
                >
                  <Mail size={20} />
                </a>
              </Link>
            </div>
          </div>

          <div>
            <h5 className="mb-4 font-semibold text-white">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="hover:text-white">会社概要</a>
                </Link>
              </li>
              <li>
                <Link href="/#services" legacyBehavior>
                  <a className="hover:text-white">事業内容</a>
                </Link>
              </li>
              <li>
                <Link href="/achievements" legacyBehavior>
                  <a className="hover:text-white">実績</a>
                </Link>
              </li>
              <li>
                <Link href="/news" legacyBehavior>
                  <a className="hover:text-white">ニュース</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="hover:text-white">お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-semibold text-white">Contact Us</h5>
            <address className="space-y-2 text-sm not-italic">
              <p>〒225-0013</p>
              <p>神奈川県横浜市青葉区荏田町 1150-34</p>
              <p>
                Email:{" "}
                <a href="mailto:admin@a1-road.com" className="hover:text-white">
                  admin@a1-road.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} A1 Labs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

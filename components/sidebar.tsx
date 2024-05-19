"use client";
import logo from "@/assets/logo.svg";
import links from "@/utils/links";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full bg-muted px-8 py-4">
      <Image src={logo} alt="Jobify logo" className="mx-auto" />
      <div className="mt-20 flex flex-col gap-y-4">
        {links.map(({ href, icon, label }) => (
          <Button
            key={href}
            asChild
            variant={pathname === href ? "default" : "outline"}
          >
            <Link href={href} className="flex items-center gap-x-2">
              {icon} <span className="capitalize">{label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  );
}
export default Sidebar;

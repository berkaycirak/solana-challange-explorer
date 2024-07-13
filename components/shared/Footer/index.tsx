import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary-foreground p-2 text-center dark:bg-primary">
      Powered by{" "}
      <Link
        className="font-bold text-purple-500 underline"
        href="https://github.com/berkaycirak"
        target="_blank"
      >
        Kinda Dev
      </Link>
    </div>
  );
};

export default Footer;

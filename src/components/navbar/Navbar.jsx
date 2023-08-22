"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Блог
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;




// Код нь React номын санг импортлох замаар эхэлдэг.

//  Дараа нь Navbar хэмээх бүрэлдэхүүн хэсгийг импортолдог.

//  Энэ бүрэлдэхүүн хэсгийн үүрэг нь холбоосуудын жагсаалтыг зарим текстээр гаргаж, дараа нь гарах "X" товчлуурыг харуулах явдал юм.

//  Кодод тохиолддог хамгийн эхний зүйл бол бид дараагийн/холбоос Link бүрэлдэхүүн хэсгийг импортлох явдал юм.

//  Энэ нь бусад хуудсуудтай холбох, зураг харуулах, мөн холбоосууддаа анги, id нэмэх зэрэг бүх функцийг ашиглах боломжийг бидэнд олгодог.

//  Дараа нь бид холбоос гэж нэрлэгддэг массив үүсгэдэг бөгөөд үүнд зургаан өөр холбоосууд орно: нэг нь гэрт, нэг нь багцад, нэг нь блогт, нэг нь ойролцоогоор хуудсанд, нэг нь холбоо барих хуудсанд зориулагдсан бөгөөд эцэст нь гарчиггүй, зөвхөн хяналтын самбарын хуудас руу чиглэсэн URL хаягтай өөр нэг холбоос үүсгэдэг. .

//  Код нь дараах тэмдэглэгээг хийдэг React бүрэлдэхүүн хэсэг юм:

// блог

// {links.map((холбоос) =&gt; ( {link.title} ))}
 


// The code starts by importing the React library.
//  Next, it imports a component called Navbar.
//  The function of this component is to render a list of links with some text on them and then display an "X" button for logging out.
//  The first thing that happens in the code is that we import the Link component from next/link .
//  This allows us to use all its features like linking to other pages or displaying images as well as adding classes and ids to our links.
//  Next, we create an array called links which contains six different links: one for home, one for portfolio, one for blog, one for about page, one for contact page and finally another link with no title but just a URL pointing at dashboard page.
//  The code is a React component that renders the following markup:
// Blog
// {links.map((link) => ( {link.title} ))}
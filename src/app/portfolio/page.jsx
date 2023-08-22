import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

// Код нь сав байхаар загварчилсан div-ээс эхэлдэг.
// Энэ чингэлэг дотор хоёр холбоос байна: нэг нь зурагт, нөгөө нь вэб сайтад зориулагдсан.
// Эдгээр холбоос дээрх className шинж чанарыг "зүйл" гэж тохируулсан.
// Дараа нь код нь Portfolio() хэмээх функцийг тодорхойлдог бөгөөд энэ нь гурван зүйл агуулсан объектыг буцаадаг: эхнийх нь зураг зурах холбоос, хоёрдугаарт вэб сайтын холбоос, гурав дахь нь Програм гэж нэрлэгддэг өөр холбоос юм.
// Код нь дараах HTML тэмдэглэгээг гаргадаг энгийн React бүрэлдэхүүн хэсэг юм:
// Галерейг сонгоно уу
// Дүрслэл Вэб сайт програм



// The code starts with a div that is styled to be the container.
// Inside of this container, there are two links: one for Illustrations and one for Websites.
// The className property on these links is set to "item".
// The code then defines a function called Portfolio() which returns an object containing three items: the first being a link for Illustrations, second being a link for Websites, and third being another link called Application.
// The code is a simple React component that renders the following HTML markup:
// Choose a gallery
// Illustrations Websites Application
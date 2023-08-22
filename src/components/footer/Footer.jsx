import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Tulga Enhtaivan. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Tulga Facebook Account"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Tulga"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Tulga "
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Tulga "
        />
      </div>
    </div>
  );
};

export default Footer;

// Код нь React-ийн импортын мэдэгдлээс эхэлдэг.

//  Энэ нь бидэнд програмын бүрэлдэхүүн хэсгүүдийг үүсгэх боломжийг олгодог номын сан юм.

//  Кодын дараагийн мөр нь "./footer.module.css"-ээс хэв маягийг импортлодог.

//  Энэ файл нь бидний бүрэлдэхүүн хэсгийг загварчлахад ашиглаж болох CSS классуудыг агуулж байгаа бөгөөд энэ нь энэ бүрэлдэхүүн хэсгийн JavaScript файлтай нэг хавтсанд (энэ тохиолдолд програм/бүрэлдэхүүн) байрлах болно.

//  Дараа нь бид Footer () нэртэй функцтэй болно.

//  Энэ нь className="container" болон className="social" гэсэн хоосон div элементийг буцаана.

//  Эдгээр хоёр ангийн дотор "©2023 Tulga Enhtaivan" гэсэн бичвэр агуулсан зургууд байна.

//  Бүх эрх хуулиар хамгаалагдсан."

//  Дараа нь "Тулга фэйсбүүк хаяг" гэсэн бичвэр бүхий өөр нэг зураг, араас нь "Тулга" гэсэн бичвэр агуулсан нэг зураг байна.

//  Тэгээд эцэст нь "Тулга" гэсэн бичвэр агуулсан сүүлчийн зураг байна.

//  Код нь хөл хэсгийг буулгадаг React бүрэлдэхүүн хэсэг юм.

// The code starts with the import statement for React.
//  This is a library that allows us to create components in our application.
//  The next line of code imports styles from "./footer.module.css".
//  This file contains CSS classes that we can use to style our component, and it will be located in the same folder as this component's JavaScript file (in this case, app/components).
//  Next, we have a function called Footer().
//  It returns an empty div element with className="container" and className="social".
//  Inside of these two classes are images which contain text saying "©2023 Tulga Enhtaivan."
//  All rights reserved."
//  Next, there is another image containing text saying "Tulga Facebook Account," followed by one more image containing text saying "Tulga."
//  Then finally there is one last image containing text saying "Tulga."
//  The code is a React component that renders the footer.

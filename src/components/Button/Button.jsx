import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
 

// Код нь Button хэмээх функцээс эхэлдэг.

//  Энэ бол React програмын гол бүрэлдэхүүн хэсэг юм.

//  Функцийн эхний аргумент нь текст ба url гэсэн хоёр шинж чанартай объект юм.

//  Эдгээр нь энэ товчлуурын холбоосын бүрэлдэхүүн хэсэгт ашиглагдах шинж чанарууд бөгөөд энэ нь хоёр дахь аргумент болгон дамжуулсан URL руу холбоос өгдөг.

//  Кодын дараагийн мөр нь "./button-module/css"-ийн загварын модулийг ашиглан className загварын өмчийн шинэ жишээг үүсгэдэг.

//  Дараа нь энэ хуудасны бүх товчлуурын контейнер ангийн нэрээр үүнийг онооно.

//  Код нь өгөгдсөн url хаягтай холбоос бүхий энгийн товчлуурын бүрэлдэхүүн хэсэг юм.

// The code starts with a function called Button.
// This is the main component of this React app.
// The first argument to the function is an object that has two properties: text and url.
// These are the properties that will be used by this button's Link component, which renders a link to whatever URL was passed in as its second argument.
// The next line of code creates a new instance of className style property using styles module from "./button-module/css".
// It then assigns it to container class name for all buttons on this page.
// The code is a simple button component that has a link to the given url.
"use client"

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle; 




// Код нь "react"-аас React болон useContext функцийг импортлох замаар эхэлдэг.

//  Дараа нь код нь шинэ DarkModeToggle бүрэлдэхүүнийг үүсгэдэг.

//  Энд ид шид тохиолддог.

//  Кодын эхний мөрөнд үйл явдал сонсогчийг тохируулна

// элементийг дарах үед идэвхжих болно.

//  Энэ нь мөн аргумент болгон дамжуулсан функцийн лавлагааг агуулсан toggle хэмээх хувьсагчийг тохируулдаг (функцийг useContext ашиглан үүсгэсэн).

//  Дараа нь энэ хувьсагчийг ашиглан горим гэж нэрлэгддэг өөр функцийг хоёр аргументтай дууддаг: {light} эсвэл {dark}.

//  Хэрэв горимыг гэрэлд тохируулсан бол styles.left = "2px" гэж, харин горимыг харанхуй болгож тохируулсан бол styles.right = "2px" гэж дуудна.

//  Код нь харанхуй горимыг асаах, унтраах энгийн React бүрэлдэхүүн хэсэг юм.

//  The code starts by importing React and the useContext function from "react".
//  The code then creates a new DarkModeToggle component.
//  This is where the magic happens.
//  The first line of code sets up an event listener on the
// element, which will be triggered when it's clicked.
//  It also sets up a variable called toggle that will hold a reference to the function passed in as its argument (the function is created using useContext).
//  Next, it uses this variable to call another function called mode with two arguments: {light} or {dark}.
//  If mode is set to light, it calls styles.left = "2px" and if mode is set to dark, it calls styles.right = "2px".
//  The code is a simple React component that will toggle the dark mode on and off.

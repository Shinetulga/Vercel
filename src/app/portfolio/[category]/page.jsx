import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;




// Тайлбар
// Код нь React болон загварын хүснэгтийг импортлохоос эхэлнэ.
//  Дараа нь "бүрэлдэхүүнүүд/Товчлуур/Товч"-оос Button-ыг импортолдог.
//  Дараа нь муурны ангилалд зориулсан зүйлсийг агуулсан "next/image" болон data.js-аас Зургийг импортлодог.
//  Эцэст нь, getData(cat) нэртэй категорийн массив дахь муур бүрийн өгөгдөл агуулсан объектыг буцаадаг функцийг үүсгэдэг.
//  Ангиллын бүрэлдэхүүн хэсэг нь файлын төгсгөлд өгөгдмөл экспорт хэлбэрээр экспортлогдох бөгөөд ингэснээр бусад бүрэлдэхүүн хэсгүүд өөрсдийн агуулгыг үзүүлэхэд ашиглах боломжтой болно.
//  Код нь зураг болон текстийг гаргадаг React бүрэлдэхүүн хэсгийн эхний код юм.



"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Register</button>
        {error && "Something went wrong!"}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;






// Код нь Register хэмээх функцийг зарласнаар эхэлдэг.
//  Энэ нь хэрэглэгч "Бүртгүүлэх" дээр дарахад гүйцэтгэх функц юм.
//  Энэ функцын кодын эхний мөр нь алдаа гэж нэрлэгддэг объектыг үүсгэдэг бөгөөд үүнийг null болгож эхлүүлдэг.
//  Дараа нь чиглүүлэгч нэртэй хувьсагчийг зарлаж useRouter()-д онооно.
//  Дараа нь handleSubmit() аргын дотор асинхронгүй функцуудыг дууддаг хоёр мөр байдаг: нэг нь Analyze, нөгөө нь Navigate.
//  Analyze нь e аргументыг параметр болгон авч, юу ч буцаадаггүй (хүчингүй).
//  Энэ нь маягтыг утга болгон e гэж оруулахаас өмнө юу болсныг шинжлэхэд ашигладаг.
//  Navigate нь e аргументыг параметр болгон авч, юу ч буцаадаггүй (хүчингүй).
//  Энэ нь маягтыг утга болгон e гэж оруулахаас өмнө юу болсныг шинжилсний дараа буцахад ашиглагддаг.
//  Энэ функцын кодын сүүлийн мөр нь setError()-г дууддаг бөгөөд энэ нь Analyze эсвэл Navigate-аас буцаж ирсэн бүх зүйлд алдааг тохируулдаг.
//  Код нь алдааны төлөвийг авч, дуудагдах үед үүнийг null болгодог функц юм.
//  useState() функц нь алдааны төлөв болон setError хувьсагчийг хянахад ашиглагддаг.
//  Дараагийн/холбоосын бүрэлдэхүүн хэсэг нь "дараагийн" лавлахаас импортлогдсон бөгөөд үүнийг дараа нь тайлбарлах болно.
//  Дараагийн/навигацийн бүрэлдэхүүн хэсэг нь "дараагийн" лавлахаас импортлогдсон бөгөөд үүнийг дараа нь тайлбарлах болно.
//  Код нь fetch() аргыг ашиглан /api/auth/register төгсгөлийн цэг рүү хүсэлт илгээж эхэлдэг.
//  Дараа нь код нь "Агуулгын төрөл" болон "аппликейшн/json" зэрэг хүсэлтийн зарим толгой хэсгийг тохируулдаг.
//  Дараа нь энэ нь нэр, имэйл, нууц үгийн шинж чанартай объект үүсгэдэг.
//  Дараа нь тэр объектыг JSON.stringify() руу дамжуулдаг.
//  Res хувьсагч нь await fetch("/api/auth/register", {арга: "POST", толгой хэсэг: {...}, үндсэн хэсэг: JSON.stringify({нэр, имэйл, нууц үг}))-тэй тэнцүү байна.
//  Код нь дараах зүйлийг асууж байна: "/api/auth/register" арга: "POST", толгой хэсэг: { "Content-Type": "application/json", } бие: JSON.stringify({нэр, имэйл, нууц үг) , });
//  Код нь handleSubmit хэмээх функцийг зарласнаар эхэлдэг.
//  Маягт илгээх товчийг дарахад энэ функцийг гүйцэтгэх болно.

// 窗体顶端

// Энэ функцийн эхний мөрөнд маягтын илгээх үйл явдалд зориулж үйл явдал сонсогчийг тохируулж, handleSubmit-д оноож, дараа нь буцааж дуудах функцийг гүйцэтгэх болно (бид үүнийг секундын дотор авах болно).

// 窗体底端

//  Дараа нь хувьсагчдыг зарлах хоёр мөр байна: нэг нь алдааны объект, нөгөө нь чиглүүлэгчийн объект. Эдгээр хоёр объектыг дараа нь код болон таны програмын бүх кодын санд ашигладаг тул тэдгээрийг шаардлагатай файлын дээд талд үргэлж зарлах ёстой.
//  Дараа нь, танд CSS загвар бүхий HTML тэмдэглэгээ байгаа бөгөөд дотор нь h1 толгой, h2 хадмалтай контейнер div, дотор нь маягт оруулах талбар үүсгэдэг.
//  Энэ div чингэлэг дотор хэн нэгэн "Бүртгэл үүсгэх" дээр дарахад юу тохиолдохыг, дараа нь Google Нэвтрэх эсвэл Facebook Нэвтрэх ашиглан өөрийн апп-д бүртгүүлэх зааварчилгааг багтаасан өөр HTML тэмдэглэгээтэй.
//  Эцэст нь өгөгдсөн биеийн шошгыг хаахаас өмнөхөн хоосон div бий болсон
//  Код нь шинэ данс үүсгэх болно.
//  Код нь a үсгээр эхэлдэг
// className="container"-тай бөгөөд бусад бүх элементүүдийг бооход ашигладаг шошго.

//  Дараа нь код нь "текст" гэсэн төрлийн атрибуттай, "Хэрэглэгчийн нэр" гэсэн утгатай орлуулагч шинж чанартай оролтын элементийг үүсгэдэг.
//  Энэ оролтын элемент нь товчлуур гэж нэрлэгддэг өөр элементийн дотор байгаа тул шаардлагатай.
//  Дараагийн мөрөнд "текст" гэсэн төрлийн атрибуттай оролтын элементийг үүсгэх боловч энэ удаад өөрийн орлуулагч шинж чанарын хувьд ямар ч атрибут эсвэл утга байхгүй байна.
//  Энэ нь товчлуур гэж нэрлэгддэг өөр элементийн дотор байдаг тул шаардлагагүй.
//  Код нь дараах HTML тэмдэглэгээг гаргах болно: Хэрэглэгчийн нэр  Код нь дараах HTML тэмдэглэгээг гаргах болно:
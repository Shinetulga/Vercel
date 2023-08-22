"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {

  //OLD WAY TO FETCH DATA

  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json()

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData()
  // }, []);

  const session = useSession();

  const router = useRouter();
  
  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;



// Код нь React, useEffect, useState-г импортлох замаар эхэлдэг.
//  Дараа нь код нь аргумент авдаггүй Хяналтын самбар хэмээх функцийг үүсгэдэг.
//  Дараа нь код () => {} функцийг буцаах утга болгон дуудна.
//  Функцийн дотор npm-ээс дараагийн/зургийн багцыг импортлох Image-д зориулсан импортын мэдэгдэл байдаг.
//  Дараа нь энэ нь "хяналтын самбар" нэртэй шинэ маршрут үүсгэхийн тулд React-ийн useRouter-г ашигладаг.
//  Энэ хуудсан дээрх бүх бүрэлдэхүүн хэсгүүдийг үзүүлэхийн тулд энэ жишээнд чиглүүрийг ашиглана.
//  Эцэст нь, энэ нь class="container"-тай div-г гаргаж, CSS (загварын хуудас) ашиглан түүн дээр зарим хэв маягийг тохируулдаг.
//  Код нь уламжлалт клиент талын дуудах API ашиглан өгөгдлийг татаж авдаг.
//  Доорх код нь өгөгдлийг буцаах сервер талын хүсэлтийг хэрэгжүүлэхэд useEffect-ийг ашигладаг.
//  const Хяналтын самбар = () => { //ӨГӨГДӨЛ ТАТААХ ШИНЭ АРГА useEffect(() => { //ӨГӨГДӨЛ ТӨГӨХ ХУУЧИН АРГА fetch("https://api.comprehend.com/v1/movies") .then( (хариу) => answer.json()) ).then((өгөгдөл) => { //ӨГӨГДӨЛ АВАХ ХУЧИН АРГА }); }, []) }
//  Код нь өгөгдөл хэмээх төлөвийн хувьсагчийг зарласнаар эхэлдэг.
//  Энэ бол төрийн анхны үнэ цэнэ юм.
//  Дараагийн мөрөнд err гэж нэрлэгддэг төлөвийн хувьсагчийг зарлах бөгөөд хэрэв алдаа байхгүй бол худал, үгүй ​​бол үнэн гэж тохируулна.
//  Дараа нь бид өөр хоёр хувьсагчийг зарладаг: isLoading болон getData.
//  Эдгээрийг хоёуланг нь дагаж мөрдөх useEffect функцэд ашигладаг.
//  useEffect функц нь эффект дуусахад юу болохыг харуулсан аргументыг авдаг (энэ тохиолдолд энэ нь () => {).
//  Энэ функцын дотроос бид эхлээд await res ашиглан https://jsonplaceholder.typicode.com/posts сайтаас татахад алдаа гарсан эсэхийг шалгана.
//  Хэрэв бидний хүсэлтэд хариу ирээгүй бол бид алдааг үнэн гэж тохируулсан; Үгүй бол бид өгөгдлийг JSON болон setIsLoading-г худал болгож буцаадаг бөгөөд ингэснээр дараа нь кодын давталтаар дахин давтагдах бүртээ шинэ нийтлэл байгаа эсэхийг шалгадаггүй.
//  Код нь өгөгдөл татахад алдаа гарсан тохиолдолд хувьсагчийн төлөвийг үнэн, үгүй ​​бол худал гэж тохируулна.
//  Код нь getData дуудагдах бүрт өөрийгөө дуудах useEffect функцтэй.
//  Функц нь програмын одоогийн төлөвийг авч, өгөгдөл татахад алдаа гарсан тохиолдолд үүнийг худал, эсвэл өөр тохиолдолд үнэн гэж тохируулна.
//  Код нь Session ангийн жишээг буцаадаг useSession() хэмээх функцийг тодорхойлж эхэлдэг.
//  Дараа нь код нь Router ангийн жишээг буцаадаг useRouter() хэмээх функцийг тодорхойлдог.
//  Дараа нь "/api/posts?username=" гэсэн хоёр аргумент бүхий useSWR() нэртэй шинэ функцийг тодорхойлдог.", болон" зөөгч".
//  Эхний аргументыг бид ямар төгсгөлийн цэг гэж нэрлэхийг тодорхойлоход ашигладаг бол хоёр дахь аргументыг татах арга болгон ашигладаг.
//  Эцэст нь өгөгдөл, мутаци, алдаа, isLoading гэсэн гурван шинж чанартай объектыг үүсгэдэг.
//  Өгөгдлийн шинж чанар нь /api/posts?username=-ийн бүх нийтлэлийг агуулна.
//  Mute шинж чанар нь бидэнд энэ хуудсан дээрх аливаа нийтлэлийг өөрчлөх, устгах боломжийг олгодог (жишээлбэл, хэрэв та хэрэглэгчийн нэрээ өөрчлөхийг хүсвэл).
//  Алдааны шинж чанар нь энэ хүсэлтийн явцад гарсан аливаа алдааг агуулна (жишээ нь, хэрэв хэрэглэгч олдоогүй бол).), ачаалж дуусаагүй байхад isLoading шинж чанар үнэн байх боловч ачааллыг амжилттай дуусгасны дараа худал болно (жишээлбэл, хэрэглэгчийн нэрээ өөрчилсний дараа).
//  Код нь серверээс бичлэгүүдийг татаж аваад дараа нь мутаци хийдэг.
//  Код нь өгөгдлийг дуудах сессийг ашигладаг бөгөөд дараа нь өгөгдлийг хаанаас татаж авах URL хаягийг авдаг useSWR() хэмээх шинэ функц болон хариултыг хариуцах функц руу шилжүүлдэг.
//  useSWR() функц нь хоёр параметрээр дамждаг: өгөгдлийг хаанаас татах URL болон хариултыг зохицуулах функц.
//  Эхний параметр нь ямар төгсгөлийн цэгийг дуудахыг тодорхойлоход хэрэглэгддэг бол хоёр дахь параметр нь энэ төгсгөлийн цэгийг дуудах үед ямар төрлийн хариу өгөхийг тодорхойлоход ашиглагддаг.
//  Энэ тохиолдолд энэ нь "өгөгдөл", "мутаци", "алдаа" гэсэн гурван шинж чанартай объект гэж тодорхойлогддог.
//  Гурав дахь
//  Код нь "handleSubmit" хэмээх функцийг тодорхойлж эхэлдэг.
//  Энэ нь хэрэглэгч илгээх товчийг дарахад гүйцэтгэх функц юм. Дараа нь код нь товшилтын үйл явдлуудад зориулсан үйл явдлын зохицуулагчийг тодорхойлдог бөгөөд энэ нь үндсэн үйлдлээс урьдчилан сэргийлэх, манай handleSubmit функцийг гүйцэтгэхэд ашиглагддаг.
//  Кодын дараагийн мөр нь гарчиг хэмээх шинэ хувьсагчийг үүсгэх бөгөөд энэ нь текстийн хайрцагт оруулсан ямар ч утгыг агуулна.
//  Кодын дараагийн мөр нь desc нэртэй өөр нэг хувьсагчийг үүсгэдэг бөгөөд энэ нь "тайлбар" гэсэн шошготой текстийн талбарт оруулсан ямар ч утгыг агуулна.
//  Дараа нь бид img нэртэй гуравдахь хувьсагчийг үүсгэх бөгөөд энэ нь байршуулагч маягтаас байршуулсан ямар ч зургийг агуулдаг (энэ тохиолдолд энэ нь тайлбаргүй зураг байх болно).
//  Эцэст нь бид "контент" гэсэн шошготой текст талбарт оруулсан контентыг агуулсан контент нэртэй дөрөв дэх хувьсагчийг үүсгэдэг.
//  Дараа нь session.status === "баталгаажсан" эсэхийг шалгадаг нөхцөлт логик гарч ирнэ.
//  Хэрэв тийм бол чиглүүлэгчийг ажиллуулна?.push("/хяналтын самбар/логин"); Хэрэв энэ нь чиглүүлэгчийг ажиллуулдаг?.push("/хяналтын самбар/регистр"); Хэрэв үгүй ​​бол энэ нь ажиллана: if(session) { return
// Ачааж байна...
// ; } өөр {буцах
// Баталгаажаагүй!

//  Энэ код нь хэрэглэгч нэвтэрч ороогүй үед ачаалах дэлгэцийг харуулах зорилготой юм.
//  Хэрэв хэрэглэгч нэвтэрч ороогүй бол түүнийг хяналтын самбар/нэвтрэх хуудас руу дахин чиглүүлэх болно.
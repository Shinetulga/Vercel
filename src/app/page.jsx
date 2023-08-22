import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
        Таны дижитал бүтээгдэхүүнийг илүү сайжруулах Веб  дизайн.
        </h1>
        <p className={styles.desc}>
        Санаагаа бодит болгох. Бид Монголын вэб хөгжүүлэгчдийн багуудыг нэгтгэж байна
        
        </p>
        <Button url="/portfolio" text="Бүтэээлүүдийг үзнэ үү"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}



// Энэ кодыг React програмуудыг бүтээхэд зориулагдсан Next.js систем дээр бичсэн болно. Энэ нь нүүр хуудасны байршлыг гаргах функциональ бүрэлдэхүүн хэсэг юм. Бүрэлдэхүүн хэсэг нь CSS модулиудыг ашиглан элементүүдийг загварчлах ба Next.js-аас зургийн файл, захиалгат товчлуурын бүрэлдэхүүн хэсэг болон Image бүрэлдэхүүнийг импортолдог.

// Кодын дэлгэрэнгүй тайлбарыг энд оруулав.

// Код нь шаардлагатай хамаарлыг импортолдог: "next/image"-ээс зураг, "./page.module.css"-аас загвар, "public/hero.png"-аас Hero, "@/components/Button/Button"-аас Button.
// Home нэртэй функциональ бүрэлдэхүүн хэсэг нь тодорхойлогдсон.
// Нүүр хуудасны бүрэлдэхүүн хэсэг дотор нүүр хуудасны байршлыг тодорхойлсон JSX код байдаг.
// JSX код нь styles.container-ийн className бүхий <div> элемент дотор ороосон бөгөөд энэ нь контейнерийн элементэд тодорхой хэв маягийг ашигладаг.
// Контейнер дотор styles.item-ийн className нэртэй хоёр <div> элемент байна. Эдгээр элементүүд нь нүүр хуудасны хоёр хэсгийг төлөөлдөг.
// Эхний хэсэг нь гарчгийн текстийг харуулдаг styles.title-ийн className бүхий <h1> элементийг агуулна.
// Гарчгийн доор тайлбар текстийг харуулсан styles.desc-ийн className бүхий <p> элемент байна.
// Тайлбарын дараа өөрчлөн тохируулсан <Button> бүрэлдэхүүнийг "/portfolio" гэж тохируулсан url prop, "Бүтээлийг нь харах үү" гэж тохируулсан бичвэр тулгуур ашиглана. Энэ товчлуур нь багцын хуудас руу шилжихэд ашиглагддаг.
// Хоёрдахь хэсэг нь Next.js-ийн <Image> бүрэлдэхүүнийг агуулна. src тулгуурыг импортын зургийн файл болох Hero, харин className тулгуурыг styles.img-д тохируулсан бөгөөд энэ нь зурганд тодорхой хэв маягийг ашигладаг.
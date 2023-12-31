"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };


  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
}; 



// ThemeContext.js

// Хариултуудыг үзнэ үү
// Энэ код нь createContext() функцийг ашиглан ThemeContext объектыг экспортлодог. Энэ контекст объектыг React програмын бүрэлдэхүүн хэсгүүдийн хооронд өгөгдөл хуваалцахад ашиглаж болно.


// ThemeContext.js

// Хариултуудыг үзнэ үү
// Энэ код нь ThemeProvider хэмээх бүрэлдэхүүн хэсгийг экспортлодог. Энэ нь хүүхдийн бүрэлдэхүүн хэсгүүдийг төлөөлдөг Children нэртэй тулгуурыг хүлээн авдаг. Бүрэлдэхүүн хэсэг дотор энэ нь useState дэгээ ашиглан mode гэж нэрлэгддэг төлөвийн хувьсагч болон setMode хэмээх функцийг үүсгэдэг. Горимын анхны утгыг "харанхуй" гэж тохируулсан.
  

// Код нь горимын утгыг сэлгэн залгах функцийг тодорхойлдог. Хэрэв горимын одоогийн утга нь "харанхуй" бол "гэрэл", одоогийн утга "гэрэл" бол "харанхуй" болж өөрчлөгдөнө. Горимын шинэчлэгдсэн утгыг гуравдагч оператор ашиглан тодорхойлно.
  


// Энэ код нь хүүхдийн бүрэлдэхүүн хэсгүүдийг ороосон JSX элементийг буцаана. Энэ нь React контекст API-ийн ThemeContext.Provider бүрэлдэхүүнийг ашиглан шинж чанарыг солих болон горимтой утгын объектоор хангадаг. Toggle шинж чанар нь "харанхуй" болон "гэрэл" горимуудын хооронд шилжих функц бөгөөд горимын шинж чанар нь одоогийн горимын утгыг агуулна. Буцаагдсан JSX элемент нь одоогийн горимд суурилсан CSS ангийн нэртэй байна.

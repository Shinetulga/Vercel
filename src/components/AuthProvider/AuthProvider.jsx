"use client"

import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;







// Код нь дараагийн баталгаажуулалт/реактаас SessionProvider бүрэлдэхүүн хэсгийг импортлох замаар эхэлдэг.

//  Дараа нь AuthProvider нь хүүхдүүдтэй объектыг өөрийн параметр болгон авдаг функц гэж тодорхойлогддог.

//  Энэ объектыг дүрслэх үед SessionProvider-д дамжуулах ба хүүхдүүдийг баталгаажуулах зорилгоор өөр өөр бүрэлдэхүүн хэсгүүдийг үзүүлэхэд ашигладаг.

//  Код нь "react"-аас React-ийг импортлох замаар эхэлдэг.

//  Дараа нь AuthProvider функцийн шинэ жишээ үүсгэгдэж, AuthProvider гэж нэрлэгдэх энэ хувьсагчид оноогдсон байна.

//  Эцэст нь энэ хувьсагчийг бусад модулиуд өөрсдийн коддоо ашиглахын тулд экспортлодог.

//  Код нь SessionProvider-ийг гаргадаг энгийн React бүрэлдэхүүн хэсэг юм.

//  Дээрх кодын "хэрэглэгчийг ашиглах" хэсэг нь үүнийг React бүрэлдэхүүн хэсэг болгодог. 

// The code starts by importing the SessionProvider component from next-auth/react.
//  The AuthProvider is then defined as a function that takes in an object with children as its parameter.
//  This object will be passed to the SessionProvider when it renders, and the children are used to render different components for authentication purposes.
//  The code starts by importing React from "react".
//  Then, a new instance of the AuthProvider function is created and assigned to this variable called AuthProvider.
//  Finally, this variable is exported so that other modules can use it in their own code.
//  The code is a simple React component that renders the SessionProvider.
//  The "use client" part of the code above is what makes this a React component.
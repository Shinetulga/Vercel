import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};



// Тайлбар
// Код нь "next-auth"-аас NextAuth классыг импортлох замаар эхэлдэг.
// Энэ нь хэрэглэгчдийг баталгаажуулах бүх арга, шинж чанарыг агуулсан анги юм. Энэ код нь CredentialsProvider, GithubProvider, GoogleProvider гэсэн гурван өөр үйлчилгээ үзүүлэгчийг импортолдог.Эдгээр нь хэрэглэгчдэд итгэмжлэлээрээ хэрхэн зөвшөөрөл олгох тухай мэдээллийг агуулсан ангиуд юм.Дараа нь энэ нь /login эсвэл /dashboard/login руу хандах хүсэлтийг шийдвэрлэх зам болгон ашиглах зохицуулагчийн жишээг үүсгэдэг.Энэ нь мөн эдгээр хоёр зохицуулагчийг экспортлох бөгөөд ингэснээр таны хүсэлт гаргаж буй хуудаснаас хамааран баталгаажуулалтын хүсэлтийг өөр өөрөөр шийдвэрлэхийн тулд тэдгээрийг бусад файл руу импортлох боломжтой.Дараагийн мөрөнд NextAuth-ийн жишээг дараах сонголтуудыг ашиглан үүсгэнэ: үйлчилгээ үзүүлэгчид: [CredentialsProvider({id:"credentials", name:"Credentials"}, {async authorize(credentials) {}, оролдоно уу {}), GithubProvider({clientId :"GITHUB_ID", clientSecret:"GITHUB_SECRET"}), GoogleProvider({clientId:"GOOGLE_CLIENT_ID", clientSecret:"GOOGLE_CLIENT_SECRET"})]Энэ код нь NextAuth номын сангаар хэрхэн баталгаажуулах жишээ юм.Next-auth/providers лавлах нь дараах сангуудыг агуулна: credentials - NextAuth-д зориулсан бүх итгэмжлэл нийлүүлэгчийг агуулна.
//  github - NextAuth-д зориулсан Github үйлчилгээ үзүүлэгчийг агуулсан.
//  google - NextAuth-д зориулсан Google үйлчилгээ үзүүлэгчийг агуулсан.
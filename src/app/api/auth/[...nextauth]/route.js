import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        //Check if the user exists.
        await connect();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },

});

export { handler as GET, handler as POST };




// Тайлбар
// Код нь "next-auth"-аас NextAuth классыг импортлох замаар эхэлдэг.
// Энэ нь хэрэглэгчдийг баталгаажуулах бүх арга, шинж чанарыг агуулсан анги юм. Энэ код нь CredentialsProvider, GithubProvider, GoogleProvider гэсэн гурван өөр үйлчилгээ үзүүлэгчийг импортолдог.Эдгээр нь хэрэглэгчдэд итгэмжлэлээрээ хэрхэн зөвшөөрөл олгох тухай мэдээллийг агуулсан ангиуд юм.Дараа нь энэ нь /login эсвэл /dashboard/login руу хандах хүсэлтийг шийдвэрлэх зам болгон ашиглах зохицуулагчийн жишээг үүсгэдэг.Энэ нь мөн эдгээр хоёр зохицуулагчийг экспортлох бөгөөд ингэснээр таны хүсэлт гаргаж буй хуудаснаас хамааран баталгаажуулалтын хүсэлтийг өөр өөрөөр шийдвэрлэхийн тулд тэдгээрийг бусад файл руу импортлох боломжтой.Дараагийн мөрөнд NextAuth-ийн жишээг дараах сонголтуудыг ашиглан үүсгэнэ: үйлчилгээ үзүүлэгчид: [CredentialsProvider({id:"credentials", name:"Credentials"}, {async authorize(credentials) {}, оролдоно уу {}), GithubProvider({clientId :"GITHUB_ID", clientSecret:"GITHUB_SECRET"}), GoogleProvider({clientId:"GOOGLE_CLIENT_ID", clientSecret:"GOOGLE_CLIENT_SECRET"})]Энэ код нь NextAuth номын сангаар хэрхэн баталгаажуулах жишээ юм.Next-auth/providers лавлах нь дараах сангуудыг агуулна: credentials - NextAuth-д зориулсан бүх итгэмжлэл нийлүүлэгчийг агуулна.
//  github - NextAuth-д зориулсан Github үйлчилгээ үзүүлэгчийг агуулсан.
//  google - NextAuth-д зориулсан Google үйлчилгээ үзүүлэгчийг агуулсан.
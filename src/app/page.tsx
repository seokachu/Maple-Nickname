import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import S from "@/styles/commons.module.css";

export default function Home() {
  return (
    <div className={S.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

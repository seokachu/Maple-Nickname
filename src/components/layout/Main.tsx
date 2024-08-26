import NicknameList from "../nickname/NicknameList";
import SearchForm from "../nickname/SearchForm";
import S from "@/styles/commons.module.css";

const Main = () => {
  return (
    <main className={S.mainWrapper}>
      <SearchForm />
      <NicknameList />
    </main>
  );
};

export default Main;

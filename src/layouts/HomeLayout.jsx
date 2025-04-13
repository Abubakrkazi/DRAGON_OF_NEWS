import Header from "../component/Header";
import LatestNews from "../component/LatestNews";

const HomeLayout = () => {
  return (
    <div   >
      <header>
      <Header></Header>
      <section>
        <LatestNews></LatestNews>
      </section>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;

import css from "../HomePage/HomePage.module.css";

function HomePage() {
  return (
    <div className={css.homePage}>
      <div className={css.mainContantHomePage}>
        <div className={css.textPartOnHomePage}>
          <h1 className={css.headerOnHomePage}>Campers of your dreams</h1>
          <h2 className={css.textUnderHeader}>
            You can find everything you want in our catalog
          </h2>
        </div>
        <button className={css.buttonViewNow}>View Now</button>
      </div>
    </div>
  );
}

export default HomePage;

import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
  return (

    <div className="max-w-[90%] mx-auto">
      <h1 className="pt-5 text-3xl font-bold animate__animated animate__bounce">Marvel Comics</h1>
      <hr />

      <HeroList publisher={"Marvel Comics"} />

    </div>
  );
};

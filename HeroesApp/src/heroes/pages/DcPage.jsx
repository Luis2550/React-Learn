import { HeroList } from "../components/HeroList"

export const DcPage = () => {
  return (
    <div className="max-w-[90%] mx-auto">

      <h1 className="pt-5 text-3xl font-bold">Dc Comics</h1>
      <hr />

      <HeroList publisher={"DC Comics"} />

      
    </div>
  )
}

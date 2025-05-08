import { StartIcon } from "../../icons"

export const NothingSelectedView = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3 justify-center items-center bg-gray-800/98 rounded-xl mt-5" >

        <StartIcon width={80} height={80}/>
        <h2 className="text-3xl font-bold">Selecciona o crea una entrada</h2>

    </div>
  )
}

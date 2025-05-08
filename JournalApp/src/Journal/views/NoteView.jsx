import { SaveIcon } from "../../icons";
import { ImageGallery } from "../components/ImageGallery";


export const NoteView = () => {
  return (
    <>

      <div className="mt-5 flex items-center justify-between flex-wrap">
        <h3 className="text-3xl">06 de abril, 2025</h3>

        <button className="flex gap-2 items-center bg-blue-900/98 cursor-pointer py-1 px-2 rounded-md mt-3 md:mt-0">
            <SaveIcon width={24} height={24}/>
            Guardar
        </button>

      </div>

      <div className="my-10 flex flex-col gap-5 items-center justify-center">

        <input type="text" placeholder="Título" className="border-1 px-2 py-1 rounded-md w-[70%]"/>

        <textarea className="border-1 px-2 py-1 rounded-md w-[70%]" placeholder="¿Qué sucedió el día de hoy?" rows={5}></textarea>

      </div>

      <ImageGallery />
      
    </>
  );
};

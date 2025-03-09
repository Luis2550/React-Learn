
export const InputSearch = () => {
  return (
    <>
        <section className="container bg-gray-500 flex items-center gap-3 px-5 py-2 mt-10 rounded-2xl">
        
        <i className="fa-solid fa-magnifying-glass"></i>
        
        <input 
          type="text" 
          placeholder="Buscar Tareas..."
          className="w-full py-2 px-2 border-none outline-none focus:ring-0"
        />
      </section>
    </>
  )
}

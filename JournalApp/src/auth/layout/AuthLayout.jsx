
export const AuthLayout = ( {children, title} ) => {
  return (

    <div className="max-w-[90%] h-screen flex justify-center items-center mx-auto">
      
      <div className="border py-3 px-4 rounded-md flex flex-col gap-4 max-w-[400px] w-full">
        
        <h2 className="text-2xl font-bold">{title}</h2>

        {children}

      </div>

    </div>

  )
}

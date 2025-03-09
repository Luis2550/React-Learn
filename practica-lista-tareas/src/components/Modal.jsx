import { useForm } from "../../hooks/useForm";

export const Modal = ({ id, onNewTodo, taskToEdit, onEditTask, IsOpen, setIsOpen }) => {
    // Inicializa el formulario con valores vacíos o con los valores de la tarea si hay una tarea para editar.
    const { title, description, priority, onInputChange, onResetForm } = useForm({
        title: taskToEdit ? taskToEdit.title : '',
        description: taskToEdit ? taskToEdit.description : '',
        priority: taskToEdit ? taskToEdit.priority : 'Baja',
    });

    console.log(taskToEdit)

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (title.length <= 1 || description.length <= 1) return;

        const ahora = new Date();
        const fechaFormateada = ahora.toLocaleString();


        if (taskToEdit) {
            const updatedTask = {
                id: taskToEdit.id,
                done: taskToEdit.done,
                title,
                date: taskToEdit.date,
                description,
                priority,
            };

            onEditTask(updatedTask);
            setIsOpen(false);
            
        } else {

            const newTodo = {
                id: id + 1,
                done: false,
                title,
                date: fechaFormateada,
                description,
                priority,
            };

            onNewTodo(newTodo);
            setIsOpen(false);
            console.log("si ingresa", id + 1)
            onResetForm(); // Reinicia el formulario al agregar una nueva tarea
        }
    };

    return (
        <>
            {IsOpen && (
                <div className="z-50 fixed inset-0 bg-black/30 flex items-center justify-center backdrop-blur-sm">
                    <form onSubmit={(e) => e.preventDefault()} className="bg-gray-600 p-5 flex flex-col gap-3 rounded-2xl text-white container md:w-[500px]">
                        <h2 className="text-2xl font-bold">{taskToEdit ? 'Editar Tarea' : 'Nueva Tarea'}</h2>
                        <hr />

                        <label htmlFor="title" className="label-form">Título</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={onInputChange}
                            placeholder="Título de la tarea"
                            className="border border-white px-3 py-2 outline-none focus:ring-0 rounded-xl"
                            value={title || ''} // Esto refleja el valor de `title` en el estado
                        />

                        <label htmlFor="description" className="label-form">Descripción</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={onInputChange}
                            placeholder="Descripción de la tarea"
                            className="border border-white px-3 py-2 outline-none focus:ring-0 rounded-xl"
                            value={description || ''} // Esto refleja el valor de `description` en el estado
                        />

                        <label htmlFor="priority" className="text-xl font-bold">Prioridad</label>
                        <select
                            name="priority"
                            id="priority"
                            className="bg-gray-800 px-3 py-2 rounded-xl w-[50%]"
                            onChange={onInputChange}
                            value={priority || ''} // Esto refleja el valor de `priority` en el estado
                        >
                            <option value="Baja">Baja</option>
                            <option value="Media">Media</option>
                            <option value="Alta">Alta</option>
                        </select>

                        <div className="flex gap-3 items-center justify-center">
                            <button
                                className="bg-red-500 px-3 py-2 rounded-xl cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancelar
                            </button>

                            <button
                                className="bg-blue-500 px-3 py-2 rounded-xl cursor-pointer"
                                onClick={onFormSubmit}
                            >
                                {taskToEdit ? 'Actualizar' : 'Guardar'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

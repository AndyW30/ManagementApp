import Task from './NewTask';
export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-800 mb-4">Tasks</h2>
      <Task onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between my-4 rounded-md bg-stone-200 px-5 py-2"
            >
              <span className="gap-4">{task.text}</span>
              <button
                className="text-stone-100 hover:text-red-500 bg-stone-600 rounded-md px-2"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

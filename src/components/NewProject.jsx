import Input from './Input';
import Modal from './Modal';
import { useRef } from 'react';
export default function NewProject({ onAdd,cancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueToDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueToDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueToDate,
    });
  };
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl uppercase font-bold text-stone-950 my-4 mx-4">Invalid Input</h2>
        <p className="text-s text-stone-950 my-3 mx-4 font-bold">Oooops ... looks like you forgot to enter a value.</p>
        <p className="text-s font-bold text-stone-950 my-3 mx-4">
          Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[55rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="rounded-md bg-stone-300 px-10 py-2 text-stone-800 hover:text-stone-950 hover:bg-stone-400" onClick={cancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-12 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}

import noProjectImage from '../assets/img.jpg';
import Button from './Button';

export default function NoProject({onStartAddProject}) {
  return (
    <div className="text-center mt-16 w-2/3">
      <img
        src={noProjectImage}
        alt="working on the project"
        className="  w-auto h-1/2 object-contain mx-auto shadow-xl"
      />
      <h1 className="text-xl uppercase font-bold text-stone-800 my-4">
        No Project Selected
      </h1>
      <p className="text-s font-extralight text-stone-900 my-3">
        Select a project or get started with a new one.
      </p>
      <p className="mt-5">
        <Button onClick={onStartAddProject} >Create new project</Button>
      </p>
    </div>
  );
}

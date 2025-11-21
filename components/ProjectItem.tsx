interface ProjectProps {
  project: any;
  index: number;
}

const ProjectItem = ({ project, index }: ProjectProps): JSX.Element => {
  return (
    <div className="shadow-lg mb-8 mx-auto lg:w-11/12 lg:flex lg:flex-row lg:h-auto">
      <div className="w-full lg:w-6/12 bg-gray-100 flex items-center justify-center rounded-tr-lg rounded-tl-lg lg:rounded-bl-lg lg:rounded-tr-none overflow-hidden">
        <img
          className="w-full h-auto object-contain py-4 px-4"
          src={project.img}
          alt={project.title}
          style={{ maxHeight: '400px' }}
        />
      </div>
      <div className="w-full bg-gray-50 p-8 rounded-bl-lg rounded-br-lg lg:rounded-bl-none lg:rounded-tr-lg">
        <h2 className="text-gray-700 font-semibold">{project.title}</h2>
        <p className="text-sm text-gray-500 mt-4">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;

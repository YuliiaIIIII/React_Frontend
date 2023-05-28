function WorkExp({ title, description, name, link }) {
  return (
    <div className="mb20">
      <p><span className="bold-text fw600">Name of employer: </span> {name}</p>
      <p><span className="bold-text fw600">Web-site: </span> <a href={link}>{name}</a></p> 
      <p><span className="bold-text fw600">Job title: </span> {title}</p>
      <p><span className="bold-text fw600">Project/Role description: </span> {description}</p>
    </div>
  );
}

export default WorkExp;
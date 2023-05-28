import { useState } from "react";

const emptyForm = {
  title: "",
  name: "",
  description: "",
  link: ""
}

function WorkExpAddForm(){
    const [inputData, setInputData] = useState(emptyForm);

    const handleChange = (event) => {
      const { name, value } = event.target;
      setInputData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setInputData(emptyForm);
    };

    return(
    <div>
      <div>
        <p className="newExp">
          Add new work experience:
        </p>
      </div>
      <form className="formStyle" onSubmit={handleSubmit}>
        <div className="mb10">
          <label
            className="labelBlock"
            htmlFor="title">
            Enter your title: 
            <input 
              type="text" 
              id="title"
              className="preLine"
              placeholder="Type your job title"
              value={inputData.title} 
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mb10">
          <label
            className="labelBlock"
            htmlFor="name">
            Enter the name of the company: 
            <input 
              type="text"
              id="name"
              className="preLine"
              placeholder="Type a name of employer"
              value={inputData.name} 
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mb10">
          <label
            className="labelBlock"
            htmlFor="description">
            Enter your role description: 
            <input 
              type="text"
              id="description"
              className="preLine"
              placeholder="Type a job description"
              value={inputData.description} 
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mb10">
          <label 
            className="labelBlock"
            htmlFor="link">
            Enter a link to a company's website: 
            <input 
              type="text"
              id="link"
              className="preLine"
              placeholder="Type a link to a web-site"
              value={inputData.link} 
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button 
            type="submit"
            className="addButton newExp send">
              Add new job
          </button>
        </div>
      </form>
    </div>
  )
}

export default WorkExpAddForm
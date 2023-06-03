import { useEffect, useState } from "react";

function ContactBlock() {
  const allRepos = 'https://api.github.com/users/YuliiaIIIII/repos';
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(allRepos)
    .then(response => response.json())
    .then(data => setRepositories(data))
    .catch(error => console.log(error));
}, []);

    return (
      <div className="repositories wml55">
      <h2 className="title fw600">Repositories</h2>
      <div className="allRepositories marg2849">
        <ul className="reposList">
          {repositories ? (
            repositories.map(item => (
              <li className="fw600" key={item.id}>
                  <a href={item.html_url}
                  target="_blank">
                  {item.name}</a>
                  {item.description ? <p>{item.description}</p> : null}
              </li>
            ))
          ) : <p>Repositories not found</p>
          }
        </ul>
      </div>
    </div>
    );
  }

export default ContactBlock
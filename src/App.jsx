import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import leonardo from "./assets/leonardo.png";
import mateus from "./assets/mateus.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="vite_react"> Vite + React</h1>
      <div className="card">
        <h3 className="teste">
          Hello World! - Leonardo Ramos - Mateus Praxedes
        </h3>
      </div>

      <div className="container">
        <div className="container_img">
          <img
            className="img_link"
            src="https://media.licdn.com/dms/image/D4E03AQGRg4a0NirW_w/profile-displayphoto-shrink_800_800/0/1708453533950?e=1715212800&v=beta&t=kBOoyk4h7oYqxLApWau89-QxMItlgx5mn7EzuKpVbI0"
            alt=""
          />
          <a href="https://www.linkedin.com/in/leonardo-preczevski-733501215/">
            Leonardo Ramos
          </a>
        </div>

        <div className="container_img">
          <img
            className="img_link"
            src="https://media.licdn.com/dms/image/D4D03AQH3lLTo76Hzrw/profile-displayphoto-shrink_800_800/0/1708544251058?e=1715212800&v=beta&t=Z0AxeSisrVbfa1qaCxdYvqTNP8QvDrvxtikugzk1f9c"
            alt=""
          />

          <a href="https://www.linkedin.com/in/mateus-praxedes-06194019b/">
            Mateus Praxedes
          </a>
        </div>
      </div>
    </>
  );
}

export default App;

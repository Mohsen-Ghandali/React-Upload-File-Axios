import { useState } from "react";
import axios from "axios"; 

const App = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null); 

  const handlerEvent = async (e) => {
    e.preventDefault();
    const photo = new FormData();
    photo.append("title", title);
    photo.append("url", url);
    photo.append("thumbnailUrl", image);

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/photos",
        photo, 
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <form
          action="#"
          method="post"
          onSubmit={(e) => {
            handlerEvent(e);
          }}
          className="col-6 offset-3 bg-dark text-white rounded-2"
        >
          <div className="d-block mb-2">
            <label htmlFor="title" className="text-capitalize">
              title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="title..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="d-block mb-2">
            <label htmlFor="url" className="text-capitalize">
              url
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="url..."
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="d-block ">
            <label htmlFor="image" className="text-capitalize">
              File 
            </label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-success text-capitalize my-3">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;

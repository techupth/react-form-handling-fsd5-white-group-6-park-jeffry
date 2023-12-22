import { useState } from "react";

function ProductForm() {
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const handlingSubmit = (event) => {
    event.preventDefault();
    alert(
      `Submitted name: ${username} and the image: ${imageUrl} and price is: ${price} and your description is: ${description}`
    );
  };
  return (
    <form className="post-form" onSubmit={handlingSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
            value={imageUrl}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            value={price}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ProductForm;

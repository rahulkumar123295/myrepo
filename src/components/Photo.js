import React from "react";

function Photo() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const ref1 = React.createRef();

  const handleImageUpload = (e) => {
    ref1.current.classList.add("uploadpic");

    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profilepic">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none",
        }}
      />
      <div onClick={() => imageUploader.current.click()}>
        <img
          ref={uploadedImage}
          style={{
            width: "80px",
            height: "80px",
            position: "absolute",
            borderRadius: "50%",
            border: "none",
            objectFti: "contain",
          }}
        />
      </div>
      <h6 ref={ref1} className="labels">
        Click to upload Student Image
      </h6>
    </div>
  );
}
export default Photo;

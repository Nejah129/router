import React, { useState } from "react";
import Modal from "react-modal";
import StarRaiting from "./StarRaiting";
Modal.setAppElement("#root");

const MovieAdd = ({ handelAdd }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    date: "",
    image: "",
    rating: 0,
  });
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  //handelChange
  const handelChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  //handelRating
  const handelRating = (rate) => setForm({ ...form, rating: rate });
  console.log(form)
  
  //handelsubmit
  const handelsubmit = (e) => {
    e.preventDefault()
    // const newMovie = {
    //   ...form,
    //   id: Math.random(),
    // };
    handelAdd(form);
    console.log(handelAdd);
    closeModal();
  };
  return (
    <div>
      <button onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handelsubmit} >
          <label>Movie name</label>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handelChange}
          />
          <label>Relase Date</label>
          <input
            type="date"
            value={form.date}
            name="date"
            onChange={handelChange}
          />
          <StarRaiting rating={form.rating} handelRating={handelRating} />
          <label>Movie Poster</label>
          <input
            type="url"
            value={form.image}
            name="image"
            onChange={handelChange}
          />
          <button  >Add</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default MovieAdd;

import { React, useContext } from "react";
import noteContext from "../Context/noteContext.js";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div style={{ width: "70%", marginLeft: "15%" }}>
      <div
        className="card my-3"
        style={{
          border: "solid 3px 	#778899",
          boxShadow: "3px 3px 2px",
          backgroundColor: "#d9d9d9",
        }}
      >
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title} |</h5>

            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.show("notes deleted", "success");
              }}
            >
              Delete{" "}
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                alert("Attention!!! Ideally the Edit button must open a modal for editing and updating the notes. However due to some CSS class error on Bootstrap, which currently I am unable to solve, this feature is not available. I might update in future.")
                // updateNote(note);
              }}
            >
              Edit{" "}
            </button>

            {/* <i
              className="fa-solid fa-trash mx-4"
              
              onClick={() => {
                deleteNote(note._id);
                props.show("notes deleted", "success");
              }}
            ></i>

            <i
              
              className="fa-regular fa-pen-to-square"
              onClick={() => {
                updateNote(note);
              }}
            ></i> */}
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;

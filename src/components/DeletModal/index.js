import "./deletemodal.css";

function Delete({ onDelete, onHide }) {
  const onClickOutside = (e) => {
    if (!e.target.closest("#modalContent")) {
      onHide();
    }
  };

  return (
    <div className="delete" onClick={onClickOutside}>
      <div className="modal" id="modalContent">
        <p>Are you sure you want to delete?</p>
        <div>
          <button onClick={onDelete}>Yes</button>
          <button onClick={onHide}>No</button>
        </div>
      </div>
    </div>
  );
}

export default Delete;

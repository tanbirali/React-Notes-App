// components/NoteCard.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Fade } from "react-bootstrap";

function NoteCard(props) {
    function handleNoteDelete(event) {
        event.stopPropagation();
        props.deleteNote(props.id);
    }

    return (
        <Fade appear in>
            <div 
                className={`border-bottom py-2 p-3 ${props.id === props.currentNoteId ? "selected" : "note-card"}`}
                onClick={() => props.setCurrentNoteId(props.id)}
            >
                <h3 className="fw-semibold fs-5">{props.title}</h3>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="m-0 fs-6 fst-italic">{props.updatedAt}</p>
                    <FontAwesomeIcon 
                        className="icon-btn delete-btn" 
                        icon={faTrashCan} 
                        onClick={handleNoteDelete} 
                    />
                </div>
            </div>
        </Fade>
    );
}
export default NoteCard;
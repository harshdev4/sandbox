import { useParams } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../AppContext/AppContext";
import { Link } from "react-router-dom";
import JoditEditor from 'jodit-react';
import "./EditDoc.modular.css";

const EditDoc = ()=>{
    const editor = useRef(null);
    const context = useContext(AppContext);
    // const title = useRef();

    const { productId } = useParams();

    const doc = context.docArr.filter((document)=> document.id == productId);

    let stateTitle = "";
    let stateContent = "";

    if(doc.length !== 0){
        stateTitle = doc[0].title;
        stateContent = doc[0].content;
    }

    const [title, setTitle] = useState(stateTitle);
    const [content, setContent] = useState(stateContent);

    const handleUpdate = ()=>{
        const newDoc = {
            id: productId,
            title: title,
            content: content
        }

        context.dispatchDocArr({type:"update", newDoc});
    }

    const handleTitle = (event)=>{
        setTitle(event.target.value);
    }

    return <>
        <Link to="/" id='back'><i className="fa-solid fa-arrow-left"></i></Link>
        {doc.length !== 0 ? <div className="new-doc">

        <div className="content-area">
            <input type="text" name="title" id="doc-title" placeholder='Enter the title' value={title} onChange={handleTitle}/>
            <br />
            <JoditEditor
			    ref={editor}
			    value={content}
			    tabIndex={1}
			    onChange={newContent => setContent(newContent)}
		    />
        </div>

        <Link to="/" id='save-btn' onClick={handleUpdate}>Update</Link>
        </div> : <h2 id="not-found"> Sorry, No Doc Found.</h2>}
    </>
}

export default EditDoc;
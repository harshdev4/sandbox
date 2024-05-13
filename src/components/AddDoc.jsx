import './AddDoc.modular.css';
import { useContext, useRef, useState } from 'react';
import { AppContext } from '../AppContext/AppContext';
import { Link } from 'react-router-dom';
import JoditEditor from 'jodit-react';

const AddDoc = ()=>{
    const editor = useRef(null);
    const context = useContext(AppContext);
    const [content, setContent] = useState('');
    const title = useRef();

    const handleSave = ()=>{
        const doc = {
            id: new Date().getTime(),
            title:title.current.value,
            content,
        }

        context.dispatchDocArr({type: "add", doc})
    }
    return(
        <div className="new-doc">
            <Link to="/" id='back'><i className="fa-solid fa-arrow-left"></i></Link>
            
            <div className="content-area">
                <input type="text" name="title" id="doc-title" placeholder='Enter the title' ref={title}/>
                <br />
                <JoditEditor
			        ref={editor}
			        value={content}
			        tabIndex={1}
			        onChange={newContent => setContent(newContent)}
		        />
            </div>
            <Link to="/" id='save-btn' onClick={handleSave}>Save</Link>
        </div>

    )
}

export default AddDoc;
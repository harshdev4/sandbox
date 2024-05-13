import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { useNavigate } from "react-router-dom";
import "./Home.modular.css";
import { Link } from "react-router-dom";

const Home = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const handleDelete = (id)=>{
    context.dispatchDocArr({type: "delete", id})
  };

  const handleEdit = (productId)=>{
    navigate(`/edit-doc/${productId}`)
}

  return (
    <div className="home">
      <h2 id="heading">Documents.</h2>
      {context.docArr.length !== 0 ? 
         <div className="doc-container" >
          {context.docArr.map((doc, index)=>{
          return (
            <div className="document" key={index}>
              <h4>{doc.title}</h4>
              <div className="content" dangerouslySetInnerHTML={{ __html: doc.content }} />
              <div className="btn-container">
              <button className="update-btn" onClick={()=> handleEdit(doc.id)}>Edit</button>
              <button className="delete-btn" onClick={()=> handleDelete(doc.id)}>Delete</button></div>
            </div>
        )
      })}</div>:
      (
        <h1 id="title">SandPaper.</h1>
      )}

      <Link to="/add-doc" id="add">
        <i className="fa-solid fa-plus"></i>
      </Link>
    </div>
  );
};

export default Home;

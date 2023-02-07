import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import styled from "styled-components";
import Axios from "axios";
import swal from "sweetalert";

const Modals = ({ props }) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  const handleDelete = async(email) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this user!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
     .then((willDelete) => {
          if (willDelete) {
                 Axios.delete(
                    `http://localhost:5001/admin/${email}`
                  );
          } else {
                //  swal("The user is safe!");
      }
   });
 
  };

  const handleEdit = (props) => {

    swal({
        title: "Are you sure you want to do it admin?",
        // text: "Once deleted, you will not be able to recover this user!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
     .then((willDelete) => {
          if (willDelete) {
                 Axios.put(
                    `http://localhost:5001/admin/upgrade/${props.email}`
                  );
          } else {
                 swal(`${props.name} is now an admin`);
      }
   });

  
  };

  return (
    <div>
      <EditButtonTable onClick={openModal1}>
        {" "}
        <img src="Group 6.png" alt="pencil"></img>
      </EditButtonTable>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>User: {props.name}</h3>
        <p>Email: {props.email} </p>
        <p>Age: {props.age} </p>
        <Edit onClick={() => handleEdit(props)}>Do it admin</Edit>
        <Delete onClick={() => handleDelete(props.email)}>Delete</Delete>
      </Modal>
    </div>
  );
};

const EditButtonTable = styled.button`
  border: none;

  background-color: transparent;
`;

const Edit = styled.button`
 background-color:
rgba(191, 215, 50, 1);
  border: none;
  height: 40px;
  width: 100px;
  border-radius: 20px;
  margin-top: 40px;
`;
const Delete = styled.button`
  background-color: #444444;
  color:white;
  border: none;
  height: 40px;
  width: 70px;
  border-radius: 20px;
  margin-left: 40px;
  margin-top: 40px;
`;
export default Modals;

import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddNewUser }) => {
  const nameIpnputRef = useRef()
  const ageIpnputRef = useRef()

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameIpnputRef.current.value;
    const enteredAge = ageIpnputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title : 'Invalid Input',
            message : 'please enter a valid name and age'
        });
      return;
    }

    if (+enteredAge < 0) {
        setError({
            title : 'Invalid Age',
            message : 'Age must be greater than 0'
        });
    
      return;
    }

    onAddNewUser({ name: enteredName, age: +enteredAge, id: new Date().getTime() });
    nameIpnputRef.current.value ='';
    ageIpnputRef.current.value ='';
  };

  const closeModalHandler = () => setError();

  return (
    <>
      {error && (
        <Modal title={error.title} closeModal={closeModalHandler}>
          {error.message}
        </Modal>
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameIpnputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageIpnputRef}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddNewUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const userNameChangeHandler = (e) => setName(e.target.value);
  const ageChangeHandler = (e) => setAge(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
        setError({
            title : 'Invalid Input',
            message : 'please enter a valid name and age'
        });
      return;
    }

    if (+age < 0) {
        setError({
            title : 'Invalid Age',
            message : 'Age must be greater than 0'
        });
    
      return;
    }

    onAddNewUser({ name: name, age: +age, id: new Date().getTime() });
    setName("");
    setAge("");
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
            value={name}
            type="text"
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            value={age}
            type="number"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

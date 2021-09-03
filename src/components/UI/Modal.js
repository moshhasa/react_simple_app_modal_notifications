import React from 'react'
import Button from './Button';
import Card from './Card'
import styles from './Modal.module.css';


const Modal = ({title, children, closeModal}) => {
    return (
        <>
            <div className={styles.backdrop } onClick={closeModal}></div>
            <Card className={styles.modal}>

                <header  className={styles.header}>
                    <h2>{title}</h2>
                </header>
                <div className={styles.content}>
                    {children}
                </div>
                <footer className={styles.actions }>
                    <Button onClick={closeModal}>Okay</Button>
                </footer>
            </Card>
        </>
    )
}

export default Modal

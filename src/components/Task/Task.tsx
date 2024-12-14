import React from "react";
import styles from './Task.module.css'




const Task = () => {
    return(
        <div className={styles.task}>
            <div className={styles.title}>
                <h1>1. Hello, world!</h1>
            </div>
            <div className={styles.description}>
                <p>
                    Выведите в консоль сообщение "Hello, world!".
                </p>
                <span >
                    P.S. Так как бэкэнд статичный и он не компилирует код в реальном времени, вводите в консоль команду console.log('Hello, world!'), дял ЯП Go - fmt.Println("Hello, world!"). Любое другое действие приведет к ошибке.
                </span>
            </div>
        </div>
    )
}



export default Task



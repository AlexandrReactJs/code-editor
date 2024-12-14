import React from "react";
import styles from './Result.module.css'
import { Terminal } from "lucide-react"

interface Props {
    result: string | any
}


const Result = (props: Props) => {
    return (
        <div className={styles.result}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <Terminal color="#68ffa7" size={22} />
                    <p>Result</p>
                </div>
            </div>

            <div>
                {
                    props.result.status === 'success' ?
                        <div className={styles.success}>
                            <p>{props.result.output}</p>
                        </div>
                        :
                        <div className={styles.error}>
                            <p>{props.result.error}</p>
                        </div>

                }
            </div>
        </div>
    )
}


export default Result;
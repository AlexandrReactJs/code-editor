import React from "react";
import { CodeXml, ArrowDown, Play } from 'lucide-react'
import styles from './Header.module.css'
import axios from "axios";

interface Props {
    lang: string;
    value: string;
    setLang: (lang: string) => void;
    setResult: (result: string) => void;
}

const Header = (props: Props) => {

    const [openLanguagesList, setOpenLanguagesList] = React.useState(false)
    const [languageList] = React.useState(["javascript", "golang"])

    const fetchResult = (value: string, language: string) => {
        axios.post('/api/execute', {language: language, code: value}).then(res => props.setResult(res.data)) 
    }

    

   
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <CodeXml color="#68ffa7" size={22} />
                <p>Code</p>

            </div>

            <div className={styles.selectLanguage}  onClick={() => { setOpenLanguagesList(!openLanguagesList) }}>
                <p>{props.lang}</p>
                <ArrowDown color="#fff" size={22} />
            </div>

            <div className={styles.runCodeBtn} onClick={() => {fetchResult(props.value, props.lang)}}>
                <p>Run</p>
                <Play size={20} color="#68ffa7" strokeWidth={3}/>
            </div>

            {
                openLanguagesList &&
                <div className={styles.languagesList}>
                    {languageList.map((item, index) => (<p onClick={() => {props.setLang(item); setOpenLanguagesList(!openLanguagesList)}} className={styles.language} key={index}>{item}</p>))}
                </div>
            }

        </div>
    )
}



export default Header;
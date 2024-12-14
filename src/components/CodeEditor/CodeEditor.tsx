import React from "react";
import styles from './CodeEditor.module.css';
import AceEditor from 'react-ace';
import Header from "./Header/Header.tsx";

import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import 'ace-builds/webpack-resolver';
import Result from "./Result/Result.tsx";


const CodeEditor = () => {
    function onChange(newValue: string) {
        setValue(newValue)
    }

    const [lang, setLang] = React.useState("javascript")
    const [value, setValue] = React.useState("")
    const [result, setResult] = React.useState("")
    

    return (
        <div className={styles.CodeEditor}>
            <Header lang={lang} setLang={setLang} setResult={setResult} value={value}/>
            <div>
                <AceEditor
                    mode={lang}
                    theme="monokai"
                    onChange={onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    width="100%"
                    height="60vh"
                    value={value}
                />
                <Result result={result}/>
            </div>

        </div>
    )
}



export default CodeEditor;
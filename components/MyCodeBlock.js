import React, { useState } from 'react'
import { atomOneDark, atomOneLight, CodeBlock, dracula } from 'react-code-blocks'
import { FaRegCopy } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";



const MyCodeBlock = ({code,lang}) => {
    const [copied, setCopied] = useState(false);
    function handleCopy(v){

        setCopied(true)
        navigator.clipboard.writeText(code)
        setTimeout(() => {
            setCopied(false)
        }, 2000);
    }

  return (
    <>
    <div className='timepass' style={{backgroundColor: '#333336', color: 'white',marginRight: '3vh'}}>
        <div style={{display: 'flex', justifyContent: 'end' , alignContent: 'end'}}>
        {copied? <SiTicktick size={20} style={{ padding: '5px',marginRight: '10px'}}/> : <FaRegCopy size={20}  onClick={handleCopy} style={{cursor: 'pointer', padding: '5px',marginRight: '10px'}}/>}
        </div>
    <CodeBlock  theme={dracula} text={code} language={lang} showLineNumbers customStyle={{fontWeight: 'bold'}} />
    </div>
    
    </>
  )
}

export default MyCodeBlock
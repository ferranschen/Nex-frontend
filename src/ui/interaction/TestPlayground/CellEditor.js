import { Editor } from "@monaco-editor/react"
const CellEditor = ({code}) => {
    return (
        // disable focus line
        <Editor defaultLanguage="python" defaultValue={code.trim()} options={
            {
                fontSize: 14,
                minimap: {
                    enabled: false
                },
                contextmenu: false,

                scrollbar: {
            vertical: 'hidden'
        },
            }
        } 
         className="rounded-lg"
        />
    )
}

export default CellEditor
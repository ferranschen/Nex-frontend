import React, { useEffect, useRef } from 'react';
import { Editor } from '@monaco-editor/react';
import { CellSkeleton } from 'ui/skeleton/Skeleton';
import _ from 'lodash'; // Assuming Lodash is available for debouncing

const CellEditor = ({ code }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        // Define the debounced resize function inside the effect
        const debouncedResize = _.debounce(() => {
            if (editorRef.current) {
                editorRef.current.layout();
            }
        }, 300); // Adjust debounce time as needed

        // Add the resize event listener with the debounced function
        window.addEventListener('resize', debouncedResize);

        // Cleanup function that removes the resize event listener
        return () => {
            window.removeEventListener('resize', debouncedResize);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <Editor
            onMount={(editor) => {
                editorRef.current = editor; // Store the editor instance for use in the debounced function
            }}
            defaultLanguage="python"
            defaultValue={code.trim()}
            options={{
                fontSize: 14,
                minimap: { enabled: false },
                contextmenu: false,
                scrollbar: { vertical: 'hidden' },
            }}
            className="rounded-lg"
            loading={<CellSkeleton />}
        />
    );
};

export default CellEditor;

//^ CK EDITOR PAGE
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from './ckeditor.ts';


import React from 'react'

const CkEditor = () => {
  return (
    <div className="App">
      <h2>Using CKEditor&nbsp;5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor&nbsp;5!</p>"
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event) => {
          console.log(event);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </div>
  )
}

export default CkEditor
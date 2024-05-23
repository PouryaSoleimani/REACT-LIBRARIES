//^ CK EDITOR PAGE
import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from './ckeditor.ts';


const CkEditor = () => {
  return (
    <div className="w-screen h-screen">
      <h2 className='text-white text-2xl font-bold text-center py-6'>Using CKEditor&nbsp;5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<h1>Hello from CKEditor&nbsp;5!</h1>"
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
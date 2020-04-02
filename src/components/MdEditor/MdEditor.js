import React from 'react';
import {TextArea, Form} from 'semantic-ui-react';


const MdEditor = (props) => {

  function textChanged(event) {
    props.change(event.target.value);
  }

  return (
    <Form className='mdEditor'>
      <TextArea id="editor" rows="25" style={{ minHeight: "500px" }} value={props.content} onChange={textChanged}></TextArea>
    </Form>
  );
}

export default MdEditor;

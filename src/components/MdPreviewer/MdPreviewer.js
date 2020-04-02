import React from 'react';
import { MarkdownPreview } from 'react-marked-markdown'
import marked from 'marked'

const MdPreviewer = (props) => {

  return (
    <div id="preview"  className='mdPreview' dangerouslySetInnerHTML={{__html: marked(props.content, {breaks:true})}}>
    </div>
  );
}

export default MdPreviewer;

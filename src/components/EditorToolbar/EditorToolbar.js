import React from 'react';
import {Button, Icon} from 'semantic-ui-react';
import Search from '../search/Search'


function EditorToolbar() {
  return (
    <div className="editorToolbar">
        <Search />
        <Button>
            <Icon name='download' />  Save to disk
        </Button>
  </div>
  );
}

export default EditorToolbar;

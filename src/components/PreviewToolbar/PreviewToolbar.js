import React from 'react';
import {Button, Icon} from 'semantic-ui-react';


function PreviewToolbar() {
  return (
    <div className="previewToolbar">
        <Button>
            <Icon name='cloud upload' /> Upload to the cloud
        </Button>
        
  </div>
  );
}

export default PreviewToolbar;

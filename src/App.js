import React, {useState} from 'react';
import {
  Container,
  Grid,
  Menu,
  Header
} from 'semantic-ui-react';

import MdEditor from './components/MdEditor/MdEditor';
import MdPreviewer from './components/MdPreviewer/MdPreviewer';

import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import EditorToolbar from './components/EditorToolbar/EditorToolbar';
import PreviewToolbar from './components/PreviewToolbar/PreviewToolbar';

import sampleText from './sample';

function App() {
  const [content, setContent] = useState(sampleText);

  function handleChange(value) {
    setContent(value);
  }

  return (
    <div className="App">
      <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
        <FontAwesomeIcon icon={faMarkdown} style={{marginRight:'0.5em'}} />
          FCC Markdown Previewer
        </Menu.Item>
       </Container>
      </Menu>
      <Container>
        <Grid columns="2">
          <Grid.Column>
            <Header size='large' inverted>Markdown Editor</Header>
            {/* <EditorToolbar /> */}
            <MdEditor content={content} change={handleChange}/>
          </Grid.Column>
          <Grid.Column>
            <Header size='large' inverted>Preview</Header>
            {/* <PreviewToolbar /> */}
            <MdPreviewer content={content} />
          </Grid.Column>
        </Grid>
        
      </Container>
      
    </div>
  );
}

export default App;

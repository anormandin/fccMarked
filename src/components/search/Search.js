import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react'
import SearchBar from './SearchBar'

export default class ModalExampleControlled extends Component {
    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
                trigger={<Button onClick={this.handleOpen}>
                            <Icon name='github' /> Load from Github
                         </Button>}
                dimmer="blurring"
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <Header icon='github' content='Load file from Github repository' />
                <Modal.Content image>
                    <Modal.Description>
                        <Header>Select a repository to choose a file</Header>
                        <p>Search by username. The repository must have public access for you to find it.</p>
                        <SearchBar />
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.handleClose}>
                        <Icon name='checkmark' /> Got it
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

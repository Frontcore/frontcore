'use strict';

import React from 'react';
import Dropzone from 'react-dropzone';
import './CreateProject.less';
import { Button, Panel, Form, FormGroup, FormControl, ControlLabel, ProgressBar } from 'react-bootstrap';

class MyProjects extends React.Component {
  constructor() {
    super();

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    console.log('Received files: ', files);
  }

  render() {
    let header = (
      <h3><strong>Create a new project</strong></h3>
    );

    return (
      <Panel className="create-project-component" header={header}>
        <Form>
          <FormGroup controlId="formControlsFile">
            <ControlLabel>Upload frontcore configuration JSON file:</ControlLabel>
            <Dropzone accept="application/json" multiple={false} className="dropzone-box" onDrop={this.onDrop}>
              <div className="lead dropzone-label">Try dropping file here, or click to select file to upload.</div>
            </Dropzone>
          </FormGroup>
          <ProgressBar now={60} />
          <Button type="submit" bsStyle="primary">Create Project</Button>
          <Button className="pull-right" type="button" bsStyle="success">Help</Button>
        </Form>
      </Panel>
    );
  }
};

module.exports = MyProjects;

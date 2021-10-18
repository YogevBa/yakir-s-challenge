import React, { useState } from 'react';
import { Button, Form } from 'reactstrap';

const StreamDataForm = ({ handleSubmit }) => {
  return (
    <div>
      <Form>
        <Button color='warning' onClick={handleSubmit}>
          Get Data
        </Button>
      </Form>
    </div>
  );
};

export default StreamDataForm;

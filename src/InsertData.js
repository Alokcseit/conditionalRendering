import React from 'react'
import { Form ,Input,FormGroup } from 'reactstrap'
function InsertData() {
  return (
    <div>
       <Form>
      <FormGroup>
        <Input type="text" name="text" id="exampleText" placeholder="Enter your name" />
      </FormGroup>
       </Form>
    </div>
  )
}

export default InsertData

import React, { useEffect, useState } from 'react';
import {Button, Form, InputGroup, DropdownButton, Dropdown, Modal } from 'react-bootstrap';
import Icon from '../components/icons';

function AddNew(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <div data-cy="modal-tambah-list-item">
      <Modal.Header closeButton>
      <Modal.Title>Tambah List Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>NAMA LIST ITEM</Form.Label>
                <Form.Control type="text"
                placeholder="Tambahkan nama list item"
                autoFocus />
                <Form.Label className="pt-3">PRIORITY</Form.Label>
                <Dropdown id="priority" >
                  <Dropdown.Toggle variant="default" className="border border-1" id="dropdown-priority">
                    <Icon.veryHigh className="pe-2"/> Very High <Icon.tablerChevronDown/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      <Dropdown.Item data-cy="veryHigh" href="#"><Icon.veryHigh/> Very High <Icon.checkSort/></Dropdown.Item> <Dropdown.Divider />
                      <Dropdown.Item data-cy="high" href="#"><Icon.high/> High </Dropdown.Item> <Dropdown.Divider />
                      <Dropdown.Item data-cy="medium" href="#"><Icon.medium/> Medium </Dropdown.Item> <Dropdown.Divider />
                      <Dropdown.Item data-cy="low" href="#"><Icon.low/> Low </Dropdown.Item> <Dropdown.Divider />
                      <Dropdown.Item data-cy="veryLow" href="#"><Icon.veryLow/> Very Low </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
          </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
      Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
      Save
      </Button>
      </Modal.Footer>
      </div>
    )
}
export default AddNew

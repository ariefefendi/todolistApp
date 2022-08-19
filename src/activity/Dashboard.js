import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import axios from 'axios';
import '../assets/css/custom.css';
// import ReactDOM from 'react-dom'
import {Button, Form, InputGroup, DropdownButton, Dropdown, Badge, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

import TambahListItem from './TambahListItem';

import DataTable from 'react-data-table-component';
import helpers from '../components/helpers';
import Icon from '../components/icons';
import Image from '../components/images';
import IconDelete from '../assets/icons/modalDeleteIcon.svg'; // Icon for alert delete
import IconSuccessDelete from '../assets/icons/modalInformationIcon.svg'; // Icon for alert success delete

import $ from 'jquery';

axios.defaults.baseURL = 'https://todo.api.devcode.gethired.id/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  const [dataModel, setDataModel] = useState([])
  const [dataModelTodoItems, setDataModelTodoItems] = useState([])
  // const [processing, modeProcessing] = useState(false)
  const [mode, setMode] = useState("dashboard")
  const [TitlaCard, setTitlaCard] = useState(false)
  const [itemLists, setItemLists] = useState(0)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // function back
  const goBack = (key) => {
    setDataModel([])
    getItemsActivity()
    setMode('dashboard')
    setTitlaCard(false)
  }

 // component ActivityItem
  const ActivityItem = (props) => {
    let R = props.recordMaterial;
    let created_at = Moment(R.created_at).format('DD MMMM YYYY')
    return (
          <div className="card shadow bg-body rounded-4" >
              <div className="card-header cursor" onClick={(key) => selectActivity(R)}>
                <h5 className="card-title fw-bolder">{(R.title === "") ? "..." : R.title }</h5>
              </div>
              <div className="card-body">
                  <p className="card-text py-5"></p>
                  <div className="row align-items-start">
                    <div className="col-md-9" >
                      <p className="fs-6 text-muted mb-0 mt-1">{created_at}</p>
                    </div>
                    <div className="col-md-3 d-flex flex-row-reverse bd-highlight">
                      <a href="#" className="btn btn-sm btn-default" onClick={(key) => removeActivity(R)}><Icon.Delete /></a>
                    </div>
                  </div>
              </div>
          </div>
      )
  }

  // button mode Update
  const ButtonMode = () => {
    return (
      (mode === "dashboardActivity") ?
      <div className="row py-4 align-items-center" data-cy="todo-title">
          <div className="col-md-8 col-9 ps-0">
            <h5 className="mb-0 font-36 fw-bold font-mobile-20">
            <Button type="button" data-cy="todo-title-back-button" className="btn btn-sm pe-0" onClick={(key) => goBack('dashboard')} variant="outline-secondary"><Icon.Back /></Button>
            {(TitlaCard === false) ? "" : TitlaCard}
            <Button type="button" data-cy="todo-title-edit-button" className="btn btn-sm" id="btnTodoTitleEdit" variant="outline-secondary"><Icon.Edit /></Button>
            </h5>
          </div>
          <div className="col-md-4 col-3 d-flex flex-row-reverse bd-highlight" data-cy="todo-title-add-button" >
            <button type="button" className="btn btn-primary rounded-pill px-3 fw-600 font-18" onClick={handleShow} >
                <span className="d-block d-md-none"><Icon.Add /></span>
                <span className="d-none d-md-block"><Icon.Add /> &nbsp; Tambah</span>
            </button>
            <div data-cy="sort">
               <DropdownButton variant="btn btn-default btn-outline-secondary btn-circle btn-xl border border-1 me-2" title={<Icon.ArrowsSort/>}
               id="ArrowsSort" >
               <Dropdown.Item data-cy="sort-latest" href="#"><Icon.sortLatest/> Terbaru <Icon.checkSort/> </Dropdown.Item> <Dropdown.Divider />
               <Dropdown.Item data-cy="" href="#"><Icon.sortOldest/> Terlama </Dropdown.Item> <Dropdown.Divider />
               <Dropdown.Item data-cy="" href="#"><Icon.sort_az/> A-Z </Dropdown.Item> <Dropdown.Divider />
               <Dropdown.Item data-cy="" href="#"><Icon.sort_za/> Z-A </Dropdown.Item> <Dropdown.Divider />
               <Dropdown.Item data-cy="" href="#"><Icon.sortUnfinished/> Belum Selesai </Dropdown.Item>
               </DropdownButton>
           </div>
          </div>
      </div> :
        <div className="row py-4 align-items-center" data-cy="todo-title">
          <div className="col-md-7 col-4">
            <h5 className="mb-0 font-36 fw-bold font-mobile-20">Activity</h5>
          </div>
          <div className="col-md-5 col-8 d-flex flex-row-reverse bd-highlight">
              <button data-cy="todo-title-add-button" type="button" className="btn btn-primary rounded-pill px-3 fw-600 font-18">
               <span className="d-block d-md-none"><Icon.Add /></span>
               <span className="d-none d-md-block"><Icon.Add /> &nbsp; Tambah</span>
               </button>
            </div>
        </div>
    )
  }

  // get data items from group activity
  const getItemLists = async (id) => {
    try {
      console.log(id);
      let res = await axios.get(`todo-items?activity_group_id=${id}`) // ${id} 23754713
        let records = res.data.data;
        setItemLists(records.length)
        records.length > 0 ? setDataModelTodoItems(records) : setDataModelTodoItems([])
      } catch (e) {
        console.log(e.message);
      }
  }
  // get data card activity dashboard
  const getItemsActivity = async () => {
    try {
      let res = await axios.get(`activity-groups`,{mode:'cors'})
        let records = res.data.data;
        records.length > "1" ? setDataModel(records) : setDataModel([])
      } catch (e) {
        console.log(e.message);
      }
    }
    // Select Activity
    const selectActivity = (result) => {
      // modeProcessing(true)
      getItemLists(result.id)
      setMode("dashboardActivity")
      setTitlaCard(result.title)
    }
    // Remove data card activity
    const removeActivity = async (req) => {
      const MySwal = withReactContent(Swal)
      MySwal.fire({
        imageUrl: IconDelete,
        imageWidth: 62.98, imageHeight: 56.11,
        html: '<strong><h5 className="fs-4 fw-400">Apakah anda yakin menghapus activity</h5>'+'<p className="fs-4 fw-500">“'+req.title+'”?<p></strong>',
        buttonsStyling: false, showCancelButton: true,
        cancelButtonText: 'Batal', confirmButtonText: 'Hapus',
        customClass: {
          confirmButton: 'btn btn-light rounded-pill fs-6 me-2 px-4',
          cancelButton: 'btn btn-danger rounded-pill fs-6 px-4'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            const res = axios.delete(`activity-groups/${req.id}`)
            // console.log('Item successfully deleted. id : ',req.id)
            const Toast = Swal.mixin({
              toast: true, position: 'top-end',
              showConfirmButton: false, timer: 3500, timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            Toast.fire({
              icon: 'success', customClass: { text: "fw-normal" }, text: 'Activity berhasil dihapus'
            })
            getItemsActivity()
          } catch (error) {
            MySwal.fire("Activity gagal dihapus!", { icon: "warning", error});
          }
        }
      })
    }

    useEffect(() => {
      getItemsActivity();
    }, []);

    return(
      <div>
          <nav
          data-cy="header-background To-Do-List-App"
          className="navbar py-4" >
              <div className="container">
                  <a className="navbar-brand font-24 fw-white fw-bold" href="#">To Do List App</a>
              </div>
          </nav>

          <div data-cy="todo-back-button && todo-title-edit-button && todo-add-button"
          className="container" >
          { <ButtonMode/> }
          </div>

      <div className="container MainDiv">
      <div className="row">
      { mode === "dashboard" ?
        <>
        {
        dataModel ?
        dataModel.map((dataModel, index) => {
          return (
            <div className="col-md-3 mt-4" data-cy="activity-item" key={dataModel.id} >
              <ActivityItem recordMaterial={{
                id: dataModel.id,
                title: dataModel.title,
                created_at: dataModel.created_at,
              }} />
              </div>
            )
          }) :
          <div data-cy="activity-empty-state">
            <div className="text-center">
              <Image.ActivityEmptyState />
            </div>
          </div>
        }
        </>
       :
       <div data-cy="item-list">
       { (itemLists > 0) ?
         dataModelTodoItems.map((dataModelTodoItems, index) => {
           return (
             <div data-cy="todo-item" className="shadow bg-body rounded-3" key={dataModelTodoItems.id} >
             <InputGroup className="mb-2 ps-2" id="btnTodoItem">
               <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <Badge pill bg="" className="mt-4"><Icon.high/></Badge>
                <Form.Control aria-label="Text input with checkbox" className="py-4" value={dataModelTodoItems.title} disabled />
                <Button variant="outline-secondary" id="btnTodoItemEdit"><Icon.Edit/></Button>
                <Button variant="outline-secondary" id="btnTodoItemDelete"><Icon.Delete/></Button>
              </InputGroup>
              </div>
            )
        })
          :
          <div data-cy="todo-empty-state">
            <div className="text-center">
              <Image.TodoEmptyState />
            </div>
          </div>
        }
       </div>
     }
      </div>
      </div>
          <div data-cy="tambah-list-item">
            <Modal show={show} onHide={handleClose}>
               <TambahListItem />
            </Modal>
          </div>
      </div>
    );
  }
  export default App;

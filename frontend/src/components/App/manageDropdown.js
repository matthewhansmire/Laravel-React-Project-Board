import React, { Component } from 'react';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { Icons } from '../../constants';

class ManageDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singlebtn: false
    }
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.singlebtn}
          toggle={() =>
            this.setState({ singlebtn: !this.state.singlebtn })
          }
          className="d-flex align-items-center"
        >
          <DropdownToggle className="btn btn-sm bg-white border-dark align-self-center" style={{ width: 100 }} caret>
            <span className="text-dark font-size-14">Manage</span>{" "}<i className="mdi mdi-chevron-down text-dark font-size-14"></i>
          </DropdownToggle>
          <DropdownMenu center="true">
            <div className="d-flex px-2">
              <span className="d-none d-xl-inline-block ml-1 align-self-center font-size-14"><b>Manage</b></span>
            </div>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/workflows'}>              
              <i className={`${Icons.workflows} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Workflows')}
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/taskLabels'}>
              <i className={`${Icons.taskLabels} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Task labels')}
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/projectCategories'}>
              <i className={`${Icons.projCategories} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Project categories')}
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/projectStatuses'}>
              <i className={`${Icons.projStatuses} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Project statuses')}
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/requestForms'}>
              <i className={`${Icons.requestForms} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Request forms')}
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/trash'}>
              <i className={`${Icons.trash} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Trash')}
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/customRoles'}>
              <i className={`${Icons.customRoles} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Custom roles')}
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/bulkAllocation'}>
              <i className={`${Icons.bulkAllocation} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Bulk allocation')}
              <span className="badge badge-info font-size-12 text-white d-flex justify-content-center align-items-center ml-2" style={{ width: 30, height: 15 }}>new</span>
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/appsIntegrations'}>
              <i className={`${Icons.appsIntegrations} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Apps/Integrations')}
              <span className="badge badge-info font-size-12 text-white d-flex justify-content-center align-items-center ml-2" style={{ width: 30, height: 15 }}>new</span>
            </DropdownItem>

            <div className="dropdown-divider"></div>

            <div className="d-flex px-2">
              <span className="d-none d-xl-inline-block ml-1 align-self-center font-size-14"><b>Account / billing</b></span>
            </div>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/managePlan'}>
              <i className={`${Icons.managePlan} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Manage plan')}
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/storage'}>
              <i className={`${Icons.storage} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Storage')}
              <span className="badge badge-info font-size-12 text-white d-flex justify-content-center align-items-center ml-2" style={{ width: 30, height: 15 }}>new</span>
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/invoices'}>
              <i className={`${Icons.invoices} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Invoices')}
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/paymentBilling'}>
              <i className={`${Icons.paymentBilling} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Payment / billing')}
            </DropdownItem>

            <div className="dropdown-divider"></div>

            <div className="d-flex px-2">
              <span className="d-none d-xl-inline-block ml-1 align-self-center font-size-14"><b>ProjHub settings</b></span>
            </div>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/company'}>
              <i className={`${Icons.company} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Company')}
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/customDomain'}>
              <i className={`${Icons.customDomain} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Custom domain')}              
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/preferences'}>
              <i className={`${Icons.preferences} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Preferences')}
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/importExport'}>
              <i className={`${Icons.importExport} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Import / export')}
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={()=>window.location.href='/manage/viewLogs'}>
              <i className={`${Icons.viewLogs} font-size-16 align-middle mr-1`}></i>
              {this.props.t('View logs')}
            </DropdownItem>
            
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default withRouter(withNamespaces()(ManageDropdown));
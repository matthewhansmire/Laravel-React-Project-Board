import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Button, Progress } from "reactstrap";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { Icons } from '../../constants';

import Workflows from './Workflows';
import TaskLabels from './TaskLabels';
import ProjectCategories from './ProjectCategories';
import ProjectStatuses from './ProjectStatuses';
import RequestForms from './RequestForms';
import Trash from './Trash';
import CustomRoles from './CustomRoles';
import BulkAllocation from './BulkAllocation';
import AppsIntegrations from './AppsIntegrations';
import ManagePlan from './ManagePlan';
import Storage from './Storage';
import Invoices from './Invoices';
import PaymentBilling from './PaymentBilling';
import Company from './Company';
import CustomDomain from './CustomDomain';
import Preferences from './Preferences';
import ImportExport from './ImportExport';
import ViewLogs from './ViewLogs';

class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageId: '',
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({ pageId: params.id });
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col className="col-6 d-flex ml-5" style={{ position: 'fixed', top: 15, zIndex: 1003 }}>
                <div className="d-flex align-items-center">
                  <i className={`${Icons.preferences} font-size-24`}></i>
                  <span className="font-size-24 ml-2 mr-5">Manage</span>
                </div>
              </Col>
            </Row>

            <Row>
              <Col id="leftPanel" className="col-2 border">
                <b>Manage</b>
                <div className="px-3 py-1">
                  <Link to='/manage/workflows' className="py-2 d-flex" style={this.state.pageId == 'workflows' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'workflows' })}>
                    <i className={`${Icons.workflows} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Workflows')}
                  </Link>
                  <Link to='/manage/taskLabels' className="py-2 d-flex" style={this.state.pageId == 'taskLabels' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'taskLabels' })}>
                    <i className={`${Icons.taskLabels} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Task labels')}
                  </Link>
                  <Link to='/manage/projectCategories' className="py-2 d-flex" style={this.state.pageId == 'projectCategories' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'projectCategories' })}>
                    <i className={`${Icons.projCategories} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Project categories')}
                  </Link>
                  <Link to='/manage/projectStatuses' className="py-2 d-flex" style={this.state.pageId == 'projectStatuses' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'projectStatuses' })}>
                    <i className={`${Icons.projStatuses} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Project statuses')}
                  </Link>
                  <Link to='/manage/requestForms' className="py-2 d-flex" style={this.state.pageId == 'requestForms' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'requestForms' })}>
                    <i className={`${Icons.requestForms} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Request forms')}
                  </Link>
                  <Link to='/manage/trash' className="py-2 d-flex" style={this.state.pageId == 'trash' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'trash' })}>
                    <i className={`${Icons.trash} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Trash')}
                  </Link>
                  <Link to='/manage/customRoles' className="py-2 d-flex" style={this.state.pageId == 'customRoles' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'customRoles' })}>
                    <i className={`${Icons.customRoles} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Custom roles')}
                  </Link>
                  <Link to='/manage/bulkAllocation' className="py-2 d-flex" style={this.state.pageId == 'bulkAllocation' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'bulkAllocation' })}>
                    <i className={`${Icons.bulkAllocation} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Bulk allocation')}
                    <span className="badge badge-info font-size-12 text-white d-flex justify-content-center align-items-center ml-2" style={{ width: 30, height: 15 }}>new</span>
                  </Link>
                  <Link to='/manage/appsIntegrations' className="py-2 d-flex" style={this.state.pageId == 'appsIntegrations' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'appsIntegrations' })}>
                    <i className={`${Icons.appsIntegrations} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Apps/Integrations')}
                    <span className="badge badge-info font-size-12 text-white d-flex justify-content-center align-items-center ml-2" style={{ width: 30, height: 15 }}>new</span>
                  </Link>
                </div>

                <br />
                <b>Account / billing</b>
                <div className="px-3 py-1">
                  <Link to='/manage/managePlan' className="py-2 d-flex" style={this.state.pageId == 'managePlan' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'managePlan' })}>
                    <i className={`${Icons.managePlan} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Manage plan')}
                  </Link>
                  <Link to='/manage/storage' className="py-2 d-flex" style={this.state.pageId == 'storage' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'storage' })}>
                    <i className={`${Icons.storage} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Storage')}
                    <span className="badge badge-info font-size-12 text-white d-flex justify-content-center align-items-center ml-2" style={{ width: 30, height: 15 }}>new</span>
                  </Link>
                  <Link to='/manage/invoices' className="py-2 d-flex" style={this.state.pageId == 'invoices' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'invoices' })}>
                    <i className={`${Icons.invoices} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Invoices')}
                  </Link>
                  <Link to='/manage/paymentBilling' className="py-2 d-flex" style={this.state.pageId == 'paymentBilling' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'paymentBilling' })}>
                    <i className={`${Icons.paymentBilling} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Payment/billing')}
                  </Link>
                </div>

                <br />
                <b>ProjHub settings</b>
                <div className="px-3 py-1">
                  <Link to='/manage/company' className="py-2 d-flex" style={this.state.pageId == 'company' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'company' })}>
                    <i className={`${Icons.company} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Company')}
                  </Link>
                  <Link to='/manage/customDomain' className="py-2 d-flex" style={this.state.pageId == 'customDomain' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'customDomain' })}>
                    <i className={`${Icons.customDomain} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Custom domain')}
                  </Link>
                  <Link to='/manage/preferences' className="py-2 d-flex" style={this.state.pageId == 'preferences' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'preferences' })}>
                    <i className={`${Icons.preferences} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Preferences')}
                  </Link>
                  <Link to='/manage/importExport' className="py-2 d-flex" style={this.state.pageId == 'importExport' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'importExport' })}>
                    <i className={`${Icons.importExport} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Import/export')}
                  </Link>
                  <Link to='/manage/viewLogs' className="py-2 d-flex" style={this.state.pageId == 'viewLogs' ? { color: '#50a5f1' } : { color: '#495057' }} onClick={() => this.setState({ pageId: 'viewLogs' })}>
                    <i className={`${Icons.viewLogs} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('View logs')}
                  </Link>
                </div>

                <div className="px-3 py-2 my-2 border bg-white" style={{ minHeight: 150 }}>
                  <div className="d-flex">
                    <i className={`${Icons.project} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Projects')}
                    <i className="text-secondary"> (20%)</i>
                  </div>
                  <Progress className="ml-3 my-1" color="primary" value={20}></Progress>
                  <div className="ml-3 my-1 text-secondary">1 / 9999</div>

                  <div className="d-flex mt-3">
                    <i className={`${Icons.storage} font-size-16 align-middle mr-1`}></i>
                    {this.props.t('Storage')}
                    <i className="text-secondary"> (40%)</i>
                  </div>
                  <Progress className="ml-3 my-1" color="primary" value={40}></Progress>
                  <div className="ml-3 my-1 text-secondary">40GB / 100GB</div>

                  <div className="d-flex justify-content-center mt-3">
                    <Button color="success w-75 btn-sm" type="submit" style={{ width: '100%' }}>Upgrade now!</Button>
                  </div>
                </div>
              </Col>

              <Col id="rightPanel" className="col-10 border">
                {
                  this.state.pageId === 'workflows' && <Workflows />
                }
                {
                  this.state.pageId === 'taskLabels' && <TaskLabels />
                }
                {
                  this.state.pageId === 'projectCategories' && <ProjectCategories />
                }
                {
                  this.state.pageId === 'projectStatuses' && <ProjectStatuses />
                }
                {
                  this.state.pageId === 'requestForms' && <RequestForms />
                }
                {
                  this.state.pageId === 'trash' && <Trash />
                }
                {
                  this.state.pageId === 'customRoles' && <CustomRoles />
                }
                {
                  this.state.pageId === 'bulkAllocation' && <BulkAllocation />
                }
                {
                  this.state.pageId === 'appsIntegrations' && <AppsIntegrations />
                }
                {
                  this.state.pageId === 'managePlan' && <ManagePlan />
                }
                {
                  this.state.pageId === 'storage' && <Storage />
                }
                {
                  this.state.pageId === 'invoices' && <Invoices />
                }
                {
                  this.state.pageId === 'paymentBilling' && <PaymentBilling />
                }
                {
                  this.state.pageId === 'company' && <Company />
                }
                {
                  this.state.pageId === 'customDomain' && <CustomDomain />
                }
                {
                  this.state.pageId === 'preferences' && <Preferences />
                }
                {
                  this.state.pageId === 'importExport' && <ImportExport />
                }
                {
                  this.state.pageId === 'viewLogs' && <ViewLogs />
                }
              </Col>
            </Row>

          </Container> 

        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withNamespaces()(Manage));
// import React, { PureComponent, Fragment } from 'react';
// import { connect } from 'dva';
// import moment from 'moment';
// import {
//   Row,
//   Col,
//   Card,
//   Form,
//   Input,
//   Select,
//   Icon,
//   Button,
//   Dropdown,
//   Menu,
//   InputNumber,
//   DatePicker,
//   Modal,
//   message,
//   Badge,
//   Divider,
//   Steps,
//   Radio,
// } from 'antd';
// import StandardTable from '@/components/StandardTable';
// import PageHeaderWrapper from '@/components/PageHeaderWrapper';
// import styles from './UsersManage.less';
//
// /* eslint react/no-multi-comp:0 */
// @connect(({ rule, loading }) => ({
//   rule,
//   loading: loading.models.rule,
// }))
// @Form.create()
// class UserList extends PureComponent {
//   state = {
//     modalVisible: false,
//     updateModalVisible: false,
//     expandForm: false,
//     selectedRows: [],
//     formValues: {},
//     stepFormValues: {},
//   };
//
//   columns = [
//     {
//       title: '规则名称',
//       dataIndex: 'name',
//     },
//     {
//       title: '描述',
//       dataIndex: 'desc',
//     },
//     {
//       title: '服务调用次数',
//       dataIndex: 'callNo',
//       sorter: true,
//       align: 'right',
//       render: val => `${val} 万`,
//       // mark to display a total number
//       needTotal: true,
//     },
//     {
//       title: '状态',
//       dataIndex: 'status',
//       filters: [
//         {
//           text: true,
//           value: 0,
//         },
//         {
//           text: true,
//           value: 1,
//         },
//         {
//           text: true,
//           value: 2,
//         },
//         {
//           text: true,
//           value: 3,
//         },
//       ],
//     },
//     {
//       title: '上次调度时间',
//       dataIndex: 'updatedAt',
//       sorter: true,
//       render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
//     },
//     {
//       title: '操作',
//       render: (text, record) => (
//         <Fragment>
//           <a onClick={() => this.handleUpdateModalVisible(true, record)}>配置</a>
//           <Divider type="vertical" />
//           <a href="">订阅警报</a>
//         </Fragment>
//       ),
//     },
//   ];
//
//   renderForm() {
//     const { expandForm } = this.state;
//     return expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
//   }
//
//   render(){
//     const {
//       rule: { data },
//       loading,
//     } = this.props;
//
//     return (
//       <PageHeaderWrapper title="查询表格">
//         <Card bordered={false}>
//           <div className={styles.tableList}>
//             <div className={styles.tableListForm}>{this.renderForm()}</div>
//             <div className={styles.tableListOperator}>
//               <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
//                 新建
//               </Button>
//               {selectedRows.length > 0 && (
//                 <span>
//                   <Button>批量操作</Button>
//                   <Dropdown overlay={menu}>
//                     <Button>
//                       更多操作 <Icon type="down" />
//                     </Button>
//                   </Dropdown>
//                 </span>
//               )}
//             </div>
//             <StandardTable
//               selectedRows={this.selectedRows}
//               data={data}
//               loading={loading}
//               columns={this.columns}
//               onSelectRow={this.handleSelectRows}
//               onChange={this.handleStandardTableChange}
//             />
//           </div>
//         </Card>
//         <CreateForm {...parentMethods} modalVisible={modalVisible} />
//         {stepFormValues && Object.keys(stepFormValues).length ? (
//           <UpdateForm
//             {...updateMethods}
//             updateModalVisible={updateModalVisible}
//             values={stepFormValues}
//           />
//         ) : null}
//       </PageHeaderWrapper>
//     );
//   }
// }
// export default UserList;

import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

Admin_Item_Table.propTypes = {
  List: PropTypes.array,
};
Admin_Item_Table.defaultProps = {
  List: [],
};
export default function Admin_Item_Table(props) {
  const HandleDelete = async (id) => {
    if (window.confirm('Bạn đã chắc chắn muốn xóa?')) {
      await document.getElementById(`${id}`).remove();
    }
  };
  const { List } = props;
  return (
    <div className='body_page'>
      <table className='itemTable'>
        <thead className='headerTable'>
          <tr>
            <th>Invoice</th>
            <th>Name</th>
            <th>Company</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {List.map((item, index) => (
            <tr key={index} id={item.id}>
              <td>{item.invoice}</td>
              <td>{item.name}</td>
              <td>{item.company}</td>
              <td>{item.amount}</td>
              <td className='status status-delivering'>{item.status}</td>
              <td>
                <button
                  type='button'
                  className='btn btn-danger'
                  data-set={item.id}
                  onClick={() => HandleDelete(item.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button
                  type='button'
                  className='btn btn-warning'
                  data-set={item.id}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

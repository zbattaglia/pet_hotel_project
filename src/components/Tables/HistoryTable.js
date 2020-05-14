import React, {Component} from 'react';

//import individual components to be on this page
import HistoryTableList from './HistoryTableList';

class HistoryTable extends Component {
  render() {
    return (
      <div>
        <h2>History</h2>
        <table>
            <thead>
                <tr>
                    <th>Owner Name</th>
                    <th>Pet Name</th>
                    <th>Pet Breed</th>
                    <th>Color</th>
                    <th>Checked In/Out</th>
                    <th>Action</th>
                </tr>
            </thead>
            <HistoryTableList />
            <tfoot>
                <tr><td>Table Footer</td></tr>
            </tfoot>
        </table>
      </div>
    )
  }
}

export default HistoryTable;
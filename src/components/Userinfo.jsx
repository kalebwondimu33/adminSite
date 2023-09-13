import React from "react";
import Search from "./ReusableStyle";
function userInfo() {
  return (
    <section>
      <div className="user_info ">
        <table className="table-bottom">
          <thead>
            <tr>
              <th>NAME</th>
              <th>PHONE NO</th>
              <th>STATUS</th>
              <th>
                <Search />
              </th>
              <th>
                <div className="svg-icon">
                  <img src="assets/componentTable.svg" alt="compenents image" />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>JOHN</td>
              <td>0944556677</td>
              <td>INACTIVE</td>
              <td>
                <img src="assets/pencil.png" alt="pencil  image" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>JOHN</td>
              <td>0944556677</td>
              <td>ACTIVE</td>
              <td>
                <img src="assets/pencil.png" alt="pencil  image" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>JOHN</td>
              <td>0944556677</td>
              <td>ACTIVE</td>
              <td>
                <img src="assets/pencil.png" alt="pencil  image" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>JOHN</td>
              <td>0944556677</td>
              <td>ACTIVE</td>
              <td>
                <img src="assets/pencil.png" alt="pencil  image" />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
export default userInfo;

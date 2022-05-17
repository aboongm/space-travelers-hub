import React from 'react';
import Mission from './Mission';

export default function Missions() {
  return (
    <div className="px-3 container">
      <table className="my-5 ">
        <tbody className="p-5">
          <tr className="border">
            <th className="border">Mission</th>
            <th className="border">Description</th>
            <th className="border">Status</th>
            <th className="border"> </th>
          </tr>
          <Mission />
        </tbody>
      </table>
    </div>
  );
}

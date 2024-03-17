import React from 'react';

function Tables({ port, service, vulnerability }) {
  return (
    <div className="relative flex justify-center align-middle overflow-x-auto">
      <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              PORT No
            </th>
            <th scope="col" className="px-6 py-3 text-center overflow-auto">
              Open/Close
            </th>
            <th scope="col" className="px-6 py-3 text-center overflow-auto">
              Service
            </th>
            <th scope="col" className="px-6 py-3 text-center overflow-auto">
              Vulnerability
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 font-medium w-[50px] text-gray-900  dark:text-white">
              {port}
            </td>
            <td className="px-6 py-4 font-medium w-[50px] text-gray-900  dark:text-white">
              Open
            </td>
            <td className="px-6 py-4 font-medium w-[50px] text-gray-900  dark:text-white">
              {service}
            </td>
            <td className="px-6 py-4 font-medium w-[50px] h-3 text-gray-900  dark:text-white">
              {vulnerability}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tables;

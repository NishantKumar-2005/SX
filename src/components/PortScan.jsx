import React, { useState } from 'react';
import axios from 'axios';
import Table from './Tables';

function PortScan() {
  const [ipAddress, setIpAddress] = useState('');
  const [ports, setPorts] = useState('');
  const [scanResults, setScanResults] = useState([]);

  const handleScan = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/scan', {
        ipaddress: ipAddress,
        ports: ports,
      });
      setScanResults(response.data);
    } catch (error) {
      console.error('Error scanning ports:', error);
    }
  };

  return (
    <div className='w-full  mx-auto flex flex-col items-center justify-center'>
      <div className="mb-5 bg-[#8069F9] w-[30%] rounded-[2.375rem] ">
      <div className='my-5 flex justify-items-center items-center flex-col '>
        <div>
        <label for="text" class="block mb-2 text-sm font-medium  text-white">IP Address</label>
          <input
        type="text"
        className='bg-gray-50 border w-[20rem] border-gray-300  self-center text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="192.168.0.1'
        placeholder="Enter IP Address"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
      /></div>
      
      <div class="mb-5">
      <label for="port" class="block mb-2  text-sm font-medium text-white">Ports</label>
      <input
        type="number"
        className='bg-gray-50 border w-[20rem] border-gray-300 self-center text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder="Enter Ports (default is 6225)"
        value={ports}
        onChange={(e) => setPorts(e.target.value)}
      />
      </div>
      <div class="flex items-start mb-5">
     <div class="flex items-center h-5">
       <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
     <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">accepting terms and conditions</label>
   </div>
       
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={handleScan}>Scan</button>
      </div>
      </div>
      
      
      
      <div className='m-2 w-[80vh] '>
        {scanResults.map((result, index) => (
          <Table key={index} port={result.port} service={result.service} vulnerability={result.vulnerability}/>
        ))}
        
      </div>
    </div>
  );
}
export default PortScan;

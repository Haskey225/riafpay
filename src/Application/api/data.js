import React from 'react';
import axios from 'axios';
const config = {
    Origin : 'http://localhost:3000',
    'Access-control-request-method': 'POST',
    'Content-Type':'Application/json'
  };

export function apiTest(props) {
    const data = {
        action: 'find',
        tbl: ['apartement'],		// Table name
        col: ['*'],		// Columns (use * for all columns)
        cond: {			// Condition (Apply conditions to filter your data)
            id: 1
        }
    }

    axios.post("https://riafsarl.com/api/api.php", data, {config}).then(respo =>{
    }).catch(reason=>{
        console.error(reason);
    });

    return (
        <div>
            <p>Api test</p>
        </div>
    )
}
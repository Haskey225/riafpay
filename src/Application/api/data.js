import React from 'react';
import axios from 'axios';

export const datas = {
    n1: {
        "id": "1",
        "im": "CO-01-IGR",
        "code": "N1",
        "loyer": "170000",
        "occupant": "FLORA OUATTARA",
        "status": "OC"
    },
    n2: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N2",
        "loyer": "160000",
        "occupant": "ALEX KOFFI",
        "status": "OC"
    },
    n3: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N3",
        "loyer": "160000",
        "occupant": "ALEX KOFFI",
        "status": "OC"
    },
    n4: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N4",
        "loyer": "160000",
        "occupant": "ALEX KOFFI",
        "status": "OC"
    },
    n5: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N5",
        "loyer": "160000",
        "occupant": "ALEX KOFFI",
        "status": "OC"
    },
    n7: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N7",
        "loyer": "160000",
        "occupant": "ALEX KOFFI",
        "status": "OC"
    },
    n8: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N8",
        "loyer": "160000",
        "occupant": "ALEX KOFFI",
        "status": "OC"
    },
    n9: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N9",
        "loyer": "160000",
        "occupant": "ALEX KOFFI",
        "status": "OC"
    },
    n10: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N10",
        "loyer": "160000",
        "occupant": "ALEX KOFFI",
        "status": "OC"
    }
}
const config = {
    Origin: 'http://localhost:3000',
    'Access-control-request-method': 'POST',
    'Content-Type': 'Application/json'
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

    axios.post("https://riafsarl.com/api/api.php", data, { config }).then(respo => {
    }).catch(reason => {
        console.error(reason);
    });

    return (
        <div>
            <p>Api test</p>
        </div>
    )
}
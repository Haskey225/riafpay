import React from 'react';
import axios from 'axios';

export const datas = {
    N1: {
        "id": "1",
        "im": "CO-01-IGR",
        "code": "N1",
        "loyer": "170000",
        "occupant": "FLORA OUATTARA",
        "status": "OC",
        'tel':'0747848047'
    },
    N2: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N2",
        "loyer": "160000",
        "occupant": "ALEX KOFFI",
        "status": "OC",
        'tel':'0708293437'
    },
    N3: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N3",
        "loyer": "160000",
        "occupant": "ABOU FOFANA",
        "status": "OC",
        'tel':'0779313698'
    },
    N4: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N4",
        "loyer": "170000",
        "occupant": "Mlle. TCHIMOU",
        "status": "OC",
        'tel':'0709339689'
    },
    N5: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N5",
        "loyer": "4000000",
        "occupant": "GRAH JULIEN",
        "status": "OC",
        'tel':'0757605829'
    },
    N7: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N7",
        "loyer": "160000",
        "occupant": "Mlle. TAMINI",
        "status": "OC",
        'tel':'0708959708'
    },
    N8: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N8",
        "loyer": "100000",
        "occupant": "KABA FANTA",
        "status": "OC",
        'tel':'0778556053'
    },
    N9: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N9",
        "loyer": "170000",
        "occupant": "M.KOFFI",
        "status": "OC",
        'tel':'0709044444'
    },
    N10: {
        "id": "2",
        "im": "CO-01-IGR",
        "code": "N10",
        "loyer": "160000",
        "occupant": "BALE MEX",
        "status": "OC",
        'tel':'0758713888'
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
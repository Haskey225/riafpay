import React, { useContext, useEffect } from 'react';
import axios from "axios";
import { UserContext } from '../Context/UserContextProvider';

const liveurl = 'https://app.paydunya.com/api/v1/checkout-invoice/create'
const testurl = "https://app.paydunya.com/sandbox-api/v1/checkout-invoice/create"

// const data = {

//     "invoice": {
//         "total_amount": 5000,
//         "description": "Chaussure VANS dernier modèle"
//     },
//     "store": {
//         "name": "Magasin le Choco"
//     }
// }






export async function GetInvoices(amout, balance = 0, ma_name = 'null', m_wallet = 'null') {

    // Context for display activity loader


    // console.log(amout)
    const completeData = {
        "invoice": {
            "items": {
                "item_0": {
                    "name": "Loyer ou facture",
                    "quantity": 1,
                    "unit_price": amout,
                    "total_price": amout,
                    "description": "Paiement de facture ou loyer via RiafTPE"
                }
            },
            "taxes": {
            },
            "total_amount": amout,
            "description": ""
        },
        "store": {
            "name": "Riaf Sarl",
            "tagline": "",
            "postal_address": "00225",
            "phone": "0701205957",
            "logo_url": "https://riafsarl.com/wp-content/uploads/2022/11/Plan-de-travail-2@1000x.png",
            "website_url": "https://riafsarl.com"
        },
        "custom_data": {
            'marchant_name': ma_name, // Nom du marchand
            'marchant_id': m_wallet,  // Identifiant du marchan (numero mobile money + indicatif du pay)
            'marchant_wallet': m_wallet,
            'balance_avalable': balance,
            'numero_gagnant': '5',
            'prix': 'Bon de réduction de 50%',
        },
        "actions": {
            "cancel_url": "https://riafsarl.com/cancel/",
            "return_url": "https://riafsarl.com/succes/",
            "callback_url": "https://riafsarl.com/success/"
        }
    }

    let response = "";
    axios.post(testurl, completeData, { headers: RiafLiveDatas }).then(responses => {
        response = responses;
        console.log(response);

        // window.open(response.data.response_text, "_self");
    }).catch(reason => {
        console.log(reason);
    })

    return response;
}

export async function SendMoney() {
    const url = "https://app.paydunya.com/api/v1/disburse/get-invoice";
    const param = {
        'account_alias': '0505420552',
        'amount': 5000,
        'withdraw_mode': 'mtn-ci'
    }
    axios.post(url, param, { headers: testDatas }).then(resp => {
        console.log(resp);
    });
}


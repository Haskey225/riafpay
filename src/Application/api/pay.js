import React from "react";
import axios from "axios";

const liveurl = 'https://app.paydunya.com/api/v1/checkout-invoice/create'
const testurl = 'https://app.paydunya.com/sandbox-api/v1/checkout-invoice/create'

const data = {

    "invoice": {
        "total_amount": 5000,
        "description": "Chaussure VANS dernier modèle"
    },
    "store": {
        "name": "Magasin le Choco"
    }
}


const RiafLiveDatas = {
    "Content-Type": "application/json",
    "PAYDUNYA-MASTER-KEY": process.env.PAYDUNYA_MASTER_KEY,
    "PAYDUNYA-PRIVATE-KEY": process.env.PAYDUNYA_PRIVATE_KEY,
    "PAYDUNYA-TOKEN": process.env.PAYDUNYA_TOKEN
}

const testDatas = {
    "Content-Type": "application/json",
    "PAYDUNYA-MASTER-KEY": 'nQfz6ZsX-PTLT-2psn-DLh4-5LBcIg5W9B6J',
    "PAYDUNYA-PRIVATE-KEY": 'test_private_YS3eQvnaE4ugUGrnj91AY9ZRhG9',
    "PAYDUNYA-TOKEN": '7qjcruClJ7J6PoY9tpIT'
}




export function getInvoices(amout) {
    const completeData = {
        "invoice": {
            "items": {
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
        },
        "actions": {
            "cancel_url": "https://riafsarl.com/cancel/",
            "return_url": "https://riafsarl.com/return/",
            "callback_url": "https://riafsarl.com/success/"
        }
    }

    let response = "";
    axios.post(liveurl, completeData, { headers: RiafLiveDatas }).then(responses => {
        response = responses;
        // console.log(response.data.response_text);
        window.open(response.data.response_text, "_self");
    }).catch(reason => {
        console.log(reason);
    })
    return response;
}


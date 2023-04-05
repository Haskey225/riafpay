import axios from "axios";

const liveurl = 'https://app.paydunya.com/api/v1/checkout-invoice/create'
// const testurl = 'https://app.paydunya.com/sandbox-api/v1/checkout-invoice/create'

// const data = {

//     "invoice": {
//         "total_amount": 5000,
//         "description": "Chaussure VANS dernier modèle"
//     },
//     "store": {
//         "name": "Magasin le Choco"
//     }
// }


const RiafLiveDatas = {
    "Content-Type": "application/json",
    "PAYDUNYA-MASTER-KEY": process.env.TEST_PAYDUNYA_MASTER_KEY,
    "PAYDUNYA-PRIVATE-KEY": process.env.TEST_PAYDUNYA_PRIVATE_KEY,
    "PAYDUNYA-TOKEN": process.env.TEST_PAYDUNYA_TOKEN
}

// const testDatas = {
//     "Content-Type": "application/json",
//     "PAYDUNYA-MASTER-KEY": process.env.TEST_PAYDUNYA_MASTER_KEY,
//     "PAYDUNYA-PRIVATE-KEY": process.env.TEST_PAYDUNYA_PRIVATE_KEY,
//     "PAYDUNYA-TOKEN": process.env.TEST_PAYDUNYA_TOKEN
// }




export function getInvoices(amout, balance = 0, ma_name= 'null', m_wallet = 'null') {
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
            'marchant_wallet':m_wallet,
            'balance_avalable' : balance,
            'numero_gagnant' : '5',
            'prix' : 'Bon de réduction de 50%',
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
        // window.open(response.data.response_text, "_self");
    }).catch(reason => {
        console.log(reason);
    })
    return response;
}


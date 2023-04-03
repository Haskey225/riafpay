import React, { useState } from 'react';
// import { UserContext } from './Application/Context/UserContextProvider';
import './app.css';
import { logo } from './Application/Image';
import { getInvoices } from './Application/api/pay';
// import { apiTest } from './Application/api/data';
import { datas } from './Application/api/data';

const initState = {
  name: "",
  motif: "",
  tel: '',
  amounte: '',
  amountepay: ''
}

let totalPayer = {
  facture: '',
  loyer: ''
}

let facture = 0;
let loyer = 0;


function App(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorLog, setErrorLog] = useState('');

  const [state, setState] = useState(initState);
  const [totalP, setTotalP] = useState(totalPayer)
  const [show, setShow] = useState('none');

  const [dispInvoice, setDispInvoice] = useState('block');

  const [rentSelected, setSrentSelected] = useState('N1');
  const [rentName, setRentName] = useState(datas.N1.occupant);
  const [telN, setTelN] = useState(datas.N1.tel);
  const [loyerA, setLoyerA] = useState(datas.N1.loyer);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(parseInt(e.target.name));
    if ((e.target.name === 'amounte') || (e.target.name === 'amountepay')) {
      if (!isNaN(e.target.value)) {
        setState({ ...state, [name]: value });

        if (e.target.name === 'amounte') {
          facture = (parseInt(e.target.value) * (105 / 100));
        }
        if (e.target.name === 'amountepay') {
          loyer = (parseInt(e.target.value) * (105 / 100));
        }
      }
    } else {

      setState({ ...state, [name]: value });
    }

  }


  const payment = () => {
    setIsLoading(true);
    if (parseInt(facture) > 1000 || parseInt(loyer) > 1000) {
      // getInvoices(state.amounte); //Pour les paimement
      if (dispInvoice === 'none') {
        getInvoices(loyer); //Rent amount aplyed
      } else {
        getInvoices(facture); //Invoice amount aplyed
      }
    } else {
      setTimeout(() => {
        setErrorLog('Le montant ne doit pas être en dessous de 1000 CFA');
        setIsLoading(false);
      }, 1200)
    }

  }

  // Hidden rent content
  const handleCheckBox = (e) => {
    // console.log(e.target.value);
    if (e.target.name === 'invoice') {

      setShow(e.target.value);
      if (e.target.value === 'none') {
        setDispInvoice('block')
      } else {
        setDispInvoice('none');
      }
    }

    if (e.target.name === 'select') {

      setLoyerA(datas[e.target.value].loyer);
      setRentName(datas[e.target.value].occupant);
      setTelN(datas[e.target.value].tel);
    }



  }


  return (
    <>
      <div className="main-block" style={{ marginTop: '20px' }}>
        <div className='logo-box'>
          <img className='logo' src={logo} alt='logo' />
        </div>
        <h1>Bienvenu sur le TPE virtuelle de Riaf</h1>

        <hr />
        <div className="account-type">
          <h4>Je paie :</h4>
          <input type="radio" ive='frere' value="none" id="radioOne" name="invoice" defaultChecked onChange={handleCheckBox} />
          <label htmlFor="radioOne" className="radio">Une facture</label>
          <input type="radio" ive='gfrere' value="block" id="radioTwo" name="invoice" onChange={handleCheckBox} />
          <label htmlFor="radioTwo" className="radio">Mon loyer</label>
        </div>
        <hr />
        <div className='account-type' style={{ display: show }}>
          <h4>Selectionnez votre numéro !</h4>
          <label id="icon" htmlFor="select"><i className="fas fa-user-magnifying-glass"></i></label>
          <select name='select' onChange={handleCheckBox} style={{
            width: '300px',
            height: '38px',
            borderRadius: '0 5px 5px 0'
          }}>

            <option value="N1">{datas.N1['code']}</option>
            <option value="N2">{datas.N2['code']}</option>
            <option value="N3">{datas.N3['code']}</option>
            <option value="N4">{datas.N4['code']}</option>
            <option value="N5">{datas.N5['code']}</option>
            <option value="N7">{datas.N7['code']}</option>
            <option value="N8">{datas.N8['code']}</option>
            <option value="N9">{datas.N9['code']}</option>
            <option value="N10">{datas.N10['code']}</option>

          </select>
          <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
          <input type="text" value={rentName} readOnly name="name" id="name" placeholder="Nom complet" />
          <label id="icon" htmlFor="tel"><i className="fas fa-thin fa-phone"></i></label>
          <input type="text" value={telN} readOnly name="tel" id="name" pattern="[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{3}" maxLength={10} placeholder="Numéro de telephone" />
          <div style={{ display: 'none' }}>
            <label id="icon" htmlFor="amounte" hidden><i className="fas fa-light fa-dollar-sign"></i></label>
            <input type="text" value={loyerA} hidden readOnly name="amounte" id="name" placeholder="Montant" />
          </div>
          <label id="icon" htmlFor="amountepay"><i className="fas fa-light fa-dollar-sign"></i></label>
          <input type="text" value={state.amountepay} name="amountepay" id="name" placeholder="je paie" required onChange={handleChange} />

          <label id="icon" htmlFor="amountepay"><i className="fas fa-light fa-dollar-sign"></i></label>
          <input type="text" readOnly value={loyer} name="loyer" id="name" placeholder="total avec Frai" />
          <p>Total avec Frais</p>
        </div>
        <div className='content-type' style={{ display: dispInvoice }}>
          <hr style={{ display: show }} />
          <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
          <input type="text" name="name" id="name" placeholder="Nom complet" required value={state.name} onChange={handleChange} />
          <label id="icon" htmlFor="tel"><i className="fas fa-thin fa-phone"></i></label>
          <input type="text" name="tel" id="name" placeholder="Numéro de telephone" required value={state.tel} onChange={handleChange} />
          <label id="icon" htmlFor="amounte"><i className="fas fa-light fa-dollar-sign"></i></label>
          <input type="text" name="amounte" id="name" placeholder="je paie" required value={state.amounte} onChange={handleChange} />

          <label id="icon" htmlFor="amounte"><i className="fas fa-light fa-dollar-sign"></i></label>
          <input type="text" readOnly name="facture" id="name" placeholder="Total avec frai" required value={facture} />
          <p>Total avec Frais</p>

        </div>
        <hr />
        <div className="gender" style={{ display: 'none' }}>
          <h4>Je suis: </h4>
          <input type="radio" value="none" id="male" name="gender" defaultChecked />
          <label htmlFor="male" className="radio">Un homme</label>
          <input type="radio" value="none" id="female" name="gender" />
          <label htmlFor="female" className="radio">Une femme</label>
        </div>
        <hr />
        <div className="btn-block">
          <p>En cliquant sur générer la facture, vous acceptez notre <a href='https://riafsarl.com/pc'>politique de confidentialité</a>.</p>
          <button desabled={'true'} onClick={payment} >{isLoading ? "Veuillez patienter SVP ..." : "Valider"}</button>
          <p style={{ color: 'red' }}>{errorLog}</p>
        </div>
      </div>


    </>
  )

}

export default App;




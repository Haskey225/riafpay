import React, { useState } from 'react';
// import { UserContext } from './Application/Context/UserContextProvider';
import './app.css';
import { logo } from './Application/Image';
// import { getInvoices } from './Application/api/pay';
import { apiTest } from './Application/api/data';
import { datas } from './Application/api/data';

const initState = {
  name: "",
  motif: "",
  tel: '',
  amounte: 0
}

function App(props) {


  const [state, setState] = useState(initState);
  const [show, setShow] = useState('none');
  const [rentSelected, setSrentSelected]= useState('n1');


  const handleChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }


  const payment = () => {
    apiTest();
    if (parseInt(state.amounte) > 1000) {
      // getInvoices(state.amounte); //Pour les paimement
    }

  }

  // Hidden rent content
  const handleCheckBox = (e) => {
    // console.log(e.target.value);
    if (e.target.name === 'invoice') {

      setShow(e.target.value);
    }

    if (e.target.name === 'select') {

      console.log(e.target.name);
    }

    console.log(datas)

  }


  return (
    <>
      <div className="main-block">
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
          <input type="text" readOnly name="name" id="name" placeholder="Nom complet"  />
          <label id="icon" htmlFor="tel"><i className="fas fa-thin fa-phone"></i></label>
          <input type="text" readOnly name="tel" id="name" placeholder="Numéro de telephone"  />
          <label id="icon" htmlFor="amounte"><i className="fas fa-light fa-dollar-sign"></i></label>
          <input type="text" readOnly name="amounte" id="name" placeholder="Montant"  />
        </div>
        
        <hr style={{ display: show }} />
        <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Nom complet" required value={state.name} onChange={handleChange} />
        <label id="icon" htmlFor="tel"><i className="fas fa-thin fa-phone"></i></label>
        <input type="text" name="tel" id="name" placeholder="Numéro de telephone" required value={state.tel} onChange={handleChange} />
        <label id="icon" htmlFor="amounte"><i className="fas fa-light fa-dollar-sign"></i></label>
        <input type="text" name="amounte" id="name" placeholder="Montant" required value={state.amounte} onChange={handleChange} />
        <hr />
        <div className="gender">
          <h4>Je suis: </h4>
          <input type="radio" value="none" id="male" name="gender" defaultChecked />
          <label htmlFor="male" className="radio">Un homme</label>
          <input type="radio" value="none" id="female" name="gender" />
          <label htmlFor="female" className="radio">Une femme</label>
        </div>
        <hr />
        <div className="btn-block">
          <p>En cliquant sur générer la facture, vous acceptez notre <a href='https://riafsarl.com/pc'>politique de confidentialité</a>.</p>
          <button onClick={payment} >Valider</button>
        </div>
      </div>


    </>
  )

}

export default App;




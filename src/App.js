import React, { useState, useContext } from 'react';
import { UserContext } from './Application/Context/UserContextProvider';
import './app.css';
import { logo } from './Application/Image';
import { GetInvoices, SendMoney } from './Application/api/pay';
// import { apiTest } from './Application/api/data';
import {
  getApart,
  getUser,
  getParameters,
  getMarchantName,
  getRemoteMarchant,
  getPostRemoteMarchant
} from './Application/Functions/AppFunction';

const initState = {
  name: "",
  motif: "",
  tel: '',
  amounte: '',// = Facture
  amountepay: ''// = Loyer
}


let facture = 0; // = amounte


function App(props) {
  // User Context provider;
  const {  loadded } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);
  const [errorLog, setErrorLog] = useState('');

  const [state, setState] = useState(initState);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(parseInt(e.target.name));
    if ((e.target.name === 'amounte')) {
      if (!isNaN(e.target.value)) {
        setState({ ...state, [name]: value });

        if (e.target.name === 'amounte') {
          facture = (parseInt(e.target.value) * (105 / 100));
        }
      }
    } else {

      setState({ ...state, [name]: value });
    }

  }


  const payment = () => {
    setIsLoading(true);

    // const vals = getPostRemoteMarchant('2250505420552');
    // console.log(vals);
    if (parseInt(facture) > 1000) {
      // getInvoices(facture, state.amounte, 'AF', '0505420552'); //Pour les paimement
      // GetInvoices(facture); //Invoice amount aplyed
    } else {
      setTimeout(() => {
        setErrorLog('Le montant ne doit pas être en dessous de 1000 CFA');
        setIsLoading(false);
      }, 1200)
    }
    SendMoney();
    // getRemoteMarchant(vals);
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

          <h4>Information du marchand :</h4>
          <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
          <input type="text" name="name" id="name" readOnly placeholder="Nom complet" required value={'nom: Mme Afolabi'} />
          <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
          <input type="text" name="name" id="name" readOnly placeholder="Nom complet" required value={'Activité: Commerce'} />
          <label id="icon" htmlFor="name"><i className="fas fa-user"></i></label>
          <input type="text" name="name" id="name" readOnly placeholder="Nom complet" required value={'Secteur: Cosmetique'} />


        </div>
        <hr />
        <div className='content-type'>
          <h4>Information du client :</h4>
          <div className="gender">
            <h4>Civilité: </h4>
            <input type="radio" value="none" id="male" name="gender" defaultChecked />
            <label htmlFor="male" className="radio">Un homme</label>
            <input type="radio" value="none" id="female" name="gender" />
            <label htmlFor="female" className="radio">Une femme</label>
          </div>

          <hr />
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




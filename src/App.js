import React, { useContext } from 'react';
import { UserContext } from './Application/Context/UserContextProvider';
import './app.css';
import { logo } from './Application/Image';
import { getInvoices } from './Application/api/pay';

const initState = {
  name: "",
  motif: "",
  tel: '',
  amounte: 0
}

function App(props) {

  const { amount, setAmount } = useContext(UserContext);

  const [state, setState] = React.useState(initState)

  
  const handleChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
    setAmount(initState.amounte)
  }


  const payment = () => {
    if (parseInt(state.amounte) > 1000) {
      getInvoices(state.amounte);
    }

  }


  return (
    <>
      <div className="main-block">
        <div className='logo-box'>
          <img className='logo' src={logo} />
        </div>
        <h1>Bienvenu sur le TPE virtuelle de Riaf</h1>

        <hr />
        <div className="account-type">
          <h4>Je paie :</h4>
          <input type="radio" value="none" id="radioOne" name="account" checked />
          <label for="radioOne" className="radio">Une facture</label>
          <input type="radio" value="none" id="radioTwo" name="account" />
          <label for="radioTwo" className="radio">Mon loyer</label>
        </div>
        <hr />
        <label id="icon" for="name"><i className="fas fa-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Nom complet" required value={state.name} onChange={handleChange} />
        <label id="icon" for="tel"><i className="fas fa-thin fa-phone"></i></label>
        <input type="text" name="tel" id="name" placeholder="Numéro de telephone" required value={state.tel} onChange={handleChange} />
        <label id="icon" for="amounte"><i className="fas fa-light fa-dollar-sign"></i></label>
        <input type="text" name="amounte" id="name" placeholder="Montant" required value={state.amounte} onChange={handleChange} />
        <hr />
        <div className="gender">
          <h4>Je suis: </h4>
          <input type="radio" value="none" id="male" name="gender" checked />
          <label for="male" className="radio">Un homme</label>
          <input type="radio" value="none" id="female" name="gender" />
          <label for="female" className="radio">Une femme</label>
        </div>
        <hr />
        <div className="btn-block">
          <p>En cliquant sur générer la facture, vous acceptez notre <a href="#">politique de confidentialité</a>.</p>
          <button href='#' onClick={payment} >Valider</button>
        </div>
      </div>


    </>
  )

}

export default App;




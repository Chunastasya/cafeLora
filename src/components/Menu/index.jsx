import {Drink} from '../Drink';
import './menu.css';

export const Menu = ({drinks}) => {

  console.log(drinks)
    return (
<section className="menu" id="menu" >
<div className="container" >
  <h2>Naše nabídka</h2>
  <p className="menu-intro">
    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
  </p>
  <div className="drinks-list">
     {drinks.map((drink) => {
return <Drink
id={0}
name= {drink.name}
ordered={false}
image= {drink.image}
layers={[
  {
    color: '#613916',
    label: 'espresso',
  },

 
 
]}
/>
})}
    
  
  </div>

  <div className='order-detail'>
<a href='/objednavka'>Detail objednavky</a>
</div>
</div>
</section>
    );
};


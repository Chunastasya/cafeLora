import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import {Banner} from '../components/Banner'
import {Contact} from '../components/Contact'
import {Footer} from '../components/Footer'
import {Gallery} from '../components/Gallery'
import {Header} from '../components/Header'
import {Menu} from '../components/Menu'


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <header>
    <Header></Header>
    </header>
    <main>
       <Banner></Banner> 
      <Menu></Menu>
      <Gallery></Gallery>
      <Contact></Contact>
    </main>
    <footer>
    <Footer></Footer>
    </footer>
  </div>
);

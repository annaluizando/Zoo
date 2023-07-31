import { Link } from 'react-router-dom';
import logo from '../../assets/logob.png';
import './AppHome.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function AppHome() {
  return (
    <div className="PrincipalHome">
      <header className="NavBar">

      <Link to = '/'><img src={logo} className="App-logo" alt="logo" /></Link>

        <div>
          <NavBar/>
        </div>
        
      </header>

      <main>

        <div className='info'>
          <img src={logo} className="Info-logo" alt="logo" />
          <p className='p1Home'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non sem mollis, mattis nisl ac, sollicitudin ex. Quisque non neque nunc. Cras tristique mattis nibh sed dignissim. Aliquam vestibulum mattis leo non suscipit. Sed quis condimentum libero, a vestibulum nulla. Suspendisse justo est, mattis a odio vel, efficitur rhoncus sem. Phasellus laoreet interdum maximus. Vivamus et purus risus. Proin tristique nibh vel libero rutrum, ac pretium nisl maximus. Maecenas convallis ornare lacus, eu posuere erat mattis faucibus.</p>
          <p>Suspendisse potenti. Vivamus facilisis lorem ac aliquet vestibulum. Integer a ipsum tincidunt neque blandit egestas at vel est. Curabitur vitae porttitor nulla. Curabitur iaculis ultricies eros, a ornare sem convallis tempus. Praesent lectus nisi, bibendum a pharetra non, finibus non felis. Nunc porta hendrerit risus, sit amet tincidunt leo hendrerit ac. Donec non placerat enim. Morbi non facilisis augue. Sed ut semper risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
        </div>

        

      </main>

      <Footer/>

    </div>
  );
}

export default AppHome;

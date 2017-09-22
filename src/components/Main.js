import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../4somelogo.svg';

class LeftComponent extends React.Component {
  render() {
    return (
      <div className='left-side'>
        <h1>The Left Side</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna purus. In eu suscipit ligula, in pulvinar diam. Sed sagittis, diam non fringilla pharetra, ligula lorem blandit purus, id tincidunt odio dolor quis neque. Mauris nec aliquam ipsum. Donec rhoncus ultrices tincidunt. Etiam ornare ac diam vel sagittis. Nunc consequat a justo ut faucibus. Aliquam erat volutpat. Pellentesque iaculis eget mi non imperdiet. Maecenas vestibulum magna sit amet sem scelerisque, quis blandit tortor semper. Duis scelerisque risus eget nisl egestas sollicitudin vitae a nulla. Nam at mauris malesuada, sodales nibh facilisis, ornare felis. Curabitur id leo faucibus libero dignissim aliquam sit amet nec purus. Nunc congue turpis nec libero sollicitudin, non dictum eros condimentum. Pellentesque bibendum ipsum eu ipsum ultrices consequat.</p>

        <p>Curabitur purus enim, porttitor at purus ac, commodo aliquet nunc. Pellentesque semper ipsum lectus, ut sodales mi finibus vel. Phasellus vitae nibh non nulla auctor lacinia. Cras pellentesque ultricies nibh in posuere. Nunc sed interdum neque, vel vestibulum augue. Maecenas ut mattis turpis. Vestibulum at libero in lorem dapibus lobortis ut id nisi. Integer molestie mauris vitae rhoncus convallis. Vivamus tortor arcu, pharetra in bibendum eget, volutpat sit amet enim. Vivamus luctus sapien magna, in ornare eros dignissim id.</p>

        <p>Quisque vitae enim in orci lobortis mollis in vel mi. Proin imperdiet metus at dolor auctor, in tempor nisi porttitor. Sed dictum volutpat magna, eu efficitur felis finibus non. Proin orci quam, gravida a elementum eget, bibendum vitae eros. Suspendisse nisl lacus, consectetur vel viverra eu, aliquet ac ipsum. Nullam quis nisi in arcu dapibus tempus. Nullam faucibus dui libero, eget gravida libero luctus ac.</p>

        <p>Donec vitae aliquet lacus, in hendrerit quam. Aliquam accumsan convallis tortor. Aenean mi urna, porttitor eu posuere nec, scelerisque eu nunc. Maecenas vel euismod mauris. Pellentesque vehicula quis massa non convallis. Aliquam risus metus, maximus ut vehicula vitae, aliquam non lectus. Sed non elit dolor. Maecenas in dolor felis. Duis laoreet, diam vitae porttitor sagittis, ex enim fermentum felis, at bibendum nunc lacus ut ipsum.</p>

        <p>Cras nisi odio, mattis a tincidunt nec, blandit quis nisi. Donec ullamcorper, nibh ac lobortis interdum, urna nisi consequat turpis, sed sollicitudin sem mauris vel dui. Pellentesque maximus nunc id semper porttitor. Ut imperdiet diam mattis, consectetur nulla et, interdum ex. Suspendisse vulputate eleifend purus, ut tincidunt tortor hendrerit quis. Aenean mi erat, blandit id metus malesuada, laoreet imperdiet magna. Nunc aliquam sagittis tortor sit amet tempor. Duis nec dapibus augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam et arcu sodales, euismod risus ac, sodales odio. Sed auctor ornare elementum. Praesent venenatis gravida lacus, et tristique felis aliquet at. Aenean quis volutpat ex. In tempor tellus eu gravida fringilla. Donec ultricies dui justo, et imperdiet nulla dignissim sed.</p>
      </div>
    );
  }
}

class CenterComponent extends React.Component {
  render() {
    return (
      <div className='center-side'>
        <h1>The Center Side</h1>
      </div>
    );
  }
}

class RightComponent extends React.Component {
  render() {
    return (
      <div className='right-side'>
        <h1>The Right Side</h1>
      </div>
    );
  }
}

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <nav className='home-nav'>
          <div className='nav-logo'>
            <img src={logo} alt='4some golf logo' />
          </div>
          <Link to='/'>Logout</Link>
        </nav>
        <div className='wrapper'>
          <LeftComponent />
          <CenterComponent />
          <RightComponent />
        </div>
      </div>
    )
  }
}

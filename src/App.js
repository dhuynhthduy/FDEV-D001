// import logo from './logo.svg';
import './App.css';
import Header from './Widgets/Header';
import Sidebar from './Widgets/Sidebar';
import Content from './Widgets/Content';
import Footer from './Widgets/Footer';
function App() {
  return (
    <div classNameName="App">
      <div classNameName="skin-blue sidebar-mini">
        <div classNameName="wrapper">
          <Header />
          <Sidebar/>
          <Content/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;

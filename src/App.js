
import './App.css';
import { AppFooter } from './Components/AppFooter';
import AppHeader from './Components/AppHeader';
import 'antd/dist/reset.css'
import PageContent from './Components/PageContent';
import { SideBar } from './Components/SideBar';
function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className='SideMenuAndPageContent'> 
        <SideBar></SideBar>
        <PageContent></PageContent>
      </div>
      <AppFooter /> 
    </div>
  );
}

export default App;

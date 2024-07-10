import Header from "./components/Header";
import ContentMenu from "./components/ContentMenu";
import { BrowserView, MobileView } from 'react-device-detect';
import { IoAlertCircle } from "react-icons/io5";


function App() {
  
  return (
    <>
      <BrowserView>
      <main className="flex flex-col min-h-screen items-center justify-start bg-neutral-900 text-white">
        <Header />
        <ContentMenu />
        </main>
      </BrowserView>
      <MobileView>
        <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-900 text-white text-center">
          <IoAlertCircle size={90} />
          <h3 className="my-6 text-2xl">Благодарю вас <br />за проявленный интерес!</h3>
          <h4 className="text-lg p-5">Для просмотра портфолио просьба перезайти на сайт с ПК, т.к. его содержимое громоздко и еще не было полностью адаптировано под мобильные устройства.</h4>
        </div>
      </MobileView>
    </>
  );
}

export default App;
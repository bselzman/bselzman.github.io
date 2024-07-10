import { Banner } from "flowbite-react";

import rclh from "../../assets/images/rclh.gif";
import iconPWA from "../../assets/images/icon-pwa-100p.png";
import iconPHP from "../../assets/images/icon-php-100p.png";
import iconVanillaJS from "../../assets/images/icon-vanillajs-100p.png";
import iconJQuery from "../../assets/images/icon-jquery-100p.png";
import iconSQL from "../../assets/images/icon-sql-100p.png";
import iconMySQL from "../../assets/images/icon-mysql-100p.png";
import iconBootstrap from "../../assets/images/icon-bootstrap-100p.png";
import iconCSS from "../../assets/images/icon-css-100p.png";
import iconHTML from "../../assets/images/icon-html-100p.png";


import rclhAdditionalFirst from "../../assets/images/rclh-additional-first.png";
import rclhAdditionalSecond from "../../assets/images/rclh-additional-second.png";
import rclhAdditionalThird from "../../assets/images/rclh-additional-third.png";
import rclhAdditionalFourth from "../../assets/images/rclh-additional-fourth.png";
import rclhAdditionalFifth from "../../assets/images/rclh-additional-fifth.png";
import rclhAdditionalSixth from "../../assets/images/rclh-additional-sixth.png";

function RCLHContent() {

  return (
    <>
      <div className="flex justify-around text-center">      
        <div className="mt-3">
          <h2 className="text-4xl font-bold">RCLH Employees' App</h2>
          <h4 className="mt-1 text-lg font-medium">(приложение для сотрудников)</h4>
          <h3 className="mt-6 text-xl font-medium">Год разработки: <b className="font-normal">2019 г.</b></h3>        
          <h3 className="mt-6 mb-3 text-xl font-medium">Краткое описание проекта:</h3>
          <p>Кросплатформенное веб-приложение для отдела продаж<br /> и event-менеджмент'a в отеле, основная задача которого<br />состоит в сведении к минимуму всего того, о чём в негативном<br /> ключе отзываются как о «человеческом факторе», что в свою<br /> очередь, экономит время на простой повторяющейся работе<br /> и прямым образом повышает производительность персонала. </p>
          <h3 className="mt-6 mb-3 text-xl font-medium">Используемые языки, фреймворки, технологии:</h3>
          <Banner className="p-2 flex justify-evenly bg-slate-600 border-t border-x border-b-transparent rounded-t-3xl border-slate-300">  
            <a target="_blank" rel="noopener noreferrer" href="https://www.php.net/">
              <img src={iconPHP} width="65" height="65" />
            </a>         
            <a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/wiki/Javascript">
              <img src={iconVanillaJS} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/Style/CSS/">
              <img src={iconCSS}  width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://html.spec.whatwg.org/multipage/">
              <img src={iconHTML}  width="65" height="65" />
            </a>
          </Banner>
          <Banner className="p-2 flex justify-evenly bg-slate-600 border border-b border-x border-t-transparent rounded-b-3xl">
            <a target="_blank" rel="noopener noreferrer" href="https://dev.mysql.com/doc/refman/8.4/en/sql-statements.html">
              <img src={iconSQL} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://dev.mysql.com/">
              <img src={iconMySQL} width="65" height="65" />
            </a>          
            <a target="_blank" rel="noopener noreferrer" href="https://jquery.com/">
              <img src={iconJQuery}  width="65" height="65" />
            </a>          
            <a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/">
              <img src={iconBootstrap}  width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://web.dev/explore/progressive-web-apps">
              <img src={iconPWA} width="65" height="65" />
            </a>
          </Banner>
          <div className="mt-6 flex justify-center text-gray-700 animate-bounce"></div>
        </div>
        <div>
          <img src={rclh}  width="700" height="700"/>
        </div>        
      </div>
      <div className="text-center">
        <h3 className="mb-3 text-xl font-medium">Дополнение к описанию выше:</h3>
        <p>На этапе планирования и презентации идеи приложения руководству, были приняты основные решения относительно его функционала.<br />В самой же презентации рассматривалась только помощь отделу event-менеджмента, как видно ниже.</p>
        <h3 className="mt-6 text-xl font-medium">Отдельные слайды из презентации проекта:</h3>
        <div className="mt-6 flex justify-center">
          <img src={rclhAdditionalFirst} />          
        </div>
        <p className="mt-6 text-lg">1/6</p>
        <div className="mt-6 flex justify-center">
          <img src={rclhAdditionalSecond} />          
        </div>       
        <p className="mt-6 text-lg">2/6</p>        
        <div className="mt-6 flex justify-center">
          <img src={rclhAdditionalSixth} />
        </div>       
        <p className="mt-6 text-lg">3/6</p>
        <div className="mt-6 flex justify-center">
          <img src={rclhAdditionalFourth} />
        </div>
        <p className="mt-6 text-lg">4/6</p>
        <div className="mt-6 flex justify-center">
          <img src={rclhAdditionalThird} />
        </div>
        <p className="mt-6 text-lg">5/6</p>        
        <div className="mt-6 flex justify-center">
          <img src={rclhAdditionalFifth} />
        </div>
        <p className="mt-6 text-lg">6/6</p>
      </div>
    </>
    
    );
  }

  export default RCLHContent;
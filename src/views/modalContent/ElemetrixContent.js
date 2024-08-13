import { Banner } from "flowbite-react";
import { IoCaretDown } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa6";

import elemetrix from "../../assets/images/elemetrix.gif";
import iconPHP from "../../assets/images/icon-php-100p.png";
import iconVanillaJS from "../../assets/images/icon-vanillajs-100p.png";
import iconJQuery from "../../assets/images/icon-jquery-100p.png";
import iconSQL from "../../assets/images/icon-sql-100p.png";
import iconMySQL from "../../assets/images/icon-mysql-100p.png";
import iconBootstrap from "../../assets/images/icon-bootstrap-100p.png";
import iconCSS from "../../assets/images/icon-css-100p.png";
import iconHTML from "../../assets/images/icon-html-100p.png";
import elemetrixAdditionalFirst from "../../assets/images/elemetrix-additional-first.gif";
import elemetrixAdditionalSecond from "../../assets/images/elemetrix-additional-second.gif";

function ElemetrixContent() {

  return (
    <>
      <div className="flex justify-around text-center">
        <div>
          <img src={elemetrix} width="655" height="655"/>
        </div>
        <div className="mt-3">
          <h2 className="text-5xl font-semibold">ELEMETRIX.ORG</h2>
          <h4 className="mt-1 text-lg font-medium">(изначальное название: STATZAKAZ)</h4>
          <h3 className="mt-6 text-xl font-medium">Начало разработки: <b className="font-normal">2019 г.</b></h3>
          <h3 className="text-xl font-medium">Закрыт в <b className="font-normal">2021 г.</b></h3>
          <h3 className="mt-6 mb-3 text-xl font-medium">Описание проекта:</h3>
          <p>Платный сервис, главным образом предназначенный<br />содействовать специалистам любой сферы деятельности,<br /> где возможно применение методов статистического анализа,<br /> а также обработки и визуализации данных, для уменьшения<br />информационной неопределенности при принятии решений.</p>
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
          </Banner>
          <div className="mt-6 flex justify-center text-gray-700 animate-bounce"><IoCaretDown size={22}/><IoCaretDown size={22}/><IoCaretDown size={22}/></div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="mt-6 mb-3 text-xl font-medium">Краткая история проекта:</h3>
        <p>Стремтельное развитие проекта в основном наблюдалось при регулярных вложениях в рекламу на сервисах Яндекс.Диркет и Google Ads (бывший AdWords),<br />а также за счет продвижения в поисковой выдаче путем создания на сайте базы знаний и наполнения её бесплатным контентом в виде статей, <br />ведущих на страницу оформления заказа по интересующим посетителей тематикам. </p>
        <p className="mt-3">Наибольшее число заказов (около 40% от всего количества) – поступало от студентов, обучающихся гуманитарным дисциплинам,<br />с просьбами оказать помощь в написании и оформлении мат. части для курсовых и дипломных работ.  </p>
        <p className="mt-3">Причиной закрытия проекта и одновременно его самым значимым для меня успехом стало моё трудоустройство на должность менеджера-аналитика<br />в сфере интернет-торговли, ведь учитывая, что проект изначально разрабатывался мною на досуге, в качестве эксперимента – получить через него приглашение на высокооплачиваемую работу — в свое время стало приятным сюрпризом.</p>
        <h3 className="mt-6 text-xl font-medium">Больше визуального контента из проекта:</h3>
        <h4 className="mt-6 text-lg font-normal">1. Описания стандартных услуг на сайте</h4>
        <div className="mt-6 flex justify-center">
          <img src={elemetrixAdditionalFirst} />
        </div>
        <h4 className="mt-6 text-lg font-normal">2. Прочий контент со страниц проекта (форма заказа, информационный блок и т.д.) </h4>
        <div className="mt-6 flex justify-center">
          <img src={elemetrixAdditionalSecond} width="900" height="550" />
        </div>
        <h3 className="mt-6 mb-6 text-xl font-medium">Демонстрационные примеры подробных отчетов из трех типов стандартных комплектов:</h3>
        <Banner className="p-2 flex justify-evenly bg-slate-600 border rounded-3xl border-slate-300">
          <a target="_blank" rel="noopener noreferrer" href="./downloads/pdf/BASIC-FULL.pdf">
            <FaFilePdf size={65} />
            Комлпект<br />
            <b>"BASIC"</b>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="./downloads/pdf/PLUS-FULL.pdf">
            <FaFilePdf size={65} />
            Комлпект<br />
            <b>"PLUS"</b>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="./downloads/pdf/EXPERT-FULL.pdf">
            <FaFilePdf size={65} />
            Комлпект<br />
            <b>"EXPERT"</b>
          </a>
        </Banner>
      </div>
      
    </>
    );
  }

  export default ElemetrixContent;
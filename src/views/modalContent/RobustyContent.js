import { Banner } from "flowbite-react";
import { IoCaretDown } from "react-icons/io5";

import robusty from "../../assets/images/robusty.gif";
import iconVanillaJS from "../../assets/images/icon-vanillajs-100p.png";
import iconReact from "../../assets/images/icon-react-100p.png";
import iconElectron from "../../assets/images/icon-electron-100p.png";
import iconNwJS from "../../assets/images/icon-nwjs-100p.png";
import iconMathJS from "../../assets/images/icon-mathjs-100p.png";
import iconTailwind from "../../assets/images/icon-tailwind-100p.png";


function RobustyContent() {

  return (
    <>
      <div className="flex justify-around text-center">      
        <div className="mt-3">
          <h2 className="text-4xl font-bold">RobustyAppEngine</h2>
          <h3 className="mt-6 text-xl font-medium">Начало разработки: <b className="font-normal">2024 г.</b></h3>        
          <h3 className="mt-6 mb-3 text-xl font-medium">Краткое описание проекта:</h3>
          <p>Проект движка многофункционального десктопного<br />  приложения, предназначенного для отслеживания и контроля<br /> большинства аспектов деятельности коммерческой организации.</p>
          <p className="mt-3">Данная разработка мотивирована мною, во-первых,<br /> потребностью в закреплении знаний и умений, сведения<br /> в одно целое множества освоенного мною при карьерном<br /> росте для более простого написания подобного приложения<br /> или же отдельных его компонентов при такой необходимости<br /> в будущем. Во-вторых, разработка претендует впоследствии<br /> стать самостоятельным коммерческим продуктом.</p> 
          <h3 className="mt-6 mb-3 text-xl font-medium">Используемые языки, фреймворки, технологии:</h3>
          <Banner className="p-2 flex justify-evenly bg-slate-600 border rounded-3xl border-slate-300">
          <a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/wiki/Javascript">
              <img src={iconVanillaJS} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://react.dev/">
              <img src={iconReact} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.electronjs.org/ru/">
              <img src={iconElectron} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://nwjs.io/">
              <img src={iconNwJS} width="65" height="65" />
            </a>            
            <a target="_blank" rel="noopener noreferrer" href="https://mathjs.org/">
              <img src={iconMathJS} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/">
              <img src={iconTailwind} width="65" height="65" />
            </a>
          </Banner>
          <div className="mt-6 flex justify-center text-gray-700 animate-bounce"><IoCaretDown size={22}/><IoCaretDown size={22}/><IoCaretDown size={22}/></div>
        </div>
        <div>
          <img src={robusty}  width="700" height="700"/>
        </div>
      </div>
      <div className="text-center">
        <h3 className="mt-6 mb-3 text-xl font-medium">Примечание к описанию выше:</h3>
        <p>Изначально разработка проекта, а точнее "десктопизация" самого приложения планировалась путём задействования NW.js, но затем,<br /> после переосмысления концепции, для этой цели мною решено было использовать Electron, именно поэтому оба фреймворка<br /> перечислены выше, т.к. оба варианта продолжают существовать на стадиях разработки и тестирования.</p>
        <h3 className="mt-6 mb-3 text-xl font-medium">Больше визуального контента из проекта:</h3>
        <div className="my-6 flex justify-center">
          <iframe width="1050" height="550" src="https://rutube.ru/play/embed/c41ee2878ad34132d55ca469363fd9ce" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        </div>
        <p className="text-lg">1/2 – Видео с демонстрационной версией приложения</p>
        <div className="my-6 flex justify-center">
          <iframe width="1050" height="550" src="https://rutube.ru/play/embed/82fc6c15d7ca8c38e6f049b017dc320f" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        </div>
        <p className="mt-6 text-lg">2/2 – Демонстрационное видео с внутренним мини-приложением "Задачи"</p>
        
      </div>
    </>
    
    );
  }

  export default RobustyContent; 
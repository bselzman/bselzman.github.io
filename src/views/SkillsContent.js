import { Card } from "flowbite-react";
import { FaChartBar, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { BsFileRichtext } from "react-icons/bs";

function SkillsContent() {
  
  return (
    <div className="bg-slate-700 w-5/6 rounded-b-2xl p-6 border-b-8 border-r-8 border-black">
      <div className="flex flex-row gap-4 text-gray-900">
        <Card className="bg-gradient-to-t from-slate-500 to-slate-200 w-full flex flex-col">
          <div className="flex flex-row text-xl my-4 font-semibold">
            <FaCode size={30} className="mr-3" />
            Веб-разработка, программирование 
          </div>
          <p className="text-black">Создание лендингов, многофункциональных сайтов, а также приложений на большинство платформ и ОС.</p>
          <p className="text-gray-800 italic">Моё становление в веб-программировании начиналось с изучения <a target="_blank" rel="noopener noreferrer" className="font-medium underline text-teal-700" href="https://www.php.net/">PHP</a> и <a target="_blank" rel="noopener noreferrer" className="font-medium underline text-teal-700" href="https://www.python.org/">Python</a>, сейчас же пишу в основном на JavaScript (помимо VanillaJS, стандарт <a target="_blank" rel="noopener noreferrer" className="font-medium underline text-teal-700" href="https://nodejs.org/api/modules.html">CommonJS</a>, фреймворк <a target="_blank" rel="noopener noreferrer" className="font-medium underline text-teal-700" href="https://react.dev/">React</a>), применяя для фронтенда <a target="_blank" rel="noopener noreferrer" className="font-medium underline text-teal-700" href="https://tailwindcss.com/">Tailwind CSS</a>, платные шаблоны <a target="_blank" rel="noopener noreferrer" className="font-medium underline text-teal-700" href="https://tailwindui.com/">Tailwind UI</a>, плагин <a target="_blank" rel="noopener noreferrer" className="font-medium underline text-teal-700" href="https://flowbite-react.com/">Flowbite</a>, и многое др.</p>
        </Card>
        <Card className="bg-gradient-to-t from-slate-500 to-slate-200 w-full flex flex-col">
          <div className="flex flex-row text-xl my-4 font-semibold">
            <FaChartBar size={30} className="mr-3" />
            Аналитика данных, систематизация
          </div>
          <p className="text-black">Поиск закономерностей и тенденций, построение моделей на основе эмпирических данных, автоматизация расчетно-вычислительных операций, необходимых для выполнения данных задач с целью оптимизации бизнес-процессов.</p>
          <p className="text-gray-800 italic">Считаю, т.к. убежден на практике, что количественно измерить, вероятностно оценить, либо алгоритмически представить – возможно практически всё, что угодно.</p>
        </Card>
       <Card className="bg-gradient-to-t from-slate-500 to-slate-200 w-full flex flex-col">
          <div className="flex flex-row text-xl my-4 font-semibold">
            <BsFileRichtext size={30} className="mr-3" />
            Контент, графический дизайн
          </div>
          <p className="text-black">Создание уникальных логотипов, баннеров и инфографики, написание SEO-текстов и статей, а также генерация графического и текстового контента средствами ИИ для наполнения содержимым разрабатываемых веб-проектов, инструкций, документаций, технических описаний к ним.</p>          
          <p className="text-gray-800 italic">Всё, что касается визуализации в рамках двух основных профилей (разработка, аналитика) – мне даётся без труда.</p>
        </Card>
      </div>
    </div>
    );
  }

  export default SkillsContent;
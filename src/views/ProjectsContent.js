import { useState } from "react";
import { Card, Table, Button, Modal } from "flowbite-react";
import { IoBriefcase, IoAlbums, IoCaretBack, IoCaretForward, IoCaretDown, IoOpenOutline } from "react-icons/io5";

import RobustyContent from "./modalContent/RobustyContent";
import ElemetrixContent from "./modalContent/ElemetrixContent";
import RCLHContent from "./modalContent/RCLHContent";
import OtherWorksContent from "./modalContent/OtherWorksContent";

import imgOtherWorks from "../assets/images/imgholder.png"

function ProjectsContent() {

  const [openModal, setOpenModal] = useState(false);
  const [contentRobusty, setContentRobusty] = useState(false); const [contentElemetrix, setContentElemetrix] = useState(false); const [contentRCLH, setContentRCLH] = useState(false); const selectContentRobusty = () => { setContentRobusty(true); setContentElemetrix(false); setContentRCLH(false); }; const selectContentElemetrix = () => { setContentElemetrix(true); setContentRobusty(false); setContentRCLH(false); }; const selectContentRCLH = () => { setContentRCLH(true); setContentRobusty(false); setContentElemetrix(false); };
  const modalRobusty  = (event) => { event.preventDefault(); setOpenModal(true); selectContentRobusty(); }; const modalElemetrix  = (event) => { event.preventDefault(); setOpenModal(true); selectContentElemetrix(); }; const modalRCLH  = (event) => { event.preventDefault(); setOpenModal(true); selectContentRCLH(); }; const modalOtherWorksContent = (event) => { event.preventDefault(); setOpenModal(true); setContentRobusty(false); setContentElemetrix(false); setContentRCLH(false); };
  const changetoRobusty =  (event) => { event.preventDefault(); document.getElementById('modal-body-area').scrollTop = 0; selectContentRobusty(); }; const changetoElemetrix =  (event) => { event.preventDefault(); document.getElementById('modal-body-area').scrollTop = 0; selectContentElemetrix(); }; const changetoRCLH =  (event) => { event.preventDefault(); document.getElementById('modal-body-area').scrollTop = 0; selectContentRCLH(); };
  return (
    <>
      <div className="bg-slate-700 w-5/6 rounded-b-2xl p-6 border-b-8 border-r-8 border-black">
        <div className="flex flex-row gap-4 text-gray-900">
          <Card className="w-full bg-gradient-to-t from-slate-500 to-slate-200 flex flex-col">
            <div className="flex flex-row text-xl my-4 font-semibold">
              <IoBriefcase size={30} className="mr-3" />
              Самостоятельные проекты
            </div>
            <div className="overflow-x-auto rounded-3xl">
              <Table>
                <Table.Head>  
                  <Table.HeadCell className="bg-gray-600 text-gray-300">Название</Table.HeadCell>
                  <Table.HeadCell className="bg-gray-600 text-gray-300">Тип проекта</Table.HeadCell>
                  <Table.HeadCell className="bg-gray-600 text-gray-300">Статус разработки</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row onClick={ modalRobusty } className="cursor-pointer ml-5 border-gray-700 bg-gray-800 hover:bg-gray-700" size={22}>
                    <Table.Cell className="whitespace-nowrap font-medium text-white">
                      RobustyAppEngine
                    </Table.Cell>
                    <Table.Cell className="text-gray-400">Демонстрационный, экспериментальный</Table.Cell>
                    <Table.Cell className="text-cyan-500">В процессе</Table.Cell>
                  </Table.Row>                  
                  <Table.Row onClick={ modalElemetrix } className="cursor-pointer ml-5 border-gray-700 bg-gray-800 hover:bg-gray-700" size={22}>
                    <Table.Cell className="whitespace-nowrap font-medium text-white">
                    ELEMETRIX.ORG
                    </Table.Cell>
                    <Table.Cell className="text-gray-400">Коммерческий, экспериментальный</Table.Cell>
                    <Table.Cell className="text-emerald-500">Завершена</Table.Cell>
                  </Table.Row>
                  <Table.Row onClick={ modalRCLH } className="cursor-pointer ml-5 border-gray-700 bg-gray-800 hover:bg-gray-700" size={22}>
                    <Table.Cell className="whitespace-nowrap font-medium text-white">
                    RCLH Employees' App
                    </Table.Cell>                    
                    <Table.Cell className="text-gray-400">Коммерческий</Table.Cell>
                    <Table.Cell className="text-emerald-500">Завершена</Table.Cell>
                  </Table.Row>                  
                </Table.Body>
              </Table>
            </div>
          </Card>
          <Card className="w-full bg-gradient-to-t from-slate-500 to-slate-200 flex flex-col">
            <div className="flex flex-row text-xl my-4 font-semibold">
              <IoAlbums size={30} className="mr-3" />
              Прочие работы
            </div>
            <div onClick={ modalOtherWorksContent } className="cursor-pointer hover:animate-pulse">
              <img className="mt-1 rounded-3xl" src={imgOtherWorks} />
            </div>            
          </Card>
        </div>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl">
        <Modal.Header className="bg-slate-500 border-slate-500">{ contentRobusty || contentElemetrix || contentRCLH ? 'Самостоятельные проекты – ' : 'Прочие работы' }{ contentRobusty ? 'RobustyAppEngine' : contentElemetrix ? 'ELEMETRIX.PRO': contentRCLH ? `RCLH Employees' App` : (null) }</Modal.Header>
        <Modal.Body id="modal-body-area" className="bg-gradient-to-t from-slate-500 to-slate-200 scrollable">
          { contentRobusty ? ( <RobustyContent /> ) : contentElemetrix ? ( <ElemetrixContent /> ) : contentRCLH ? ( <RCLHContent /> ) : ( <OtherWorksContent /> ) } 
        </Modal.Body>
        <Modal.Footer className="bg-slate-500 border-none flex justify-center">
          { contentRobusty || contentElemetrix || contentRCLH ? (<>
            <Button onClick={ contentRobusty ? changetoRCLH : contentElemetrix ? changetoRobusty : contentRCLH ? changetoElemetrix : (null) } className="px-16 bg-slate-400 text-gray-900 border border-gray-600 hover:enabled:bg-slate-300 hover:enabled:text-gray-900 hover:enabled:border-gray-400">
              <IoCaretBack size={22} className="mr-3" />
              Предыдущий
            </Button>
            <Button onClick={() => setOpenModal(false)} className="px-16 bg-slate-400 text-gray-900 border border-gray-600 hover:enabled:bg-slate-300 hover:enabled:text-gray-900 hover:enabled:border-gray-400">
              <IoCaretDown size={22} className="mr-3" />
              Скрыть
            </Button>
            <Button onClick={ contentRobusty ? changetoElemetrix : contentElemetrix ? changetoRCLH : contentRCLH ? changetoRobusty : (null) } className="px-16 bg-slate-400 text-gray-900 border border-gray-600 hover:enabled:bg-slate-300 hover:enabled:text-gray-900 hover:enabled:border-gray-400">
              <IoCaretForward size={22} className="mr-3" />
              Следующий
            </Button>
          </>) : ( <>
            <Button onClick={() => setOpenModal(false)} className="px-16 bg-slate-400 text-gray-900 border border-gray-600 hover:enabled:bg-slate-300 hover:enabled:text-gray-900 hover:enabled:border-gray-400">
              <IoCaretDown size={22} className="mr-3" />
              Скрыть
            </Button>
          </> ) }
        </Modal.Footer>
      </Modal>
    </>
    );
  }

  export default ProjectsContent;
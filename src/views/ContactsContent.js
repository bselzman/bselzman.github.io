
import { useState } from "react";
import { Card, Button, Modal } from "flowbite-react";
import copy from 'copy-to-clipboard';

import { FaTelegramPlane, FaAddressCard } from "react-icons/fa";
import { RiMailSendFill, RiFileCopy2Line, RiMailAddFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { IoChatboxEllipses, IoCall, IoMail, IoAlertCircle, IoOpenOutline} from "react-icons/io5";

function ContactsContent() {

  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [alertModalNum, setAlertModalNum] = useState(false); const [alertModalTg, setAlertModalTg] = useState(false); const [alertModalEmail, setAlertModalEmail] = useState(false); const selectAlertModalNum = () => { setAlertModalNum(true); setAlertModalTg(false); setAlertModalEmail(false); }; const selectAlertModalTg = () => { setAlertModalTg(true); setAlertModalNum(false); setAlertModalEmail(false); }; const selectAlertModalEmail = () => { setAlertModalEmail(true); setAlertModalNum(false); setAlertModalTg(false); };
  const copyNum = (event) => { event.preventDefault(); copy('+79995549980'); selectAlertModalNum(); setOpenAlertModal(true); };  const copyTg = (event) => { event.preventDefault(); copy('bselzman'); selectAlertModalTg(); setOpenAlertModal(true); };  const copyEmail = (event) => { event.preventDefault(); copy('b.selzman@yandex.ru'); selectAlertModalEmail(); setOpenAlertModal(true); };
  const callNum = (event) => { event.preventDefault(); window.open('tel:+79995549980', '_blank') }; const openTg = (event) => { event.preventDefault(); window.open('https://t.me/bselzman', '_blank') }; const newEmail = (event) => { event.preventDefault(); window.open('mailto:b.selzman@yandex.ru', '_blank') };
  const handleSubmit = (event) => { event.preventDefault(); const url = `https://api.telegram.org/bot7059486272:AAFcNoIJr3JFdFv6I0uuJ5dwuU2kXYC8NoA/sendMessage?chat_id=1048773444&text=${event.target.name.value + ' ' +  event.target.message.value}`; const xht = new XMLHttpRequest(); xht.open("GET", url); xht.send(); setAlertModalTg(false); setAlertModalNum(false); setAlertModalEmail(false); setOpenAlertModal(true); }


  return (
    <>
      <div className="bg-slate-700 w-5/6 rounded-b-2xl p-6 border-b-8 border-r-8 border-black">
        <div className="flex flex-row gap-4 text-gray-900">
          <Card className="bg-gradient-to-t from-slate-500 to-slate-200 w-full flex flex-col">
            <div className="flex flex-row text-xl my-4 font-semibold">
              <IoChatboxEllipses size={30} className="mr-3" />
              Форма связи
            </div>
            <form onSubmit={handleSubmit} autocomplete="off" className="flex w-full flex-col gap-2">
              <div>
                <input className="w-full bg-gray-700 rounded-lg placeholder:text-gray-400 text-gray-300 border-0" id="name" name="name" type="text" placeholder="Ваше имя и средство связи (Иван, +79123456789):" required />
              </div>
              <div>
              <textarea className="w-full bg-gray-700 rounded-lg placeholder:text-gray-400 text-gray-300 border-0" id="message" name="message" placeholder="Ваше сообщение:" required rows={2} />
              </div>
              <Button className="flex justify-center bg-slate-700 text-gray-200 border-gray-400 hover:enabled:bg-slate-600" type="submit">
                <RiMailSendFill size={18} className="mr-3"/>
                Отправить сообщение
              </Button>
            </form>
          </Card>
          <Card className="bg-gradient-to-t from-slate-500 to-slate-200 w-full flex flex-col">
            <div className="flex flex-row text-xl my-4 font-semibold">
              <FaAddressCard size={30} className="mr-3" />
              Контактные данные
            </div>
            <div className="flex flex-row items-center">
            <IoCall size={25} className="mr-3"/>
              <input className="w-3/6 bg-gray-700 rounded-l-lg text-gray-300 border-r" disabled type="text" value="Номер телефона:" />
              <input className="w-3/6 mr-3 text-right bg-gray-700 rounded-r-lg text-gray-300 border-l" disabled type="text" value="+79995549980" />
              <Button className="mr-1 bg-slate-700 text-gray-200 border-gray-400 hover:enabled:bg-slate-600"onClick={copyNum}>
                <RiFileCopy2Line size={18 }/>              
              </Button>
              <Button className="bg-slate-700 text-gray-200 border-gray-400 hover:enabled:bg-slate-600" onClick={callNum}>
                <IoMdCall size={18 }/>
              </Button>
            </div>
            <div className="flex flex-row items-center">
              <FaTelegramPlane size={25} className="mr-3"/>
              <input className="w-3/6 bg-gray-700 rounded-l-lg text-gray-300 border-r" disabled type="text" value="Telegram:" />
              <input className="w-3/6 mr-3 text-right bg-gray-700 rounded-r-lg text-gray-300 border-l" disabled type="text" value="bselzman" />
              <Button className="mr-1 bg-slate-700 text-gray-200 border-gray-400 hover:enabled:bg-slate-600" onClick={copyTg}>
                <RiFileCopy2Line size={18 }/>
              </Button>
              <Button className="bg-slate-700 text-gray-200 border-gray-400 hover:enabled:bg-slate-600" onClick={openTg}>
                <IoOpenOutline size={18 }/>              
              </Button>
            </div>
            <div className="flex flex-row items-center">
              <IoMail size={25} className="mr-3"/>
              <input className="w-3/6 bg-gray-700 rounded-l-lg text-gray-300 border-r" disabled type="text" value="E-mail:" />
              <input className="w-3/6 mr-3 text-right bg-gray-700 rounded-r-lg text-gray-300 border-l" disabled type="text" value="b.selzman@yandex.ru" />
              <Button className="mr-1 bg-slate-700 text-gray-200 border-gray-400 hover:enabled:bg-slate-600" onClick={copyEmail}>
                <RiFileCopy2Line size={18 }/>
              </Button>
              <Button className="bg-slate-700 text-gray-200 border-gray-400 hover:enabled:bg-slate-600" onClick={newEmail}>
                <RiMailAddFill size={18 }/>
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <Modal show={openAlertModal} onClose={() => setOpenAlertModal(false)} size="lg">
        <Modal.Header className="bg-slate-500 border-slate-500">Уведомление</Modal.Header>
        <Modal.Body id="modal-body-area" className="bg-gradient-to-t from-slate-500 to-slate-200 flex items-center justify-center text-center text-lg">
          <IoAlertCircle size={90} className="mr-10" />
          { alertModalNum ? 'Номер телефона' : alertModalTg ? `Юзернейм в Telegram'e` : alertModalEmail ? 'Адрес электронной почты' : (null) } 
          { (alertModalNum || alertModalTg || alertModalEmail) ? (<><br />скопирован в буфер обмена!</>) : (<> Ваше сообщение <br />отправлено!</>)}        
        </Modal.Body>
        <Modal.Footer className="bg-slate-500 border-none flex justify-center">
          <Button onClick={() => setOpenAlertModal(false)} className="px-16 bg-slate-400 text-gray-900 border border-gray-600 hover:enabled:bg-slate-300 hover:enabled:text-gray-900 hover:enabled:border-gray-400">
            ОК
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  }

  export default ContactsContent;
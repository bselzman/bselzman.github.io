import { useState } from "react";
import { Button } from "flowbite-react";

import { IoSchool, IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";

import SkillsContent from "../views/SkillsContent";
import ProjectsContent from "../views/ProjectsContent";
import ContactsContent from "../views/ContactsContent";

function ContentMenu() {

    const [contentSkills, setContentSkills] = useState(true); const [contentProjects, setContentProjects] = useState(false); const [contentContacts, setContentContacts] = useState(false); const selectContentSkills = () => { setContentSkills(true); setContentProjects(false); setContentContacts(false); }; const selectContentProjects = () => { setContentProjects(true); setContentSkills(false); setContentContacts(false); }; const selectContentContacts = () => { setContentContacts(true); setContentSkills(false); setContentProjects(false); };

    return(
    <>
        <div className="text-center w-5/6 rounded-t-2xl py-5 border-r-8 border-black bg-slate-800">
            <Button.Group>
                <Button onClick={ selectContentSkills } className={`md:px-10 border ${ contentSkills ? 'bg-slate-500 text-gray-300 border-gray-500 hover:enabled:bg-slate-500' : 'bg-slate-400 text-black border border-gray-600 hover:enabled:bg-slate-300 hover:enabled:text-gray-900 hover:enabled:border-gray-400'}`}>
                    <IoSchool size={30} className={`mr-3 ${ contentSkills ? '' : 'animate-pulse'}`} />
                    <b className={`text-xl font-normal ${ contentSkills ? '' : 'animate-pulse'}`}>
                        Навыки
                    </b>
                </Button>
                <Button onClick={ selectContentProjects } className={`md:px-10 border ${ contentProjects ? 'bg-slate-500 text-gray-300 border-gray-500 hover:enabled:bg-slate-500' : 'bg-slate-400 text-black border border-gray-600 hover:enabled:bg-slate-300 hover:enabled:text-gray-900 hover:enabled:border-gray-400'}`}>
                    <MdOutlineLibraryBooks size={30} className={`mr-3 ${ contentProjects ? '' : 'animate-pulse'}`} />
                    <b className={`text-xl font-normal ${ contentProjects ? '' : 'animate-pulse'}`}>
                        Проекты
                    </b>
                </Button>
                <Button onClick={ selectContentContacts } className={`md:px-10 border ${ contentContacts ? 'bg-slate-500 text-gray-300 border-gray-500 hover:enabled:bg-slate-500' : 'bg-slate-400 text-black border border-gray-600 hover:enabled:bg-slate-300 hover:enabled:text-gray-900 hover:enabled:border-gray-400'}`}>
                    <IoPersonCircleOutline size={30} className={`mr-3 ${ contentContacts ? '' : 'animate-pulse'}`} />
                    <b className={`text-xl font-normal ${ contentContacts ? '' : 'animate-pulse'}`}>
                        Контакты
                    </b>
                </Button>
            </Button.Group>
        </div>

        { contentSkills ? ( <SkillsContent /> ) : contentProjects ? ( <ProjectsContent /> ) : contentContacts ? ( <ContactsContent /> ) : (null) }
    </>
    );
}

export default ContentMenu;
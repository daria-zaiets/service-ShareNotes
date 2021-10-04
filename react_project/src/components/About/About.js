import { NavLink } from 'react-router-dom';
import gmail from './img/gmail-icon.svg';
import telegram from './img/telegram-icon.svg';
import './About.css';
function About() {
    return (
        <main>         
            <div className="inner-container">
                <p> Работа, семья, хобби... </p>
                <p> В современном мире, мы постоянно куда-то спешим, что-то делаем, за что-то переживаем. Каждый день нам приходиться       обрабатыывать уйму информации. Поэтому, становится неизбежно, что мы не замечаем или забываем определенные моменты. В связи с этим и был разработан сервис обменом заметками ShareNotes.</p>
                <p> Данный сайт был создан, чтоб избавить Вас от проблем с запоминанием всех предстоящих событий на день, неделю или даже месяц. Скажите "нет" запискам на холодильниках и узелкам по всему дому - ведь ShareNotes доступен с любого устройства. Просто зайдите в любимый браузер и введите адрес. </p>
                <p> Для создания заметки нет необходимости проходить сложных процедур: поле для ввода и кнопка, - это все что Вам нужно. После создания, на странице будет выведен код, который даст доступ к Вашему сообщению в любое время и в любом месте. А также, защитит его от прочтения другими странными личностями.</p> 
                <p>Полная инструкция пользования ShareNotes находтся на главной странице(обратитесь к ней, если появятся вопросы).</p>                
                <p className="subheading center">&#9660; Начните работу с сервисом прямо сейчас &#9660;</p>
                <div className='box-link'>
                    <NavLink to="/create" className='link-btn'>Создать note</NavLink>
                    <NavLink to="/note" className='link-btn'>Посмотреть note</NavLink>
                </div>
                <p>Если же Вы не смогли найти ответ на интересующий вопрос или хотите поделиться идеями по улучшению сервиса, пожалуйста, свяжитесь со мной по одному из нижеуказаных адресов:</p>               
                <ul className="contacts">
                    <li className='contact-item'>
                        <img src={gmail} alt="gmail" className='logo-img' />
                        <p className='contact-title'>zaiets.dar@gmail.com</p>
                    </li>
                    <li className='contact-item'>
                        <img src={telegram} alt="tg" className='logo-img' />
                        <p className='contact-title'>@daria_zaiets</p>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default About;
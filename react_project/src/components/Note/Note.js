import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import env from '../../env.json';
import './Note.css';

function Note() {

    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide'); 
    const [errorClass, setErrorClass] = useState('hide'); 

    useEffect(() => {
        if( noteURL !== undefined) {
            console.log(noteURL);
            fetch(env.urlBackend, {
                method : "Post",
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body : JSON.stringify({'url': noteURL})
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if(response.result) {
                    setNoteText(response.note);
                    setLineClass('');
                    setErrorClass('hide');
                    setFormClass('hide');
                } else {
                    setErrorClass('');
                    setLineClass('hide');
                    setFormClass('hide');
                }
            })
        } else {
            setFormClass('');
            setErrorClass('hide');
            setLineClass('hide');
        }
    }, [])

    const getNote = (event) => {
        event.preventDefault();

        let url = event.target.elements.url.value;
        url = url.trim();

        if(url === '') {
            alert("Вы не ввели хеш. Увы, но с пустым полем невозможно найти заметку. Пожалуйста, заполните это поле");
            return false;
        }

        noteURL = url;

        window.location.href = env.url + '/' + url;
    }   
    
    const searchNote = () => {
        window.location.href = env.url;
    }
    
    return (
        <main>   
            <div className="inner-container">
                <div className={`${lineClass} align-center`}>
                    <h4 className='label-note'>Заметка: </h4>
                    <div className='note-text'> {noteText} </div>
                    <button onClick={searchNote}>Найти еще</button>
                </div>

                <form className={`${formClass} align-center`} onSubmit={getNote}>
                    <label htmlFor="url" className='label-note'>Введите хеш: </label>
                    <input name="url" id="url"/>
                    <p className='notice'> 
                    <span className='error-color'> Обратите внимание! </span> В данное поле нужно ввести только хеш.
                    </p>
                        <button type="submit">Найти заметку</button>
                </form>     

                <div className={errorClass}>
                    <p className='error-text error-color'> В процессе поика возникла ошибка. Пожалуйста, попытайтесь снова.</p>
                    <div className="align-center">
                        <button onClick={searchNote}>Найти еще раз</button>
                    </div>
                </div>
            </div> 
        </main>

    );
}

export default Note;
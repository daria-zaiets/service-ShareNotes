import React, { useState } from 'react';
import env from '../../env.json';
import './Create.css';


function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState(''); 

    const sendData = (data) => {
        setFormClass('hide');
        setLineClass('');
        
        fetch(env.urlBackend, {
            method : "Post",
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body : JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if(response.result) {
                setUrl(env.url + '/' + response.url);
            }
        })
    }

    const loadDataFromForm = (event) => {
        event.preventDefault();

        const note = event.target.elements.note.value;

        if(note === '') {
            alert("Вы оставили поле для записи пустым. Введите заметку и тогда сможете ею поделиться :)");
            return false;
        }

        sendData({'note' : note});
    }

    return (
        <main>         
            <div className="inner-container">
                <form onSubmit={loadDataFromForm} className={`${formClass} align-center`}>
                    <label htmlFor="note" className='label-note'>Ваша заметка: </label>
                    <textarea name="note" id="note" placeholder='Введите текст'></textarea>
                    <button type="submit">Создать</button>
                </form>
                <div className={`${lineClass} align-center`}>
                    <div className='note-text'> {url} </div>
                    <button onClick={() => window.location.reload()}>
                        Создать еще
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Create;
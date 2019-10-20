import React from 'react';
import { Redirect } from 'react-router-dom'


const AddUser = ({adduser}) => {
   //console.log(props)

    return (
        <div>
            <div className="container">
                <div className="h2">Добовления пользовотеля</div>
                <form className="newUser">
                    <label>
                        Имя:
                        <input className="form-control mt-2 name" type="text" name="firstname" placeholder="Введите имя" required />
                    </label>
                    <label>
                        Фамилия:
                        <input className="form-control mt-2 lastname" type="text" name="lastname" placeholder="Введите фомилию" required />
                    </label>
                    <textarea name="about" className="form-control mt-2" placeholder="О себе" rows="10" column="10" required></textarea>
                    <button type="submit" className="btn btn-primary" onClick={(e) => {
                        e.preventDefault();
                        let name = document.querySelector('.name').value;
                        let lastname = document.querySelector('.lastname').value;
                        let about = document.querySelector('textarea').value;
                        
                        adduser( name, lastname, about );
                        name = '';
                        lastname = '';
                        about = '';
                    }

                    } >Сохранить</button>

                </form>
            </div>
        </div>
    );
}

export default AddUser
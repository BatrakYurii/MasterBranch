import React from "react";

export class Registration extends React.Component{

    render(){
        return <div>
            <form className="form-style">
                <div>
                    <label htmlFor="lastname">
                        Фамилия:
                    </label>
                    <input type="text" name="lastname" minLength={3} maxLength={20}></input>
                </div>
                <div>
                    <label htmlFor="name">
                        Имя:
                    </label>
                    <input type="text" name="name" minLength={3} maxLength={20} />
                </div>
                <div>
                <label htmlFor="thirdname">
                        Отчество:
                    </label>
                    <input type="text" name="patron" />
                </div>
                <div>
                    <label htmlFor="dateOfBirth">
                        Дата рождения
                    </label>
                    <input type="date" name="dateOfBirth"  max={"2007-09-09"} step="1" />
                </div>
                <div>
                    <label htmlFor="height">
                        Рост
                    </label>
                    <input type="number" name="height" min={50} required="required" />
                </div>
                <div><input type="submit" value="Сохранить" /> </div>
           </form>
        </div>
    }
}

export default Registration;
import { Model, String, Integer, Enum } from './models'

export default class User extends Model {

    name:String = new String({
        maxLength: 12,
        defaultValue: '',
    });
    id:Integer = new Integer({
        maxLength: 10,
        defaultValue: 0
    })
    gender:Enum<string> = new Enum({
        values : ['Male', 'Female'],
        defaultValue : 'Male'
    });

    toString() {
        return this.name.toString();
    }
    
}
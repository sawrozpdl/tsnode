export class Model {

    constructor() {

    }

    create() {
        console.log(`tableName =>  ${this.constructor.name}`);
        console.log('Attributes: ');
        for (let key in this) {
            console.log(`${key} --> ${this[key]}`);
        }
    }

    getAll() {

    }

    save() {

    }

    del() {

    }

    update() {

    }
}

interface AttributeInterface {
    primaryKey?: boolean
    notNull?: boolean
    empty?: boolean
}

interface ForeignKeyInterface {
    model:Model;
    onDelete?:string;
}

interface StringInterface extends AttributeInterface {
    maxLength: number
    defaultValue?: string
}

class Attribute implements AttributeInterface {
    primaryKey: boolean
    notNull: boolean
    empty: boolean

    constructor(properties: AttributeInterface) {
        this.primaryKey = properties.primaryKey || false;
        this.notNull = properties.notNull || true;
        this.empty = properties.notNull || false;
    }

    toString() {
        return this.constructor.name.toLowerCase();
    }
}

export class String extends Attribute implements StringInterface {

    maxLength: number = 0;
    defaultValue: string = '';

    constructor(properties: StringInterface) {
        super(properties);
        for (let key in properties) {
            this.maxLength = properties.maxLength || 6500;
            this.defaultValue = properties.defaultValue || '';
        }
    }
}

export class ForeignKey implements ForeignKeyInterface {

    model:Model;
    onDelete:string = '';

    constructor(properties: ForeignKeyInterface) {
        this.model = properties.model;
        this.onDelete = (properties.onDelete || "cascade").toUpperCase();
    }   
}

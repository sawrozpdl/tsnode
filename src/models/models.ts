export class Model {


    constructor() {

    }

    getAll() {

    }

    save() {

    }

    del() {

    }

    update() {

    }

    createTable() {
        let attributes = '';
        let primaryKey;
        for (let key in this) {
            attributes += `${key} ${(this[key]).buildQuery()}, `
            if (this[key].primaryKey) primaryKey = key;
        }
        return `CREATE TABLE ${this.constructor.name} (${attributes.substring(0, attributes.length - 2)}${(primaryKey) ? `, PRIMARY KEY (${primaryKey})` : ''})`;
    }
}

interface AttributeInterface {
    primaryKey?: boolean
    notNull?: boolean
    empty?: boolean
}

interface ForeignKeyInterface {
    model: Model;
    onDelete?: string;
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
        this.maxLength = properties.maxLength || 6500;
        this.defaultValue = properties.defaultValue || '';
    }

    buildQuery() {
        return `varchar(${this.maxLength})${this.notNull ? ' NOT NULL' : ''} DEFAULT '${this.defaultValue}'`;
    }
}

export class ForeignKey implements ForeignKeyInterface {

    model: Model;
    onDelete: string = '';

    constructor(properties: ForeignKeyInterface) {
        this.model = properties.model;
        this.onDelete = (properties.onDelete || "CASCADE").toUpperCase();
    }
}

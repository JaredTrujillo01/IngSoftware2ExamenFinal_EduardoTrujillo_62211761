import { Movement } from "./Movement";

export class Chargeback extends Movement {
    constructor(data){
        super(data);
    }

    getNetAmount() {
        return -this.amount;
    }

    getColor() {
        return 'red';
    }

    getIcon() {
        return 'undo';
    }

    getTypeName() {
        return 'Chargeback';
    }
}
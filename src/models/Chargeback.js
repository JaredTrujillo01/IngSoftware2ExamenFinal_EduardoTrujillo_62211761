import { Movement } from "./Movement";

export class Chargeback extends Movement {
    constructor(data){
        super(data);
    }

    getNetAmount() {
        return -this.amount;
    }

    getColor() {
        return '#8B0000';
    }

    getIcon() {
        return 'undo';
    }

    getTypeName() {
        return 'Chargeback';
    }
}
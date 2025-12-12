import {Deposit } from './Deposit.js';
import {Payment} from './Payment.js';
import {Transfer} from './Transfer.js';
import { Withdrawal } from './Withdrawal.js';
import {Chargeback } from './Chargeback.js';

class MovementFactory {
    static createMovement(type, data) {
        switch (type) {
            case 'deposit':
                return new Deposit(data);
            case 'payment':
                return new Payment(data);
            case 'transfer':
                return new Transfer(data);
            case 'withdrawal':
                return new Withdrawal(data);
            case 'chargeback':
                return new Chargeback(data);
            default:
                throw new Error(`Unknown movement type: ${type}`);
        }
    }
}
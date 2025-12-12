import { Deposit } from './Deposit';
import { Payment } from './Payment';
import { Transfer } from './Transfer';
import { Withdrawal } from './Withdrawal';
import { Chargeback } from './Chargeback';

class MovementFactory {
    static createMovement(data) {
        switch (data.type) {
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
                throw new Error(`Unknown movement type: ${data.type}`);
        }
    }
}

export default MovementFactory;
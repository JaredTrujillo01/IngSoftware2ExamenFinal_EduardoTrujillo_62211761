export const movementsData = [
  {
    id: 1,
    type: 'deposit',
    description: 'Depósito de nómina',
    amount: 2500.00,
    date: '2025-12-01'
  },
  {
    id: 2,
    type: 'withdrawal',
    description: 'Retiro en cajero automático',
    amount: 200.00,
    date: '2025-12-02'
  },
  {
    id: 3,
    type: 'payment',
    description: 'Pago de servicios de luz',
    amount: 85.50,
    date: '2025-12-03'
  },
  {
    id: 4,
    type: 'transfer',
    description: 'Transferencia a cuenta de ahorros',
    amount: 500.00,
    date: '2025-12-04',
    isIncoming: false
  },
  {
    id: 5,
    type: 'transfer',
    description: 'Transferencia recibida de Juan Pérez',
    amount: 150.00,
    date: '2025-12-05',
    isIncoming: true
  },
  {
    id: 6,
    type: 'payment',
    description: 'Pago de suscripción Netflix',
    amount: 15.99,
    date: '2025-12-06'
  },
  {
    id: 7,
    type: 'deposit',
    description: 'Reembolso de compra',
    amount: 45.00,
    date: '2025-12-07'
  },
  {
    id: 8,
    type: 'withdrawal',
    description: 'Retiro para gastos personales',
    amount: 100.00,
    date: '2025-12-08'
  }
  ,
  {
    id: 9,
    type: 'chargeback',
    description: 'Contracargo por compra no reconocida',
    amount: 75.00,
    date: '2025-12-09'
  }
];

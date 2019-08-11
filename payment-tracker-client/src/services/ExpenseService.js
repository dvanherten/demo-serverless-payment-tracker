export default class ExpenseService {
  async getAll() {
    var response = await fetch('api/expense', { method: 'GET' });
    return await response.json();
  }
}

export class MockExpenseService {
  async getAll() {
    return [
      { id: '1', name: 'Mocked Expense Item 1' },
      { id: '2', name: 'Mocked Expense Item 2' },
      { id: '3', name: 'Mocked Expense Item 3' }
    ];
  }
}

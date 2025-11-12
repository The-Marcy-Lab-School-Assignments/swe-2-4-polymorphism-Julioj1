/* eslint-disable max-classes-per-file */

class Payment {
  status = "pending";
  constructor(amount, recipient) {
    this.amount = amount;
    this.recipient = recipient;
  }
  process() {
    this.status = "completed";
    return `Payment of $${this.amount} to ${this.recipient} completed`
  }
  getDetails() {
    return `$${this.amount} to ${this.recipient} - Status: ${this.status}`
  }
}

class CreditCardPayment {

}

class PayPalPayment {

}

const processPayments = (payments) => {

};

module.exports = {
  Payment,
  CreditCardPayment,
  PayPalPayment,
  processPayments,
};

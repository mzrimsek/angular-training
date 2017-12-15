// import { PI, Food, isEven, Customer, Vendor } from './stuff';
import * as fromStuff from './stuff';

describe('classes and modules', () => {
  class Food {

  }

  it('can create a customer', () => {
    const cust = new fromStuff.Customer();
    cust.name = 'Bob Smith';
    expect(cust.name).toBe('Bob Smith');
  });

  it('can create a vendor', () => {
    const vendor = new fromStuff.Vendor('Gino Pizza', 1000);
    expect(vendor.name).toBe('Gino Pizza');
    vendor.makePurchase(500);
    expect(vendor.balance).toBe(500); // vendor.getBalance()
    vendor.vendorStatus = 'Retired';
    expect(vendor.vendorStatus).toBe('Retired');
  });

  it('using a gold vendor', () => {
    const vendor = new fromStuff.GoldVendor('Joe', 1000);
    vendor.makePurchase(100);
    expect(vendor.balance).toBe(910);
    vendor.print('Hello, World!');
  });

  it('using stuff', () => {
    const tacos = new Food();
    const beer: fromStuff.Food = { name: 'Beer', calories: 10 };
  });
});

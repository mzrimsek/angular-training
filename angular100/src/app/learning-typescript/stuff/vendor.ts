export class Vendor {
  private _vendorStatus: VendorType;

  constructor(public name: string, private openingBalance: number) { }

  makePurchase(amount: number) {
    this.openingBalance -= amount;
  }

  get balance(): number { // getBalance
    return this.openingBalance;
  }

  get vendorStatus() {
    return this._vendorStatus;
  }

  set vendorStatus(val: VendorType) {
    this._vendorStatus = val;
  }
}

type VendorType = 'Active' | 'Retired' | 'InDefault';

interface Printable {
  print: (message: string) => void;
}

export class GoldVendor extends Vendor implements Printable {
  print(message: string) {
    console.log('The Gold Vendor says,', message);
  }

  makePurchase(amount: number) {
    super.makePurchase(amount * .9);
  }
}

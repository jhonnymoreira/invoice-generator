interface LocationDetails {
  address: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
}

interface Company extends LocationDetails {
  name: string;
}

interface Payee extends Company {
  EIN: string;
  email: string;
  phone: string;
}

type Payer = Company;

interface Bank extends Company {
  swiftCode: string;
}

type BeneficiaryBank = Bank;

interface IntermediaryBank
  extends Omit<Bank, 'city' | 'address' | 'zipCode'> {
  accountHolder: string;
  accountNumber: string;
}

interface BeneficiaryCustomer extends LocationDetails {
  IBAN: string;
  name: string;
}

interface BankingDetails {
  beneficiaryBank: BeneficiaryBank;
  beneficiaryCustomer: BeneficiaryCustomer;
  intermediaryBank: IntermediaryBank;
}

export interface Invoice {
  bankingDetails: BankingDetails;
  description: string;
  dueDate: string;
  id: string;
  issuedAt: string;
  payee: Payee;
  payer: Payer;
  total: number;
}

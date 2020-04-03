import rave from "ravepay"

export = rave

declare const ravepay = (PUBLIC_KEY: string, SECRET_KEY: string, PRODUCTION_FLAG?: string) => ravepay.RavePay
declare module "ravepay" {
    // export = ravepay;
    export interface RavePay {
        (PUBLIC_KEY: string, SECRET_KEY: string, PRODUCTION_FLAG?: string): RavePay.RavePay
        Base: Base
        Account: Account
        Status: Status
        Bill: Bill
        Card: Card
        Ebills: Ebills
        Status: Status
        Subaccount: Subaccount
        Subscription: Subscription
        Paymentplan: Paymentplan
        MobileMoney: MobileMoney
        TokenCharge: TokenCharge
        Transfer: Transfer
        Misc: Misc
        Bvn: BVN
        USSD:USSD
        VerifyTransaction: VerifyTransaction
        CustomRequest: CustomRequest
    }

    interface Account {
        charge: (data:any) => Promise <any>
        validate: (data:any) => Promise <any>
    }

    interface Status {
        requery: (data:any) => Promise <any>
        xrequery: (data:any) => Promise <any>
    }
    
    interface Card {
        charge: ( data: any ) => Promise<any>;
        validate: ( data: any ) => Promise<any>;
    }
    interface Base {
        getPublicKey: () => string;
        getSecretKey: () => string;
        getBaseUrl: () => string;
        setBaseUrl: (data: string) => void;
        request: (path: string, data: any, callback?: any) => Promise<any>;
        encrypt: (data: any) => any;
        getIntegrityHash: (data: any) => any;
        _makeRequest: (requestOptions: any, callback?: any) => void;
        _makePromiseRequest: (requestOptions: any) => Promise<any>;
    }
    interface Status {}
    interface Account {}
    interface TokenCharge {
        card: ( data: any ) => Promise<any>;
        account: ( data: any ) => Promise<any>;
    }
    interface MobileMoney{
        mpesa: (data: any) => Promise <any>
        ghana: (data: any) => Promise <any>
        mpesa: (data: any) => Promise <any>
        mpesa: (data: any) => Promise <any>
    }
    interface MobileOptions {}
    interface Misc {
        getBanks: () => Promise<any>;
        getFee: () => Promise<any>;
    
        getBanksForTransfer: ( country: string) => Promise<any>;
        disburse: () => Promise<any>;
    }
    
    interface Bill {
        validate: (data: any) => Promise<any>;
        getCategories: () => Promise<any>;
    }
    interface Ebills {
        create: (data: any) => Promise<any>
        update: (data: any) => Promise<any>
    }
    interface Preauth {}
    interface BVN {
        verfication: (data: any) => Promise <any>
    }
    interface Transfer {
        initiate: ( data: any ) => Promise<any>;
        accountVerification: (data: any) => Promise< any >;
    }
    interface Subaccount {}
    interface Subscription {}
    interface CustomRequest {
        custom: (path: string, data: any ) => Promise<any>;
    }
    interface Paymentplan {}
    interface USSD {
        charge: (data: any) => Promise <any>
    }
    interface VerifyTransaction {
        verify: (data: any) => Promise<any>
    }
    interface RaveObject {
        Card: Card,
        Status: Status,
        TokenCharge: TokenCharge,
        Transfer: Transfer
    }
}

declare module "ravepay" {
    // export = ravepay;
    export class ravepay {
        constructor(PUBLIC_KEY: string, SECRET_KEY: string, PRODUCTION_FLAG?: string);
    
        Base: Base
        // someProperty: string[];
        Bill: Bill
        Card: Card
        Status: Status
        TokenCharge: TokenCharge
        Transfer: Transfer
        Misc: Misc
    
        CustomRequest: CustomRequest
        // myMethod(opts: MyClass.MyClassMethodOptions): number;
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
    interface Preauth {}
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
    interface RaveObject {
        Card: Card,
        Status: Status,
        TokenCharge: TokenCharge,
        Transfer: Transfer
    }
}

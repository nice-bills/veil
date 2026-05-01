declare module '@stellar/stellar-sdk' {
  export * from '@stellar/stellar-base';

  export namespace rpc {
    export class Server {
      constructor(serverUrl: string, opts?: any);
      [key: string]: any;
    }
    export namespace Api {
      export type SimulateTransactionSuccessResponse = any;
      export type SimulateTransactionResponse = any;
      export type GetTransactionResponse = any;
      export type GetTransactionStatus = any;
      export const GetTransactionStatus: any;
      export const isSimulationError: any;
    }
    export const assembleTransaction: any;
    export const Durability: any;
  }

  export namespace Horizon {
    export class Server {
      constructor(serverUrl: string, opts?: any);
      [key: string]: any;
    }
  }
}

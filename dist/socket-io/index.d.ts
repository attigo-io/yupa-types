import { notification } from "../api/notifications/notifications.types";
import { getBitcoinRatesResponseType } from "../api/rates/rates.types";
import { SocketEvents } from "./socketEventsEnum";
export interface BaseDataWithNotification {
    data: {
        notification: notification;
    };
}
export interface DataWithNotificationAndError {
    data: {
        notification: notification;
        isError: boolean;
    };
}
export interface ServerToClientEvents {
    [SocketEvents.private_update_wallet]: () => void;
    [SocketEvents.private_payments_update]: () => void;
    [SocketEvents.private_invoice_received]: (arg: BaseDataWithNotification) => void;
    [SocketEvents.private_new_notification]: (arg: BaseDataWithNotification) => void;
    [SocketEvents.private_yupa_transfer_result]: (arg: DataWithNotificationAndError) => void;
    [SocketEvents.private_card_transaction_done]: (arg: BaseDataWithNotification) => void;
    [SocketEvents.private_card_transaction_failed]: (arg: BaseDataWithNotification) => void;
    [SocketEvents.protected_btc_price_update]: (arg: getBitcoinRatesResponseType) => void;
}
export interface ClientToServerEvents {
    [SocketEvents.client_request_btc_price_update]: () => void;
}
export * from './socketEventsEnum';
//# sourceMappingURL=index.d.ts.map
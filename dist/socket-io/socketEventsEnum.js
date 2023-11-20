"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketEvents = void 0;
var SocketEvents;
(function (SocketEvents) {
    SocketEvents["private_update_wallet"] = "private_update_wallet";
    SocketEvents["private_payments_update"] = "private_payments_update";
    SocketEvents["private_invoice_received"] = "private-invoice-received";
    SocketEvents["private_new_notification"] = "private_new_notification";
    SocketEvents["private_yupa_transfer_result"] = "private_yupa_transfer_result";
    SocketEvents["private_card_transaction_failed"] = "private_card_transaction_failed";
    SocketEvents["private_card_transaction_done"] = "private_card_transaction_done";
    SocketEvents["private_yupa_coin_received"] = "private_yupa_coin_received";
    SocketEvents["protected_btc_price_update"] = "protected_btc_price_update";
    SocketEvents["client_request_btc_price_update"] = "client_request_btc_price_update";
})(SocketEvents = exports.SocketEvents || (exports.SocketEvents = {}));

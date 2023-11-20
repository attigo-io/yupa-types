export enum SocketEvents {
  private_update_wallet = 'private_update_wallet',
  private_payments_update = 'private_payments_update',
  private_invoice_received = 'private-invoice-received',
  private_new_notification = 'private_new_notification',
  private_yupa_transfer_result = 'private_yupa_transfer_result',
  private_card_transaction_failed = 'private_card_transaction_failed',
  private_card_transaction_done = 'private_card_transaction_done',
  private_yupa_coin_received = 'private_yupa_coin_received',

  protected_btc_price_update = 'protected_btc_price_update',
  client_request_btc_price_update = 'client_request_btc_price_update',
}

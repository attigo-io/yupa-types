export enum NotificationTypes {
  INVOICE_RECEIVED = "INVOICE_RECEIVED",
  INVOICE_PAID = "INVOICE_PAID",
  SEND_TO_YUPA_SUCEEDED = "SEND_TO_YUPA_SUCEEDED",
  SEND_TO_YUPA_FAILED = "SEND_TO_YUPA_FAILED",
  RECEIVE_FROM_YUPA_SUCCEEDED = "RECEIVE_FROM_YUPA_SUCCEEDED",
  RECEIVE_FROM_YUPA_FAILED = "RECEIVE_FROM_YUPA_FAILED",
}

export interface baseNotificationData {
  doUpdateWalletBalance: boolean;
  doUpdateNodeBalance: boolean;
  doUpdateWalletHistory: boolean;
  doUpdateNodeHistory: boolean;
}

export interface invoicePaidNotificationData extends baseNotificationData {
  invoiceHash: string;
  invoiceRequest: string;
  invoiceAmountSat: number;
}

export interface invoiceReceivedNotificationData extends baseNotificationData {
  invoiceHash: string;
  invoiceRequest: string;
  invoiceAmountSat: number;
}

export interface SendToYupaSuccessNotificationData
  extends baseNotificationData {
  invoiceHash: string;
  invoiceRequest: string;
  invoiceAmountSat: number;
}

export interface SendToYupaFailedNotificationData extends baseNotificationData {
  invoiceHash: string;
  invoiceRequest: string;
  invoiceAmountSat: number;
  failedReason: string;
}

export interface ReceiveFromYupaSuccessNotificationData
  extends baseNotificationData {
  invoiceHash: string;
  invoiceRequest: string;
  invoiceAmountSat: number;
}

export interface ReceiveFromYupaFailedNotificationData
  extends baseNotificationData {
  invoiceHash: string;
  invoiceRequest: string;
  invoiceAmountSat: number;
  failedReason: string;
}

export type notification_status_enum = {
  NEW: "NEW";
  DELIVERED: "DELIVERED";
  SEEN: "SEEN";
  OPENED: "OPENED";
  ARCHIVED: "ARCHIVED";
};

export type JsonValue =
  | string
  | number
  | boolean
  | JsonObject
  | JsonArray
  | null;
export type JsonObject = { [Key in string]?: JsonValue };
export interface JsonArray extends Array<JsonValue> {}

export type notification = {
  id: number;
  title: string | null;
  info: string | null;
  action_data: Record<string, any> | JsonValue;
  account_id: string;
  created_at: Date | null;
  seen_at: Date | null;
  opened_at: Date | null;
  status: notification_status_enum | null;
  type: string | null;
};

export type getAllNotificationResponseType = {
  notifications: notification[];
};

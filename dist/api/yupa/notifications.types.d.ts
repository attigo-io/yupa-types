export type notification_status_enum = {
    NEW: "NEW";
    DELIVERED: "DELIVERED";
    SEEN: "SEEN";
    OPENED: "OPENED";
    ARCHIVED: "ARCHIVED";
};
export type notification = {
    id: number;
    title: string | null;
    info: string | null;
    action_data: Record<string, any>;
    account_id: string;
    created_at: Date | null;
    seen_at: Date | null;
    opened_at: Date | null;
    status: notification_status_enum | null;
    type: string | null;
};
//# sourceMappingURL=notifications.types.d.ts.map
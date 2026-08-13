CONTEXT: Weagle Admin Console (super-app ops dashboard), existing repo from
Phase 0-3. Same stack/design; RBAC roles super_admin/ops_manager/finance/
cs_agent; audit stub logAudit() exists.

PHASE 4 — FULL MANAGEMENT FLOWS (ORDERS, PARTNERS, CUSTOMERS, EXCEPTIONS)

1. ORDERS drawer upgrade: customer block, partner block, merchant block,
   payment method, amount breakdown (subtotal, fee, discount), status
   timeline. Action (ops_manager+): "Update status" select + confirm modal ->
   PATCH /orders/{id}/status, optimistic update, toast, logAudit.
2. PARTNERS /partners: table ID, name, kind (driver/courier/merchant), zone,
   rating, status + filters. Drawer: profile, rating, active orders count,
   earnings summary. Actions (ops_manager+): Suspend / Reactivate with modal
   + audit.
3. CUSTOMERS /customers: table name, phone, joined, orders count, e-gold
   balance. Drawer: order history mini table + owned vouchers. Read-only.
4. EXCEPTIONS /exceptions: queue table: id, kind, severity chip, ref order
   link, SLA countdown (red when <1h to breach), assignee, status. Filters
   severity/status/kind. Actions: "Assign to me" -> POST /exceptions/{id}/
   assign; "Resolve" modal with resolution note -> POST /exceptions/{id}/
   resolve. cs_agent may assign/resolve; finance has no route access.
5. ALL MUTATIONS: optimistic UI with rollback on error, success/error toasts,
   audit entry, TanStack Query invalidation.
6. Replace Phase 1 dead links: Recent Orders "View full" -> /orders; exception
   "View all" -> /exceptions with filters.

ACCEPTANCE CRITERIA
- End-to-end flows work: resolve an exception, update an order status,
  suspend a partner; changes reflect in tables, drawers, dashboard counts and
  /audit.
- RBAC: cs_agent sees no suspend button; finance blocked from /exceptions.
- SLA countdown ticks and changes color live.
- TS strict + lint pass. End with a self-check.

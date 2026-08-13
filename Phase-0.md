CONTEXT: You are building "Weagle Admin Console", an internal ops dashboard for
the Weagle super-app (consumer services: rides, food, shipping, mart, health,
bills, pay). Stack: Next.js App Router + TypeScript strict + Tailwind +
shadcn/ui + Recharts + TanStack Query + zod + date-fns; maps later via
react-leaflet. Design: light theme, primary #E8663C, bg #F7F5F2, cards
rounded-2xl, sentence case labels. Status colors: green=completed/available,
orange=active/on_trip, gray=pending/idle, red=cancelled/issue, purple=refunded.
RBAC roles: super_admin, ops_manager, finance, cs_agent. All data from a mock
service layer (no real backend).

PHASE 0 — SCAFFOLD & APP SHELL

SETUP
1. Scaffold the project with the stack above.
2. Design tokens as CSS vars + Tailwind theme: primary #E8663C (hover #D55A2E),
   success #22C55E, warning #F59E0B, danger #EF4444, info #3B82F6,
   refund #8B5CF6, text #1F1B16.
3. Folder structure: src/app/(admin)/<route>, src/components/{layout,dashboard,
   orders,partners,customers,exceptions,finance,ui}, src/lib/{api,format,
   permissions,audit}, src/mocks/{data,handlers}, src/hooks.

SHELL
4. Sidebar with this IA (section > items, icon + optional live count badge):
   Operations: Dashboard, Live Ops Map, Orders, Partners
   Finances: Transactions, Payouts & Invoices, Protection & Claims
   Growth: Promos & Vouchers, Campaigns
   Administration: Customers, Analytics & Reports, Audit Log
   System: Settings, Help
5. Topbar: global search input ("Search order, customer, partner…"), current
   date, notification bell, profile menu with admin name + role.
6. One route per nav item; all except Dashboard may render
   <PlaceholderPage name="..."> for now.

RBAC STUB
7. Permission map: route access per role + action permissions:
   order.update_status, partner.suspend, exception.assign, exception.resolve,
   payout.mark_paid, voucher.create, audit.view.
8. RoleProvider + useRole() + dev-only <RoleSwitcher> in profile menu.
   Hide nav items without access; direct URL without access renders
   <PermissionDenied>.

FOUNDATION
9. Mock layer with SEEDED generators (stable across reloads) for Order,
   Partner, Customer, Transaction, ExceptionCase. Async api functions matching:
   GET /dashboard/summary, /dashboard/revenue-by-service, /dashboard/heatmap,
   /orders, /partners, /exceptions, /transactions, /audit.
   zod schemas for every response; TanStack Query wired.
10. Utils: formatMoney (default "$", locale-aware), formatRelativeTime,
    STATUS_META maps (order & driver status -> label + color classes).
11. Audit stub: logAudit(action, actor, payload) into in-memory list.

DO NOT build dashboard widgets yet (Phase 1).

ACCEPTANCE CRITERIA
- pnpm dev runs; TS strict + lint zero errors.
- All 15 routes render.
- Role switching changes sidebar; forbidden URL shows PermissionDenied.
- Mock API returns typed seeded data.
- End with a self-check against these criteria.

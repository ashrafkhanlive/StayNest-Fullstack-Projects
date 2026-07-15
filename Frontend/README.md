# StayNest Frontend

Modern booking frontend built with Next.js 15, React 19, TypeScript, Tailwind CSS, ShadCN-style UI primitives, Framer Motion, React Hook Form, Zod, Axios, TanStack Query, Zustand, Lucide Icons, demo payment checkout, Google Maps, and React Hot Toast.

## Getting Started

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example`:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_replace_me
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=replace_me
```

## Backend Integration

All REST access goes through `src/services`.

- `api-client.ts` configures Axios, base URL, and JWT bearer injection.
- `auth-service.ts` maps `/auth/login`, `/auth/signup`, `/auth/forgot-password`, and `/auth/me`.
- `hotel-service.ts` maps hotel search/detail plus host hotel CRUD.
- `booking-service.ts` maps guest and host booking workflows.
- `payment-service.ts` is ready for a real backend checkout URL, while the UI currently uses local demo payment approval.
- `dashboard-service.ts` maps host/admin dashboard analytics.

Mock data in `src/constants/hotels.ts` is used as a graceful local fallback while the backend is offline.

## Routes

- `/` home
- `/search` hotel search with filters and sorting
- `/hotels/[id]` hotel details, gallery, map, reserve card
- `/booking/[hotelId]` booking confirmation
- `/checkout` demo payment checkout
- `/payment/success` and `/payment/failed`
- `/login`, `/signup`, `/forgot-password`
- `/my-trips`, `/wishlist`, `/profile`
- `/host/dashboard`, `/host/hotels`, `/host/rooms`, `/host/bookings`
- `/admin/dashboard`

## Architecture

```text
src/
  app/          App Router pages
  components/   shared layout, UI, hotel, booking, dashboard components
  constants/    seed data and catalog constants
  features/     feature-specific UI blocks
  hooks/        React Query and mutation hooks
  lib/          shared utilities
  services/     API clients and REST services
  store/        Zustand auth, booking, wishlist state
  styles/       reserved for extracted style modules
  types/        domain models
  utils/        reserved for app-specific helpers
```

## Verification

```bash
npm run lint
npm run build
```

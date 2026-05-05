# Loan Eligibility Predictor — Client Website

A Next.js + TypeScript client for the loan eligibility prediction API.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| UI Components | Radix UI primitives (custom-built) |
| Notifications | Sonner |
| Icons | Lucide React |
| API | Flask/Random Forest on Vercel |

---

## Quick Start

### 1. Prerequisites

- Node.js **≥ 18.18.0**
- npm, yarn, or pnpm

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment

Copy the example env file and set the API URL:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://backend-theta-dusky.vercel.app
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable on Vercel dashboard or via CLI:
vercel env add NEXT_PUBLIC_API_URL
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Design tokens (CSS variables), Tailwind base
│   ├── layout.tsx        # Root layout, TooltipProvider, Sonner Toaster
│   └── page.tsx          # Homepage
├── components/
│   ├── ui/               # Primitive components (Button, Input, Select, etc.)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── tooltip.tsx
│   │   └── badge.tsx
│   ├── FormField.tsx     # Reusable field with label, input/select, tooltip, error
│   ├── HealthIndicator.tsx  # API health check widget
│   ├── LoanForm.tsx      # Main form logic and state
│   └── PredictionResult.tsx # Result display with probability bars
├── lib/
│   ├── api.ts            # API client, field definitions, payload mapper
│   ├── validation.ts     # Client-side form validation
│   └── utils.ts          # cn() utility
└── types/
    └── index.ts          # TypeScript types for API, form, and fields
```

---

## API Reference

### POST `/predict`

**URL:** `https://backend-theta-dusky.vercel.app/predict`

**Request:**
```json
{
  "Account Balance": 1,
  "Duration of Credit (month)": 18,
  "Value Savings/Stocks": 1,
  "Credit Amount": 1049
}
```

**Response:**
```json
{
  "prediction": 1,
  "prediction_label": "Good",
  "probability_good": 0.85,
  "probability_bad": 0.15,
  "features_received": 4
}
```

### GET `/health`

Returns API and model status.

---

## Field Reference (from `purpose.md`)

| Field | Type | Range/Options | Default |
|-------|------|--------------|---------|
| Account Balance | Categorical (1–4) | 1=<0 DM, 2=0–200 DM, 3=≥200 DM/salary, 4=no account | 1 |
| Duration of Credit | Number (months) | 6–48 | 18 |
| Value Savings/Stocks | Categorical (1–5) | 1=<100 DM … 5=unknown | 1 |
| Credit Amount | Number (DM) | 651–18,424 | 2,000 |

---

## Model Info

| Metric | Value |
|--------|-------|
| Algorithm | Random Forest Classifier |
| Accuracy | 79.00% |
| ROC-AUC | 0.8346 |
| CV (5-fold) | 72.90% ± 8.94% |
| n_estimators | 200 |
| max_depth | 10 |

"use client";

import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useBookingStore } from "@/store/booking-store";
import { formatCurrency } from "@/lib/utils";

export function CheckoutPanel() {
  const router = useRouter();
  const draft = useBookingStore((state) => state.draft);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStep, setProcessStep] = useState(0);

  function checkout() {
    if (!draft) {
      router.push("/search");
      return;
    }

    setIsProcessing(true);
    setProcessStep(1);
    toast.loading("Processing demo payment", { id: "demo-payment" });

    window.setTimeout(() => {
      setProcessStep(2);
    }, 650);

    window.setTimeout(() => {
      setProcessStep(3);
    }, 1300);

    window.setTimeout(() => {
      setProcessStep(4);
      toast.success("Demo payment approved", { id: "demo-payment" });
      router.push("/payment/success");
    }, 2100);
  }

  if (!draft) {
    return (
      <Card className="container-page max-w-xl">
        <CardContent className="p-6 text-center">
          <h1 className="text-2xl font-black">No booking selected</h1>
          <Button className="mt-4" onClick={() => router.push("/search")}>
            Find a stay
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="container-page max-w-xl">
      <CardHeader>
        <h1 className="text-3xl font-black">Checkout</h1>
        <p className="text-sm text-muted-foreground">
          Review your price breakdown and complete a demo payment.
        </p>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="rounded-[20px] border border-border bg-muted p-4 text-sm">
          <div className="flex items-center justify-between gap-4">
            <span className="font-semibold">Demo payment method</span>
            <span className="rounded-full bg-card px-3 py-1 text-xs font-bold">
              No real charge
            </span>
          </div>
          <p className="mt-2 text-muted-foreground">
            Test card ending in 4242 - instant approval
          </p>
        </div>
        {[
          ["Subtotal", draft.subtotal],
          ["Discount", -draft.discount],
          ["Taxes", draft.taxes],
          ["Total", draft.total],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between text-sm">
            <span>{label}</span>
            <span className={label === "Total" ? "font-black" : ""}>
              {formatCurrency(Number(value))}
            </span>
          </div>
        ))}
        <Button className="mt-4" disabled={isProcessing} onClick={checkout}>
          {isProcessing ? "Processing demo payment..." : "Pay with demo payment"}
        </Button>
        {isProcessing ? <PaymentProcess currentStep={processStep} /> : null}
      </CardContent>
    </Card>
  );
}

function PaymentProcess({ currentStep }: { currentStep: number }) {
  const steps = [
    "Checking booking details",
    "Authorizing demo card",
    "Confirming reservation",
    "Preparing success page",
  ];

  return (
    <div className="mt-2 rounded-[20px] border border-border bg-card p-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-bold">Payment process</h2>
        <span className="text-xs font-semibold text-primary">Demo mode</span>
      </div>
      <div className="mt-4 grid gap-3">
        {steps.map((step, index) => {
          const number = index + 1;
          const isDone = currentStep > number;
          const isActive = currentStep === number;

          return (
            <div key={step} className="flex items-center gap-3 text-sm">
              {isDone ? (
                <CheckCircle2 className="h-5 w-5 text-primary" />
              ) : isActive ? (
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground" />
              )}
              <span
                className={
                  isDone || isActive
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground"
                }
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${Math.min(100, currentStep * 25)}%` }}
        />
      </div>
    </div>
  );
}

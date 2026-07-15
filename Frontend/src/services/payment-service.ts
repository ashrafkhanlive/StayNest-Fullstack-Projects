import { apiClient } from "@/services/api-client";
import type { BookingDraft } from "@/types";

export const paymentService = {
  async createCheckoutSession(payload: BookingDraft) {
    const { data } = await apiClient.post<{ sessionId?: string; url?: string }>(
      "/payments/checkout-session",
      payload,
    );
    return data;
  },

  redirectToCheckoutUrl(url: string) {
    window.location.href = url;
  },
};

package com.coderberojgar.projects.airBnbApp.Service.Interfaces;

import com.coderberojgar.projects.airBnbApp.Entities.BookingEntity;

public interface CheckoutService {

    String getCheckoutSession(BookingEntity booking, String successUrl, String failureUrl);

}
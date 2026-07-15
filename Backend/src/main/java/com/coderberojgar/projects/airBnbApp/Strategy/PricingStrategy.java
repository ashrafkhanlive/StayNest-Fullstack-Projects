package com.coderberojgar.projects.airBnbApp.Strategy;

import com.coderberojgar.projects.airBnbApp.Entities.InventoryEntity;

import java.math.BigDecimal;
public interface PricingStrategy {

    BigDecimal calculatePrice(InventoryEntity inventory);
}
package com.coderberojgar.projects.airBnbApp.Strategy;

import com.coderberojgar.projects.airBnbApp.Entities.InventoryEntity;

import java.math.BigDecimal;

public class BasePricingStrategy implements PricingStrategy{
    @Override
    public BigDecimal calculatePrice(InventoryEntity inventory) {
        return inventory.getRoom().getBasePrice();
    }
}
package com.coderberojgar.projects.airBnbApp.Dto;

import com.coderberojgar.projects.airBnbApp.Enums.BookingStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingStatusResponseDTO {
    private BookingStatus bookingStatus;
}
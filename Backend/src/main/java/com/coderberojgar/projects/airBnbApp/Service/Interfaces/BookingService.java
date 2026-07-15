package com.coderberojgar.projects.airBnbApp.Service.Interfaces;

import com.coderberojgar.projects.airBnbApp.Dto.BookingDTO;
import com.coderberojgar.projects.airBnbApp.Dto.BookingRequest;
import com.coderberojgar.projects.airBnbApp.Dto.GuestDTO;
import com.coderberojgar.projects.airBnbApp.Dto.HotelReportDTO;
import com.coderberojgar.projects.airBnbApp.Enums.BookingStatus;
import com.stripe.model.Event;

import java.time.LocalDate;
import java.util.List;

public interface BookingService {
    BookingDTO initialiseBooking(BookingRequest bookingRequest);

    BookingDTO addGuests(Long bookingId, List<GuestDTO> guestDtoList);

    String initiatePayments(Long bookingId);

    void capturePayment(Event event);

    void cancelBooking(Long bookingId);

    BookingStatus getBookingStatus(Long bookingId);

    List<BookingDTO> getAllBookingsByHotelId(Long hotelId);

    HotelReportDTO getHotelReport(Long hotelId, LocalDate startDate, LocalDate endDate);

    List<BookingDTO> getMyBookings();
}
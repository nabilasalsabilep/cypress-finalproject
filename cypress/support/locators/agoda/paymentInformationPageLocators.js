import 'cypress-xpath';

export const paymentInformationPageLocators = {
    secondStepperName: `//span[@data-element-name="booking-page-stepper-2"]`,
    summaryDepartureDate: `(//div[@data-component="packageDetail"]/descendant::span)[2]`,
    summaryDepartureTime: `(//div[@data-component="pacFlightDetail"]/descendant::span)[3]`,
    summaryArrivalTime: `(//div[@data-component="pacFlightDetail"]/descendant::span)[4]`,
    summaryFlightName: `(//div[@data-component="pacFlightDetail"]/descendant::span)[5]`,
    summaryInitialPrice: `//dd[@data-component="mob-flight-price-adult-desc"]/span`,
    summaryBaseFarePrice: `//dd[@data-component="mob-flight-price-baseFare-adult-desc"]/span`,
    summaryTaxesAndFeesPrice: `//dd[@data-component="mob-flight-price-taxAndFees-adult-desc"]/span`,
    summaryDiscount: `//dd[@data-component="mob-flight-pbd-discount-desc"]/span`,
    summaryTotalPrice: `//dd[@data-component="mob-flight-price-total-desc"]/span`,
    contactDetailsSection: `//strong[text()='Contact details']`,
    contactNamePreview: `(//span[@data-component="name-container-name"])[1]`,
    contactEmailPreview: `(//div[@data-component="name-container-detail"])[1]`,
    contactPhonePreview: `(//div[@data-component="name-container-detail"])[2]`,
    passengerDetailsSection: `//strong[text()='Passenger details']`,
    passengerNamePreview: `(//span[@data-component="name-container-name"])[2]`,
    creditOrDebitCardOption: `//div[@data-element="accordion-radio-container"]/descendant::p[text()='CREDIT/DEBIT CARD']`,
    digitalPaymentOption: `//div[@data-element="accordion-radio-container"]/descendant::p[text()='DIGITAL PAYMENT']`,
    bankTransferOption: `//div[@data-element="accordion-radio-container"]/descendant::p[text()='BANK TRANSFER']`,
    payNowButton: `//button[@data-component='payment-PayNow' and div/div[text()='PAY NOW']]`
};
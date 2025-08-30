window.initDatePickers = () => {
    $("#my_date_picker1").datepicker({});
    $("#my_date_picker2").datepicker({});

    $('#my_date_picker1').change(function () {
        let startDate = $(this).datepicker('getDate');
        $("#my_date_picker2").datepicker("option", "minDate", startDate);
    });

    $('#my_date_picker2').change(function () {
        let endDate = $(this).datepicker('getDate');
        $("#my_date_picker1").datepicker("option", "maxDate", endDate);
    });
};

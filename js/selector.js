(function ($) {
    'use strict';
    
    try {
        let selectSimple = $('.js-select-simple');

        selectSimple.each(function () {
            let that = $(this);
            let selectBox = that.find('select');
            let selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });
    
    } catch (err) {
        console.log(err);
    }
    

})(jQuery);
export default function Select2Module() {
    $(document).ready(function () {
        $('.re-select-main').select2();


        $(".selectBrand").select2({
            templateResult: addUserPic,
            templateSelection: addUserPic
        });

        function addUserPic(opt) {
            if (!opt.id) {
                return opt.text;
            }
            var optimage = $(opt.element).data('image');
            if (!optimage) {
                return opt.text;
            } else {
                var $opt = $(
                    `<span class="select-brand-option"><img src='${optimage}'/></span>`
                );
                return $opt;
            }
        };
    });
}
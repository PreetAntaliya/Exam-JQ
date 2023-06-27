 $(".aside").on("scroll", function () {
            if ($(".aside").scrollTop() > 50) {
                $("header").css();
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $("header").removeClass("active2");
            }
        });

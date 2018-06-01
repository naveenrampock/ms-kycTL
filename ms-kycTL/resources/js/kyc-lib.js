



if ('serviceWorker' in navigator) {
                window.addEventListener("load", function () {
                                navigator.serviceWorker.register("/pk/sw.js", {
                                                "scope": "/pk/"
                                }).then(function (registration) {
                                                console.log("registration successfull with scope : ", registration.scope)
                                })
                })
}
/*
$(window).on("scroll", function () {
                if ($(document).scrollTop() >= 10) {
                                $("body").removeClass("bigHeader")
                } else {
                                $("body").addClass("bigHeader")
                }
}).on("load", function () {
                if ($(document).scrollTop() <= 10) {
                                $("body").addClass("bigHeader")
                }
});
*/
$("#PolExName").fadeOut();
$("#amndMoa").hide();
$("[name='PolEx']").on("change", function (e) {
                console.log(this);
                if (this.value == "Y") {
                                $("#PolExName").fadeIn();
                } else {
                                $("#PolExName").fadeOut();
                }
});
$("#shrTbl input, #shrTbl textarea, #shrTbl .btn-group select").addClass("disabled").attr("disabled", true)
$("[name='shrPatt']").on("change", function (e) {
                if (this.value == "Y") {
                                $("#shrTbl").addClass("disabled");
                                $("#shrTbl input, #shrTbl textarea, #shrTbl .btn-group").addClass("disabled").attr("disabled", true)
                } else {
                                $("#shrTbl").removeClass("disabled");
                                $("#shrTbl input, #shrTbl textarea, #shrTbl .btn-group").removeClass("disabled").attr("disabled", false)
                }
});

$("#shrTbl").on("click", ".new .glyphicon-plus", function () {
                var $new = $(this).closest(".new");
                $new.clone(true).removeClass("new").insertBefore($new).find(".glyphicon-plus").removeClass("glyphicon-plus text-success").addClass("glyphicon-minus text-danger");
                //$new.clone(true).removeClass("new").insertBefore($new).find(".glyphicon-plus").removeClass("glyphicon-plus text-success").addClass("glyphicon glyphicon-edit");
                
                
                
                })
.on("click", ".glyphicon-minus", function () {
                var $row = $(this).closest("tr");
                if (confirm("WARNING\nDo you really want to delete the row?\nThis cant be undone")) {
                                $row.remove();
                }
});

$("[name='shrComp']").on("change", function (e) {
                if (this.value == "N") {
                                $("#compTbl").addClass("disabled");
                                $("#compTbl input, #compTbl textarea, #compTbl .btn-group").addClass("disabled").attr("disabled", true);
                                $("#amndMoa").hide();
                } else {
                                $("#compTbl").removeClass("disabled");
                                $("#compTbl input, #compTbl textarea, #compTbl .btn-group").removeClass("disabled").attr("disabled", false);
                                $("#amndMoa").show();
                }
});
$("#compTbl").on("click", ".new .glyphicon-plus", function () {
                var $new = $(this).closest(".new");
                $new.clone(true).removeClass("new").insertBefore($new).find(".glyphicon-plus").removeClass("glyphicon-plus text-success").addClass("glyphicon-minus text-danger glyphicon-plus text-success" );
})
.on("click", ".glyphicon-minus", function () {
                var $row = $(this).closest("tr");
                if (confirm("WARNING\nDo you really want to delete the row?\nThis cant be undone")) {
                                $row.remove();
                }
})
.on("click", ".glyphicon-edit", function () {
                $("#compEdit").modal("show");
});

$("textarea")
.off()
.on("blur", function (e) {
                $(this).css("height", 1).trigger($.Event("keyup"));
})
.on("keyup", function (e) {
                var a = $(this);
                console.log("keyUp", this.scrollHeight)
                a.height(function (i, h) {
                                var h = this.scrollHeight - 2;
                                return (h > 200) ? 200 : h;
                                //return h > 180 ? 200 : h + 20;
                })

})
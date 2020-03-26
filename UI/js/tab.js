$(document).ready(function () {
    $("#performance-tabs li").click(function (e) {
        e.preventDefault();
        $('#performance-tabs').find('li').removeClass('active')
        $(this).addClass('active')
        $(".tabCont").removeClass('show')
        let currentTab = $(this).find('a').attr('href')
        $(currentTab).addClass('show')

    });
   
    $('.tab-acrdion-hdng').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('collapsed');
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);


    });
 

});

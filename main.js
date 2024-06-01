$(document).ready(function ($) {
    "use strict";


    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    jQuery(".filters").on("click", function () {
        jQuery("#menu-dish").removeClass("bydefault_show");
    });
    $(function () {
        var filterList = {
            init: function () {
                $("#menu-dish").mixItUp({
                    selectors: {
                        target: ".dish-box-wp",
                        filter: ".filter",
                    },
                    animation: {
                        effects: "fade",
                        easing: "ease-in-out",
                    },
                    load: {
                        filter: ".all, .breakfast, .lunch, .dinner",
                    },
                });
            },
        };
        filterList.init();
    });

    jQuery(".menu-toggle").click(function () {
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-navigation").removeClass("toggled");
    });

    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger: "body",
        start: "30px top",
        end: "bottom bottom",

        onEnter: () => myFunction(),
        onLeaveBack: () => myFunction(),
    });

    function myFunction() {
        elementFirst.classList.toggle('sticky_head');
    }

    var scene = $(".js-parallax-scene").get(0);
    var parallaxInstance = new Parallax(scene);


});


jQuery(window).on('load', function () {
    $('body').removeClass('body-fixed');

    //activating tab of filter
    let targets = document.querySelectorAll(".filter");
    let activeTab = 0;
    let old = 0;
    let dur = 0.4;
    let animation;

    for (let i = 0; i < targets.length; i++) {
        targets[i].index = i;
        targets[i].addEventListener("click", moveBar);
    }

    // initial position on first === All 
    gsap.set(".filter-active", {
        x: targets[0].offsetLeft,
        width: targets[0].offsetWidth
    });

    function moveBar() {
        if (this.index != activeTab) {
            if (animation && animation.isActive()) {
                animation.progress(1);
            }
            animation = gsap.timeline({
                defaults: {
                    duration: 0.4
                }
            });
            old = activeTab;
            activeTab = this.index;
            animation.to(".filter-active", {
                x: targets[activeTab].offsetLeft,
                width: targets[activeTab].offsetWidth
            });

            animation.to(targets[old], {
                color: "#0d0d25",
                ease: "none"
            }, 0);
            animation.to(targets[activeTab], {
                color: "#fff",
                ease: "none"
            }, 0);

        }

    }
});


        function move_login() {
            document.getElementById("login_box").style.display = 'block';
            document.getElementById("signup_box").style.display = 'none';
        }
        function move_signup() {
            document.getElementById("login_box").style.display = 'none';
            document.getElementById("signup_box").style.display = 'block';
        }


        $(document).ready(function () {

            $('#menu_account_login').on('click', function () {
                $('.khung').toggleClass('menu_account_show');
            });


        });



        var idup = JSON.parse(localStorage.getItem('idup'));
        if (idup === null) {
            idup = [];
            var idup = 3;
            localStorage.setItem("idup", JSON.stringify(idup));
        }


        // 
        var CheckInfo = JSON.parse(localStorage.getItem('CheckInfo'));
        if (CheckInfo === null) {
            CheckInfo = [];
            var CheckInfo = 0;
            localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
        }

        var food = JSON.parse(localStorage.getItem('food'));
        if (food === null) {
            food = [];
        }




        // 




        // 
        var account_info = JSON.parse(localStorage.getItem('account_info'));
        if (account_info === null) {
            account_info = [];
            var account_info = [{}];
            localStorage.setItem("account_info", JSON.stringify(account_info));
        }





        //  -->
        var checkLogin = JSON.parse(localStorage.getItem('checkLogin'));
        if (checkLogin === null) {
            checkLogin = [];
            var checkLogin = -1;
            localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
        }
        if (checkLogin == -1) {

        } else if (account[checkLogin].level == 0) {

            document.getElementById("statusLogin").innerHTML = "Đăng nhập thành công";
            document.getElementById("menu_account_login").innerHTML = account[checkLogin].username;
            document.getElementById("menu_account_login").style.display = 'block';
            document.getElementById("menu_login_button").style.display = 'none';
            document.getElementById("hello_user").innerHTML = "Xin chào " + account[checkLogin].username + " !";
            document.getElementById("menu_logout").style.display = 'block';
            document.getElementById("quanlydon").style.display = 'none';
            orderprinf();
            demOrder();
        } else if (account[checkLogin].level == 1) {
            document.getElementById("statusLogin").innerHTML = "Đăng nhập thành công";
            document.getElementById("menu_account_login").innerHTML = account[checkLogin].username;
            document.getElementById("menu_account_login").style.display = 'block';
            document.getElementById("menu_login_button").style.display = 'none';
            document.getElementById("hello_user").innerHTML = "Xin chào " + account[checkLogin].username + " !";
            document.getElementById("menu_logout").style.display = 'block';
            document.getElementById("quanlydon").style.display = 'block';
            orderprinf();
            demOrder();

        }



        var paymentFood = JSON.parse(localStorage.getItem('paymentFood'));
        if (paymentFood === null) {
            paymentFood = [];
            var paymentFood = [{}];
            localStorage.setItem("paymentFood", JSON.stringify(paymentFood));
        }
        console.log(account);
        function Signup() {
            var checkUsername = 0;
            var id = idup;
            var level = 0;
            var username = document.getElementById('usernameSignup').value;
            var password = document.getElementById('passwordSignup').value;
            var Repassword = document.getElementById('RepasswordSignup').value;
            if (username != '' && password != '' && Repassword != '' && password == Repassword) {
                for (let i = 0; i < account.length; i++) {
                    if (account[i].username == username) {


                        checkUsername = 1;
                        break;
                    }
                }
                if (checkUsername == 0) {
                    accountSignup = { id, username, password, level };
                    account.push(accountSignup);

                    localStorage.setItem("account", JSON.stringify(account));

                    checkLogin = id;
                    localStorage.setItem("checkLogin", JSON.stringify(checkLogin));

                    var id = idup++;
                    localStorage.setItem("idup", JSON.stringify(idup));
                    console.log(account);
                    document.getElementById("statusSignup").innerHTML = "Đăng ký thành công";
                    document.getElementById("menu_account_login").innerHTML = username;
                    document.getElementById("menu_account_login").style.display = 'block';
                    document.getElementById("menu_login_button").style.display = 'none';
                    document.getElementById("hello_user").innerHTML = "Xin chào " + username + " !";
                    document.getElementById("menu_logout").style.display = 'block';
                    location.reload();
                } else {
                    document.getElementById("statusSignup").innerHTML = "Tên tài khoản đã tồn tại";
                }
            } else {
                document.getElementById("statusSignup").innerHTML = "Vui lòng nhập đầy đủ thông tin";
            }
        }

        function Login() {
            for (i = 0; i < account.length; i++) {
                if ((document.getElementById("usernameLogin").value == account[i].username) && (document.getElementById("passwordLogin").value == account[i].password)) {
                    checkLogin = account[i].id;
                    localStorage.setItem("checkLogin", JSON.stringify(checkLogin));

                    if (account[i].level == 0) {
                        document.getElementById("statusLogin").innerHTML = "Đăng nhập thành công";
                        document.getElementById("menu_account_login").innerHTML = account[i].username;
                        document.getElementById("menu_account_login").style.display = 'block';
                        document.getElementById("menu_login_button").style.display = 'none';
                        document.getElementById("hello_user").innerHTML = "Xin chào " + account[i].username + " !";
                        document.getElementById("menu_logout").style.display = 'block';
                        document.getElementById("quanlydon").style.display = 'none';
                        orderprinf();
                        demOrder();

                        location.reload();

                    } else if (account[i].level == 1) {
                        document.getElementById("statusLogin").innerHTML = "Đăng nhập thành công";
                        document.getElementById("menu_account_login").innerHTML = account[i].username;
                        document.getElementById("menu_account_login").style.display = 'block';
                        document.getElementById("menu_login_button").style.display = 'none';
                        document.getElementById("hello_user").innerHTML = "Xin chào " + account[i].username + " !";
                        document.getElementById("menu_logout").style.display = 'block';
                        document.getElementById("quanlydon").style.display = 'block';
                        orderprinf();
                        demOrder();
                        location.reload();
                    }
                }
            }
            if (checkLogin == -1) {
                document.getElementById("statusLogin").innerHTML = "sai mật khẩu hoặc tài khoản";

            }
        }

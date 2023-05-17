$(function () {


    // funcObj[f_0]//첫번째 함수 실행

    // 여러분이 채울 곳은 여기만 채우면 됩니다
    let funcObj = {
        f_0:function(){
            gsap.to('#section0  .tit_wrap > * ', {
                opacity: 1,
                y: -30,
                stagger: .3
            })
        },
        f_1: function () {
            const tl = gsap.timeline()

            tl.to('#section1 .tit_main', {
                opacity: 1,
                y: -30
            })
            tl.to('.s_1_list li', {
                opacity: 1,
                y: -30,
                stagger: .3
            })
            tl.to('#section1 .sub_txt_wrap', {
                opacity: 1,
                y: -30
            })

            $('.count').each(function(){
                let crt = $(this)
                let countTo = crt.attr('data-count')

                $({countNum:crt.text()}).animate({
                    countNum:countTo
                },{
                    duration:3000,
                    easing:'linear',
                    step:function(){
                         // Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
                        crt.text(Math.floor(this.countNum))
                    },
                    complete:function(){
                        crt.text(this.countNum)
                    }
                })
            })

        },            
        f_2: function () {
            const tl = gsap.timeline()
            tl.to('#section2 .tit_wrap > *', {
                delay:3,
                opacity: 1,
                y: -30
            })
            tl.to('.l_card_wrap', {
                opacity: 1,
                y: -30,
                scale: 1,
                stagger: .3,
                ease: Elastic.easeOut, //가속도함수
                duration: 1
            })
        },
        f_3: function () {
                gsap.to('#section3 .rel_wrap > * ', {
                opacity: 1,
                stagger: 0.3,
                y: -30
            })
        },
        f_4: function () {
            const tl = gsap.timeline()

            tl.to('#section4 .tit_wrap>*', {
                opacity: 1,
                stagger: 0.3,
                y: -30
            })
            tl.to('.s_4_img_wrap > * ', {
                opacity: 1,
                stagger: 0.3,
                y: -30
            })
        },
        f_5: function () {
            const tl = gsap.timeline()

            tl.to('#section5 .tit_wrap>*', {
                opacity: 1,
                stagger: 0.3,
                y: -30
            })
            tl.to('.s_5_img_wrap > * ', {
                opacity: 1,
                stagger: 0.3,
                y: -30
            })
        },
        f_6: function () {
            //실행문 
        }

    }

    funcObj['f_0']()




// 0 키워드 등록
    // 0-1.모바일 키워드 등록
    const body = $('body')
    const mobNavBtn = $('.mob_btn')
    const mobNav_ListBtn = $('header .subNav_wrap .depth1 >li>span')



    const header = $('header')

    // 0-2 desktop 키워드
    const subList = $('header .subNav_wrap ')

    const deskTop_Nav = $('.h_nav>li')
    const deskTop_SchBtn = $('a.search_btn')
    const schWrap = $('.search_wrap')

    // 0-3 마우스 올렸음을 판단하는 boolean
    let is_deskTop_Nav = false
    let is_schNav = false


// 1 mobile menu 관련 내용

    //1-0 mobile 초기화 함수
    function mobNavReset() {


        mobNav_ListBtn.parent('li').removeClass('active')
        mobNav_ListBtn.siblings('ul.depth2').removeAttr('style');

        body.removeClass('mNav_active')
        subList.removeAttr('style')

    }
    //1-1 mobile 햄버거 클릭시 실행 함수
    function mobNav() {
        body.toggleClass('mNav_active')
    }
    //1-2 mobile 서브 메뉴 클릭시 실행 함수
    function mobNavList() {
        let crt = $(this)

        // 만약  

        if (crt.parent('li').hasClass('active')) {
            crt.parent('li').removeClass('active')
            crt.siblings('ul.depth2').slideUp(300)
        } else {
            crt.parent('li').addClass('active').siblings().removeClass('active').find('ul.depth2').slideUp(300);
            crt.siblings('ul.depth2').slideDown(300);
        }
    }

    // 1-3 햄버거 클릭 이벤트
    mobNavBtn.click(function (e) {
        e.preventDefault()
        mobNav()
    })

    //1-4 mobile 서브 메뉴 클릭 이벤트
    mobNav_ListBtn.click(mobNavList)


    



// 2. 간단한 스크롤 리사이즈
    // 2-1 헤더 스크롤 높이값에 따라 변화되는 내용
    $(window).scroll(function () {

        let scroll = $(this).scrollTop()


        if (scroll > 80) {
            header.addClass('scrolling')


        } else {

            header.removeClass('scrolling')
        }
    })


    //2-2. resize 관련 내용
    $(window).on('load resize', function () {
        if (window.innerWidth < 1240) {
            dt_NavReset()
            dt_SchReset()

        }
        if (window.innerWidth > 999) {

            mobNavReset()
        }
    });


// 3 DESKTOP 메뉴 관련
    //3-1 desktop function
    // desktop menu 함수
    function dt_Nav() {

        if (!is_schNav) {

            subList.slideDown(300)
            header.addClass('On')
            is_deskTop_Nav = true
        }
    }
    //3-0 desktop menu 초기화 함수
    function dt_NavReset() {

        if (is_deskTop_Nav) { //header가 On을 갖고 있다는 것은 desktop 메뉴 활성시

            subList.delay(500).slideUp(300)
            setTimeout(function () {

                header.removeClass('On')
            }, 1000)
            is_deskTop_Nav = false
        }





    }
    //3-2 deskTop 메뉴 마우스 올렸을때 이벤트 
    deskTop_Nav.hover(dt_Nav)
    subList.mouseleave(dt_NavReset)




// 4 desktop 검색창 관련
    // 4-1 desktop 검색창 함수
    function dt_Sch() {
        header.addClass('searchAct')
        schWrap.slideDown(300)
        is_schNav = true
        dt_NavReset()
    }

    // 4-2 desktop 검색창 초기화 함수
    function dt_SchReset() {
        if (is_schNav) {
            header.removeClass('searchAct')
            schWrap.slideUp(300)
            is_schNav = false

        }
    }


    // 4-3 desktop 검색창 클릭 이벤트
    deskTop_SchBtn.click(function (e) {
        e.preventDefault()

        if (!is_schNav) {
            dt_Sch()
            console.log('open');
        } else {
            console.log('close');
            dt_SchReset()
        }


    })



// 5.전체 스크롤 관련 내용

    // 5-1 키워드 등록
    let section = $('section');
    let pageNum = 0;




    // 5-2 scroll event

    $(window).scroll(function () {
        let scroll = $(this).scrollTop()

        let outHeight = window.outerHeight / 3;


        for (let i = 0; i < section.length; i++) {

            // 섹션의 첫 시작 스크롤 값에서  윈도우 viewport 높이의 3/1을 뺀값보다 크거나 
            // offsetTop 은 섹션의 시작 점 offsetHeight 섹션의 끝나는 높이값
            // scroll이 < 0 - window높이(1000) + 섹션의 높이값(700) 보다 작으면
            if (scroll > section[i].offsetTop - outHeight &&
                scroll < section[i].offsetTop - outHeight + section[i].offsetHeight
            ) {
                pageNum = i;

                console.log(i)

                // ()가로 붙이는거 잊지말기
                funcObj['f_' + i]()

            }
        }

        pageChangeFunc()

    })


    function pageChangeFunc() {


        section.removeClass('active');
        section.eq(pageNum).addClass('active');
    }






    // 배너 슬라이더
        //a. 3SECTION slider 


    // a-1 키워드 등록
    const s3_slider1 = $('.row1 .row_inner img')
    const s3_arrow1 = $('.row1 .arrow')

    // a-2 클릭 이벤트
    s3_arrow1.click(function (e) {
        // a-2-0 이벤트 막아주기
        e.preventDefault();

        //a-2-1 내가 누른 현재의 순서를 알아냄  0 번이면 빼기 1번이면 더해주기
        const i = $(this).index()

        console.log(i);

        //a-2-2 실제 active 클레스가 붙은 순서를 알아냄

        let idx = $('.row1 .row_inner>img.active').index()
        //a-2-3 기존에 붙었던 클레스 제거하기
        s3_slider1.removeClass('active')

        // a-3-1 만약 두번째 버튼이라면
        if (i == 1) {

            // a-3-2 하나 증가하기
            idx++

            // a-3-3 계속 증가 하다가 전체 슬라이드 개수와 같아지면

            if (idx == s3_slider1.length) {
                // a-3-4  변수값에 0 대입
                idx = 0
            }


        }
        // a-4-1 만약 첫번째 버튼이라면
        if (i == 0) {
            // a-4-2 하나 감소하기
            idx--;
            // a-4-3 0보다 idx가 작아지면
            if (idx < 0) {
                // a-4- 슬라이드 개수는 3 이므로 한개 뺀 값을 idx에 대입
                idx = s3_slider1.length - 1
            }
        }

        // a-5 현재 순서값 에 불 켜지게 하기
        s3_slider1.eq(idx).addClass('active')


    })

    //a. 3SECTION slider 


    // a-1 키워드 등록

    const s3_slider2 = $('.row2 .row_inner img')
    const s3_arrow2 = $('.row2 .arrow')

    s3_arrow2.click(function (e) {
        e.preventDefault();

        const i = $(this).index()
        console.log(i);
        let idx = $('.row2 .row_inner>img.active').index()
        s3_slider2.removeClass('active')

        if (i == 1) {

            idx++

            if (idx == s3_slider2.length) {
                idx = 0
            }


        }
        if (i == 0) {
            idx--;
            if (idx < 0) {
                idx = s3_slider2.length - 1
            }
        }

        s3_slider2.eq(idx).addClass('active')


    })



})
        var adultnum=Number($("#adult .now").html());
        var kidnum=Number($("#kid .now").html());
        var vipnum=Number($("#vip .now").html());
        var total=adultnum+kidnum+vipnum;
        var cho=0;
        function refresh(){
            adultnum=0;
            kidnum=0;
            vipnum=0;
            cho=0;
            total=0;
            $(".number .now").html("0");
            $(".my-seat .seat").attr("class","seat all");
            $(".my-seat .seat").html("-");
            $("button.seat-condition").removeClass('choice');
            $("#pageNext").attr("class","button disabled");
            $(".money em").html("0");
        }
        $(".seat-count").on('click','.up,.down',function(){
            if($(this).hasClass('down')&&$(".my-seat .seat").hasClass("choice")){
                if(confirm("선택하신 좌석을 모두 취소하고 다시 선택하시겠습니까?")){
                    refresh();
                    return;
                }else{
                    return;
                }
            }else if($(this).hasClass('down')&&$(this).hasClass('adult')&&adultnum<=0){
                return;
            }else if($(this).hasClass('down')&&$(this).hasClass('adult')&&adultnum>0){
                $("#adult .now").html(--adultnum);
            }else if($(this).hasClass('down')&&$(this).hasClass('kid')&&kidnum<=0){
                return;
            }else if($(this).hasClass('down')&&$(this).hasClass('kid')&&kidnum>0){
                $("#kid .now").html(--kidnum);
            }else if($(this).hasClass('down')&&$(this).hasClass('vip')&&vipnum<=0){
                return;
            }else if($(this).hasClass('down')&&$(this).hasClass('vip')&&vipnum>0){
                $("#vip .now").html(--vipnum);
            }else if($(this).hasClass('up')&&total>=8){
                alert("인원선택은 총 8명까지 가능합니다.");
                return;
            }else if($(this).hasClass('up')&&$(this).hasClass('adult')){
                $("#adult .now").html(++adultnum);
            }else if($(this).hasClass('up')&&$(this).hasClass('kid')){
                $("#kid .now").html(++kidnum);
            }else if($(this).hasClass('up')&&$(this).hasClass('vip')){
                $("#vip .now").html(++vipnum);
            }else{
                return;
            }
            total=adultnum+kidnum+vipnum;
            $(".money em").html((adultnum*11000)+(kidnum*9000)+(vipnum*5000));
            for(var i=0;i<total;i++){
                if(!$($(".my-seat .seat")[i]).hasClass("choice")){
                    $($(".my-seat .seat")[i]).attr("class","seat possible");
                }
            }
            for(var i=total;i<8;i++){
                $($(".my-seat .seat")[i]).attr("class","seat all");
            }
            if(cho==total&&cho!=0){
                $("#pageNext").attr("class","button active");
            }else{
                $("#pageNext").attr("class","button disabled");
            }
        });
        $(document).on('mouseenter focus','button.seat-condition',function(){
            if(!$(this).hasClass('finish')&&!$(this).hasClass('impossible')&&total>cho){
                $(this).addClass('on');
            }
        });
        $(document).on('mouseleave blur','button.seat-condition',function(){
            $(this).removeClass('on');
        });
        $(document).on('click','button.seat-condition',function(){
            if(!$(this).hasClass('finish')&&!$(this).hasClass('impossible')&&!$(this).hasClass('choice')&&total>cho){
                $(this).addClass('choice');
                cho++;
            }else if($(this).hasClass('choice')){
                $(this).removeClass('choice');
                cho--;
            }
            for(var i=0;i<cho;i++){
                var rownm=$($("button.seat-condition.choice")[i]).attr('rownm');
                var seatno=$($("button.seat-condition.choice")[i]).attr('seatno');
                $($(".my-seat .seat")[i]).attr("class","seat choice");
                $($(".my-seat .seat")[i]).html(rownm+seatno);
            }
            for(var i=cho;i<total;i++){
                $($(".my-seat .seat")[i]).attr("class","seat possible");
                $($(".my-seat .seat")[i]).html("-");
            }
            if(cho==total&&cho!=0){
                $("#pageNext").attr("class","button active");
            }else{
                $("#pageNext").attr("class","button disabled");
            }
        });
        $("#pagePrevious").click(function(){
            window.history.back();
        });
        $("#seatMemberCntInit").click(function(){
            refresh();
        });
        var IMP = window.IMP; // 생략가능
        IMP.init('iamport'); // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용
        var payBtn= document.getElementById("pageNext");
        payBtn.onclick =function(){
            IMP.request_pay({
                pg : 'inicis', // version 1.1.0부터 지원.
                pay_method : 'card',
                merchant_uid : 'merchant_' + new Date().getTime(),
                name : '주문명: Lcb 일반영화권(어른) ',
                amount : $(".money em").html(),
                buyer_email : 'magadan0617@naver.com',
                buyer_name : '한건희',
                buyer_tel : '010-2616-3248',
                buyer_addr : '서울특별시 강남구 역삼동 제이슨 타워',
                buyer_postcode : '123-456',
                m_redirect_url : 'https://www.yourdomain.com/payments/complete'
            }, function(rsp) {
                if ( rsp.success ) {
                    var msg = '결제가 완료되었습니다.';
                    msg += '고유ID : ' + rsp.imp_uid;
                    msg += '상점 거래ID : ' + rsp.merchant_uid;
                    msg += '결제 금액 : ' + rsp.paid_amount;
                    msg += '카드 승인번호 : ' + rsp.apply_num;
                } else {
                    var msg = '결제에 실패하였습니다.';
                    msg += '에러내용 : ' + rsp.error_msg;
                }
                alert(msg);
            });
        }
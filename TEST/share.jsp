<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%request.setCharacterEncoding("UTF-8"); %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>SHARE</title>
</head>
<body>
    <div style="text-align: center;">
        <strong>공유하기</strong><br>
        <a id="kakao-link-btn" href="javascript:kakaoLink()"><img src="images/kakao.png" alt="카카오톡 공유" width="30px" height="30px"></a>
        <a id="kakao-story-btn" href="javascript:kakaostoryLink()"><img src="images/kakaostory.png" alt="카카오스토리 공유" width="30px" height="30px"></a>
        <a id="facebook-btn" href="javascript:facebookLink()"><img src="images/facebook.jpg" alt="페이스북 공유" width="30px" height="30px"></a>
        <a id="twitter-btn" href="javascript:twitterLink()"><img src="images/twitter.jpg" alt="트위터 공유" width="30px" height="30px"></a>
        <a id="URL-btn" href="javascript:URLLink()"><img src="images/URL.png" alt="URL 공유" width="30px" height="30px"></a>
    </div>
    <script>
        Kakao.init('03e93abfc5eb0def6a90ac6ee266241a');
        function kakaoLink() {
            Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: "${vo.title}",
                    description: "${vo.content}",
                    imageUrl: document.images[0].src,
                    link: {
                        mobileWebUrl: document.location.href,
                        webUrl: document.location.href,
                    },
                },
                buttons: [{
                    title: '웹으로 보기',
                    link: {
                        mobileWebUrl: document.location.href,
                        webUrl: document.location.href,
                    }
                }]
            });
        }
        function kakaostoryLink(){
            Kakao.Story.share({
                url: document.location.href,
                text: "${vo.content}",
            });
        }
        function facebookLink(){
            var sharer = "https://www.facebook.com/sharer/sharer.php?u=";
			var content_url = encodeURIComponent(document.location.href);
            window.open(sharer + content_url, 'facebook_share_dialog', 'width=626,height=436');
        }
        function twitterLink(){
            window.open("https://twitter.com/intent/tweet?text="+"${vo.content}"+"&url="+document.location.href);
        }
        function URLLink(){
            alert_content = "해당 글의 주소입니다.\nCtrl+C를 눌러 클립보드로 복사하세요.";
			temp = prompt(alert_content, document.location.href);
        }
    </script>
</body>
</html>
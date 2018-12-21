(function() {

    var string_table = {

        "index.userMenu.about": "소개",
        "index.userMenu.signin": "로그인",
        "index.userMenu.signup": "회원가입",
        "index.userMenu.login": "로그인",
        "index.userMenu.logout": "로그아웃",
        "index.copyright": "Copyright © 2018,  D4Labs, Inc",
        "index.privacy": "개인정보 취급방침",
        "index.terms": "이용약관",


        "schedule.desc": "스케줄은 한국시간(UTC+9 KST)를 기준으로 표시됩니다.",
        "schedule.timezone.placeholder": "시간대를 설정하세요",
        "schedule.timezone.label": "시간대",
        "schedule.timezone.checkbox": "자동으로 시간대 설정",
        "stand.render.talkAbout": "함께 이야기 나누어요",
        "stand.render.write": "게시",
        "stand.renderTopic.search": "태그 검색",
        "stand.renderTopic.searchTag": "\"{tag}\"에 대한 태그 검색",
        "stand.mediaPopover.title": "불러올 방법 선택",
        "stand.mediaPopover.seeMore": "더 보기",
        "standMessages.contentEmptyError": "내용을 입력해주세요.",
        "standMessages.mediaSizeError": "미디어 최대 용량은 10MB입니다.",
        "standMessages.defaultError": "다시 시도해주세요.",
        "standMessages.progress": "progress",
        "alert.default": "새로운 알림이 도착했습니다.",
    }


    // Node.js
    if (typeof module === 'object' && module.exports) {
        module.exports = string_table;
    }
    // AMD / RequireJS
    else if (typeof define === 'function' && define.amd) {
        define([], function() {
            return string_table;
        });
    }
    // included directly via <script> tag
    else {
        root.ships_string_ko = string_table;
    }
}());
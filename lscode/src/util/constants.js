export const exceptionList = ['ls', 'lscode', 'blogcode', 'milkcode', 'moviecode', 'wangcode', 'queryBeautifyCode'] // 제외할 디렉토리
export const arrToEmphasize = ['blog', 'milk', 'movie', 'wang', 'queryBeautify'] // 버튼 강조할 디렉토리

export const PROJECT_TYPE = {
    VUE: 'vueJS',
    REACT: 'reactJS',
    WEB_PAGE: 'webPage',
    TOOL: 'tool',
    LIBRARY: 'library',
    NETWORK: 'Network',
    SOURCE: 'source',
    EXPERIMENT: 'experiment',
    DEVOPS: 'devOps',
    ARCHIVE: 'archive',
    ANDROID: 'android',
    OTHER: 'Other'
};

export const typePriority = [
    PROJECT_TYPE.REACT,
    PROJECT_TYPE.VUE,
    PROJECT_TYPE.ANDROID,
    PROJECT_TYPE.TOOL,
    PROJECT_TYPE.WEB_PAGE,
    PROJECT_TYPE.NETWORK,
    PROJECT_TYPE.SOURCE,
    PROJECT_TYPE.EXPERIMENT,
    PROJECT_TYPE.DEVOPS,
    PROJECT_TYPE.ARCHIVE,
    PROJECT_TYPE.LIBRARY,
    PROJECT_TYPE.OTHER,
];

export const EXTERNAL_LIST = [
    {
        name: "그거 어딨지?",
        url: "https://play.google.com/store/apps/details?id=tk.tkproject.whereismine&hl=ko",
        type: PROJECT_TYPE.ANDROID,
        tag: "highLight",
        desc: "안드로이드 물건 관리 앱",
        spec: ["android", "java"]
    },
    {
        name: "해외 교민 커뮤니티",
        url: "https://play.google.com/store/apps/details?id=tk.tkproject.whereismine&hl=ko",
        type: PROJECT_TYPE.ANDROID,
        tag: "highLight",
        desc: "정보공유, 정보, 중고매매, 부동산, 로컬가게 정보",
        spec: ["android", "kotlin", "Elastic Search"]
    },
    {
        name: "RTC 웹 화상채팅",
        url: "https://rtctest.netlify.app/",
        type: PROJECT_TYPE.WEB_PAGE,
        tag: null,
        desc: "Check out my open source projects",
        spec: ["Git", "Cloud"]
    },
];

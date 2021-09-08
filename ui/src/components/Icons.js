import React, {Component} from 'react';

// 右
export class RightIcon extends Component {
    render() {
        return (
            <svg  style={{paddingLeft: "2px"}} width="20" fill="none" viewBox="0 0 28 34">
                <path stroke="#A5A6F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9" d="M4.5 29.5l19-12.5-19-12.5"/>
            </svg>
        );
    }
}
// 不可用的右
export class RightXIcon extends Component {
    render() {
        return (
            <svg  style={{paddingLeft: "2px"}} width="20" fill="none" viewBox="0 0 28 34">
                <path stroke="#ABABAB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9" d="M4.5 29.5l19-12.5-19-12.5"/>
            </svg>
        );
    }
}
// 左
export class LeftIcon extends Component {
    render() {
        return (
            <svg style={{paddingRight: "2px"}} width="20" fill="none" viewBox="0 0 28 34">
                <path stroke="#A5A6F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9" d="M23.5 4.5L4.5 17l19 12.5"/>
            </svg>
        );
    }
}
// 不可用的左
export class LeftXIcon extends Component {
    render() {
        return (
            <svg style={{paddingRight: "2px"}} width="20" fill="none" viewBox="0 0 28 34">
                <path stroke="#ABABAB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9" d="M23.5 4.5L4.5 17l19 12.5"/>
            </svg>
        );
    }
}
// 骰子
export class DiceIcon extends Component {
    render() {
        return (
            <svg width="35" height="60" fill="none" viewBox="0 0 60 60">
                <path stroke="#D58ED7" strokeWidth="8" d="M10.898 3A7.898 7.898 0 003 10.898v38.204A7.898 7.898 0 0010.898 57h38.204A7.898 7.898 0 0057 49.102V10.898A7.898 7.898 0 0049.102 3H10.898z"/>
                <path fill="#D58ED7" d="M21.184 16.776a4.408 4.408 0 11-8.817 0 4.408 4.408 0 018.817 0zM34.408 30a4.408 4.408 0 11-8.816 0 4.408 4.408 0 018.816 0zM21.184 43.225a4.408 4.408 0 11-8.817 0 4.408 4.408 0 018.817 0zM47.633 16.776a4.408 4.408 0 11-8.817 0 4.408 4.408 0 018.817 0zM47.633 43.225a4.408 4.408 0 11-8.817 0 4.408 4.408 0 018.817 0z"/>
            </svg>
        );
    }
}
// 取消
export class CancelIcon extends Component {
    render() {
        return (
            <svg width="22" height="42" fill="none" viewBox="0 0 42 42">
                <path stroke="#F178B6" strokeLinecap="round" strokeWidth="12" d="M6 6l30 30M6 36L36 6"/>
            </svg>
        );
    }
}
// 不可用的取消
export class CancelXIcon extends Component {
    render() {
        return (
            <svg width="22" height="42" fill="none" viewBox="0 0 42 42">
                <path stroke="#ABABAB" strokeLinecap="round" strokeWidth="12" d="M6 6l30 30M6 36L36 6"/>
            </svg>
        );
    }
}
// 确认
export class OkIcon extends Component {
    render() {
        return (
            <svg width="29" height="48" fill="none" viewBox="0 0 56 48">
                <path stroke="#A5D8A7" strokeLinecap="round" strokeWidth="12" d="M6 20.444L21.493 38 50 6"/>
            </svg>
        );
    }
}
// 不可用的确认
export class OkXIcon extends Component {
    render() {
        return (
            <svg width="29" height="48" fill="none" viewBox="0 0 56 48">
                <path stroke="#ABABAB" strokeLinecap="round" strokeWidth="12" d="M6 20.444L21.493 38 50 6"/>
            </svg>
        );
    }
}
// 不可用的确认
export class StarIcon extends Component {
    render() {
        return (
            <svg style={{paddingLeft: "2px"}} width="12" height="17" fill="none" viewBox="0 0 18 17">
                <path fill="#EAC338" d="M9 0l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89L9 13.5l-5.29 2.781 1.01-5.89L.44 6.219l5.915-.86L9 0z"/>
            </svg>
        );
    }
}
// 删除图片
export class DeleteThumbIcon extends Component {
    render() {
        return (
            <svg className="icon" viewBox="0 0 1024 1024" width="48" height="48">
                <path
    d="M632.917333 572.672l165.290667 165.248a42.624 42.624 0 0 1-60.288 60.288l-165.248-165.290667a42.624 42.624 0 0 1 60.245333-60.245333z m-346.88 225.536a42.624 42.624 0 0 1-60.245333-60.288L451.754667 512 225.792 286.08a42.624 42.624 0 1 1 60.288-60.288L512 451.754667l225.92-225.962667a42.624 42.624 0 1 1 60.288 60.288L286.08 798.208z"
    fill="#F3F3F4"/>
            </svg>
        );
    }
}

// 增加图片
export class AddThumbIcon extends Component {
    render() {
        return (
            <svg className="icon" viewBox="0 0 1024 1024" width="32" height="32">
                <path
    d="M622.89 78.05A448.53 448.53 0 0 0 511.68 64C311.92 64 129.79 198.66 78.05 401.11 16.81 640.77 161.44 884.7 401.11 946a448.53 448.53 0 0 0 111.21 14C712.08 960 894.21 825.34 946 622.89c61.19-239.66-83.44-483.59-323.11-544.84z m261.05 529C840.46 777.18 687.65 896 512.32 896A385.66 385.66 0 0 1 417 883.94 383.9 383.9 0 0 1 140.06 417c43.47-170.17 196.3-289 371.65-289a385.54 385.54 0 0 1 95.34 12.06 383.9 383.9 0 0 1 276.89 467z"
    fill="#ABABAB"/>
                <path
    d="M705.6 479.9h-160v-160a32 32 0 0 0-64 0v160h-160a32 32 0 0 0 0 64h160v160a32 32 0 0 0 64 0v-160h160a32 32 0 0 0 0-64z"
    fill="#ABABAB"/>
            </svg>
        );
    }
}

// 首页
export class HomeIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="41" fill="none" viewBox="0 0 38 41">
                <path fill="#ABABAB" stroke="#ABABAB" strokeWidth="2" d="M18.072 1.322a1.5 1.5 0 011.856 0l14.214 11.2A7.5 7.5 0 0137 18.413v18.588a2.5 2.5 0 01-2.5 2.5h-10a2.5 2.5 0 01-2.5-2.5v-10a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v10a2.5 2.5 0 01-2.5 2.5h-10a2.5 2.5 0 01-2.5-2.5V18.415a7.5 7.5 0 012.86-5.893l14.212-11.2zM19 4.414L5.716 14.877A4.5 4.5 0 004 18.413v18.088h9v-9.5c0-1.931 1.568-3.5 3.5-3.5h5c1.932 0 3.5 1.569 3.5 3.5v9.5h9V18.415a4.5 4.5 0 00-1.716-3.537L19 4.412v.002z"/>
            </svg>
        );
    }
}

// 卡纸
export class CardIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="42" fill="none" viewBox="0 0 42 42">
                <path fill="#ABABAB" stroke="#ABABAB" d="M5 1h32a4 4 0 014 4v32a4 4 0 01-4 4H5a4 4 0 01-4-4V5a4 4 0 014-4zm0 4v32h32V5H5zm6 6h20v20H11V11zm4 4v12h12V15H15z"/>
            </svg>
        );
    }
}

// 内框
export class InnerFrameIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="40" fill="none" viewBox="0 0 40 40">
                <path fill="#ABABAB" d="M8 40c-1.2 0-2-.8-2-2V2c0-1.2.8-2 2-2s2 .8 2 2v36c0 1.2-.8 2-2 2zM33 40c-1.2 0-2-.8-2-2V2c0-1.2.8-2 2-2s2 .8 2 2v36c0 1.2-.8 2-2 2z"/>
                <path fill="#ABABAB" d="M38.333 10H1.667C.667 10 0 9.2 0 8s.667-2 1.667-2h36.666c1 0 1.667.8 1.667 2s-.667 2-1.667 2zM38.333 34H1.667C.667 34 0 33.2 0 32s.667-2 1.667-2h36.666c1 0 1.667.8 1.667 2s-.667 2-1.667 2z"/>
            </svg>
        );
    }
}

// 场景
export class SceneIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="48" fill="none" viewBox="0 0 48 48">
                <path fill="#ABABAB" d="M38 4H10a6 6 0 00-6 6v28a6 6 0 006 6h28c.329-.005.657-.038.98-.1l.6-.14h.24l.74-.28.26-.14c.2-.12.42-.22.62-.36.267-.197.52-.41.76-.64l.14-.18a5.38 5.38 0 00.54-.64l.18-.26c.14-.223.26-.457.36-.7a2 2 0 00.14-.3c.1-.24.16-.5.24-.76v-.3A5.2 5.2 0 0044 38V10a6 6 0 00-6-6zM10 40a2 2 0 01-2-2v-8.62l6.58-6.6a2 2 0 012.84 0L34.62 40H10zm30-2a2 2 0 01-.14.72c-.046.098-.1.191-.16.28a1.878 1.878 0 01-.18.24l-10.7-10.7 1.76-1.76a2 2 0 012.84 0l6.58 6.6V38zm0-10.28L36.24 24a6.16 6.16 0 00-8.48 0L26 25.76 20.24 20a6.16 6.16 0 00-8.48 0L8 23.72V10a2 2 0 012-2h28a2 2 0 012 2v17.72zM27 12a3 3 0 100 5.999A3 3 0 0027 12z"/>
            </svg>
        );
    }
}

// 账号
export class AccountIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="44" fill="none" viewBox="0 0 44 44">
                <path fill="#ABABAB" stroke="#ABABAB" d="M29.837 21.45c0-.688-.55-1.238-1.237-1.238-.688 0-1.238.55-1.238 1.238a5.223 5.223 0 01-5.224 5.225 5.223 5.223 0 01-5.226-5.225c0-.688-.55-1.238-1.237-1.238-.688 0-1.238.55-1.238 1.238 0 4.262 3.438 7.838 7.838 7.838 3.988 0 7.563-3.576 7.563-7.838z"/>
                <path fill="#ABABAB" stroke="#ABABAB" d="M29.15 34.925c6.188-2.75 10.45-8.937 10.45-16.087 0-9.626-7.975-17.463-17.6-17.463-9.625 0-17.6 7.838-17.6 17.6 0 7.15 4.263 13.337 10.45 16.087-3.575 1.1-6.325 3.163-7.425 5.913-.275.688 0 1.375.688 1.65h.55c.55 0 .962-.275 1.237-.825 1.375-3.162 6.325-5.362 12.237-5.362 5.638 0 10.45 2.2 12.1 5.362.276.688 1.1.963 1.788.55.688-.275.962-1.1.55-1.788-1.238-2.474-3.988-4.4-7.425-5.637zM7.013 18.975c0-8.25 6.737-14.988 14.987-14.988s14.987 6.738 14.987 14.988S30.25 33.825 22 33.825s-14.987-6.6-14.987-14.85z"/>
            </svg>
        );
    }
}

// 框条
export class FrameIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="41" fill="none" viewBox="0 0 41 41">
                <path fill="#ABABAB" stroke="#ABABAB" strokeLinejoin="bevel" d="M9.81 11.613l-.146-.354L5.64 7.235l-.853.354v26.03l.853.353 4.024-4.024.147-.353V11.613zm20.112 19.904l-.354-.146H11.587l-.354.146-4.024 4.024.354.853h26.03l.353-.853-4.024-4.024zM11.233 9.69l.354.147h17.982l.353-.147 4.024-4.023-.354-.854H7.562l-.353.854 4.024 4.023zm20.111 19.905l.147.353 4.024 4.024.853-.354V7.588l-.853-.353-4.024 4.024-.147.354v17.982zM12.53 12.056l-.5.5v16.096l.5.5h16.095l.5-.5V12.555l-.5-.5H12.53zm26.157-9.662c.102.135.224.386.352.779.126.383.247.869.361 1.447.229 1.155.425 2.647.585 4.367.321 3.439.497 7.753.514 12.038.016 4.285-.126 8.527-.438 11.823-.157 1.65-.354 3.049-.592 4.093a8 8 0 01-.375 1.254c-.136.327-.252.475-.315.525-.093.072-.298.174-.66.286-.35.107-.802.21-1.348.307-1.092.195-2.522.36-4.187.493-3.328.267-7.556.404-11.806.408-4.25.004-8.511-.125-11.906-.39-1.699-.132-3.172-.297-4.314-.495a13.545 13.545 0 01-1.434-.316c-.39-.113-.64-.222-.777-.314-.09-.06-.227-.218-.382-.546-.15-.318-.295-.745-.429-1.279-.268-1.066-.483-2.494-.645-4.179C.566 29.33.455 25.01.516 20.672c.06-4.335.29-8.671.646-12.064.178-1.697.385-3.148.616-4.24.116-.547.235-.993.354-1.331.126-.355.233-.531.295-.595.059-.061.227-.17.575-.298.33-.123.77-.245 1.31-.362 1.08-.236 2.518-.447 4.204-.626C11.884.797 16.199.569 20.523.513c4.326-.055 8.647.062 12.03.393 1.693.165 3.136.383 4.222.653.543.136.983.281 1.315.433.342.157.52.3.597.402z"/>
            </svg>
        );
    }
}

// 搜索
export class SearchIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="38" fill="none" viewBox="0 0 38 38">
                <path fill="#EAC338" d="M30.21 28.158l-6.308-6.27a8.893 8.893 0 001.596-6.498c-.57-4.066-3.876-7.296-8.018-7.676-5.586-.57-10.336 4.18-9.766 9.804.38 4.066 3.61 7.448 7.676 8.018 2.432.342 4.674-.342 6.498-1.596l6.308 6.308a.711.711 0 00.988 0l.988-.988c.304-.342.304-.798.038-1.102zM10.526 16.606c0-3.344 2.736-6.118 6.118-6.118a6.114 6.114 0 016.118 6.118 6.114 6.114 0 01-6.118 6.118 6.09 6.09 0 01-6.118-6.118z"/>
            </svg>
        );
    }
}

// 浏览量
export class ViewsIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="61" fill="none" viewBox="0 0 60 61">
                <path fill="#81A5F0" d="M23.437 30.5a6.563 6.563 0 1013.125 0 6.563 6.563 0 00-13.125 0z"/>
                <path fill="#81A5F0" d="M30 9.377c-12.868 0-23.613 9.046-26.25 21.123C6.387 42.577 17.132 51.623 30 51.623S53.613 42.577 56.25 30.5C53.613 18.423 42.868 9.377 30 9.377zm0 33.31c-6.72 0-12.188-5.467-12.188-12.187S23.28 18.312 30 18.312c6.72 0 12.188 5.468 12.188 12.188 0 6.72-5.469 12.188-12.188 12.188z"/>
            </svg>
        );
    }
}

// 框条数量
export class FramesIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="51" fill="none" viewBox="0 0 52 51">
                <path fill="#F39E83" stroke="#F39E83" strokeLinejoin="bevel" d="M12.354 14.976l-4.907-4.843v31.328l4.907-4.843V14.976zm24.705 24.38H15.13L10.223 44.2h31.743l-4.907-4.843zM15.13 12.238h21.93l4.906-4.843H10.223l4.907 4.843zm24.705 24.38l4.907 4.844V10.133l-4.907 4.843v21.642zM48.667 3.52c2.945 3.874 3.272 42.025 0 44.554-3.27 2.529-41.22 2.607-45.145 0-3.926-2.607-2.748-41.75 0-44.554 2.747-2.804 42.201-3.874 45.145 0zM16.28 16.111v19.372H35.91V16.11H16.28z"/>
            </svg>
        );
    }
}

// 订单数量
export class OrdersIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="53" fill="none" viewBox="0 0 46 53">
                <path fill="#8CBB19" stroke="#8CBB19" d="M29.74 5.24H16.26c-1.861 0-3.37 1.535-3.37 3.429l.014.31.013.127a3.422 3.422 0 00.06.342l-.023-.11c.021.11.048.217.08.324l-.057-.214c.026.115.059.229.096.34l-.04-.126c.419 1.41 1.705 2.436 3.227 2.436h13.48c1.861 0 3.37-1.535 3.37-3.429s-1.509-3.43-3.37-3.43zm2.679 16.46c1.117 0 2.022.92 2.022 2.057 0 1.136-.906 2.057-2.022 2.057H13.414c-1.116 0-2.021-.921-2.021-2.057 0-1.137.905-2.058 2.021-2.058H32.42zm0 10.972c1.117 0 2.022.921 2.022 2.058 0 1.136-.906 2.057-2.022 2.057H13.414c-1.116 0-2.021-.921-2.021-2.057 0-1.137.905-2.058 2.021-2.058H32.42zm4.385-21.708l-.048.149c-.024.072-.05.144-.076.216l-.032.085-.043.109c-.03.074-.061.148-.093.221l.136-.33a7.55 7.55 0 01-3.308 3.851 7.303 7.303 0 01-3.6.948H16.26l-.075-.003h-.016l-.36-.011a4.261 4.261 0 01-.063-.004l-.064-.005-.095-.008a7.238 7.238 0 01-.375-.044l.47.052a7.272 7.272 0 01-1.41-.252l-.103-.03a6.622 6.622 0 01-.478-.161c-2.131-.8-3.802-2.57-4.495-4.783-2.532.732-4.394 3.112-4.394 5.935v24.689c0 3.409 2.716 6.172 6.066 6.172h24.264c3.35 0 6.066-2.763 6.066-6.172v-24.69c0-2.652-1.645-4.914-3.953-5.787l-.44-.147zM29.74 1.125c3.452 0 6.352 2.4 7.178 5.65 4.732.855 8.324 5.062 8.324 10.124v24.689c0 5.681-4.527 10.287-10.11 10.287H10.868c-5.583 0-10.11-4.606-10.11-10.287v-24.69c0-5.06 3.592-9.268 8.324-10.127.826-3.246 3.726-5.646 7.178-5.646h13.48z"/>
            </svg>
        );
    }
}

// 新增
export class AddIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="56" fill="none" viewBox="0 0 56 56">
                <path stroke="#A5D8A7" strokeLinecap="round" strokeWidth="12" d="M28 6.787v42.426M6.787 28h42.426"/>
            </svg>
        );
    }
}

// 删除
export class DeleteIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" fill="none" viewBox="0 0 18 21">
                <path fill="#D63D2A" d="M2 18.667A2.34 2.34 0 004.333 21h9.334A2.34 2.34 0 0016 18.667v-14H2v14zm15.167-17.5h-4.084L11.917 0H6.083L4.917 1.167H.833V3.5h16.334V1.167z"/>
            </svg>
        );
    }
}

// 小删除
export class DeleteSmallIcon extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="21" fill="none" viewBox="0 0 18 21">
                <path fill="#D63D2A" d="M2 18.667A2.34 2.34 0 004.333 21h9.334A2.34 2.34 0 0016 18.667v-14H2v14zm15.167-17.5h-4.084L11.917 0H6.083L4.917 1.167H.833V3.5h16.334V1.167z"/>
            </svg>
        );
    }
}
import React from "react";
import Button from "./Button";
import Search from "./Search";
import AddGeusts from "./AddGuests";

function Header() {
    return (
        <header>
            <svg className="logo" width="97" height="26" viewBox="0 0 97 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.082 13.188L37.968 21H35.322L34.09 15.932L32.816 21H30.184L28.056 13.188H30.45L31.556 18.774L32.872 13.188H35.406L36.736 18.746L37.828 13.188H40.082ZM42.199 12.376C41.779 12.376 41.4336 12.2547 41.163 12.012C40.9016 11.76 40.771 11.452 40.771 11.088C40.771 10.7147 40.9016 10.4067 41.163 10.164C41.4336 9.912 41.779 9.786 42.199 9.786C42.6096 9.786 42.9456 9.912 43.207 10.164C43.4776 10.4067 43.613 10.7147 43.613 11.088C43.613 11.452 43.4776 11.76 43.207 12.012C42.9456 12.2547 42.6096 12.376 42.199 12.376ZM43.389 13.188V21H40.995V13.188H43.389ZM49.8839 13.104C50.7985 13.104 51.5265 13.4027 52.0679 14C52.6185 14.588 52.8939 15.4 52.8939 16.436V21H50.5139V16.758C50.5139 16.2353 50.3785 15.8293 50.1079 15.54C49.8372 15.2507 49.4732 15.106 49.0159 15.106C48.5585 15.106 48.1945 15.2507 47.9239 15.54C47.6532 15.8293 47.5179 16.2353 47.5179 16.758V21H45.1239V13.188H47.5179V14.224C47.7605 13.8787 48.0872 13.608 48.4979 13.412C48.9085 13.2067 49.3705 13.104 49.8839 13.104ZM54.0815 17.08C54.0815 16.2773 54.2308 15.5727 54.5295 14.966C54.8375 14.3593 55.2528 13.8927 55.7755 13.566C56.2981 13.2393 56.8815 13.076 57.5255 13.076C58.0388 13.076 58.5055 13.1833 58.9255 13.398C59.3548 13.6127 59.6908 13.902 59.9335 14.266V10.64H62.3275V21H59.9335V19.88C59.7095 20.2533 59.3875 20.552 58.9675 20.776C58.5568 21 58.0761 21.112 57.5255 21.112C56.8815 21.112 56.2981 20.9487 55.7755 20.622C55.2528 20.286 54.8375 19.8147 54.5295 19.208C54.2308 18.592 54.0815 17.8827 54.0815 17.08ZM59.9335 17.094C59.9335 16.4967 59.7655 16.0253 59.4295 15.68C59.1028 15.3347 58.7015 15.162 58.2255 15.162C57.7495 15.162 57.3435 15.3347 57.0075 15.68C56.6808 16.016 56.5175 16.4827 56.5175 17.08C56.5175 17.6773 56.6808 18.1533 57.0075 18.508C57.3435 18.8533 57.7495 19.026 58.2255 19.026C58.7015 19.026 59.1028 18.8533 59.4295 18.508C59.7655 18.1627 59.9335 17.6913 59.9335 17.094ZM66.4534 14.294C66.6774 13.93 66.9994 13.636 67.4194 13.412C67.8394 13.188 68.3201 13.076 68.8614 13.076C69.5054 13.076 70.0887 13.2393 70.6114 13.566C71.1341 13.8927 71.5447 14.3593 71.8434 14.966C72.1514 15.5727 72.3054 16.2773 72.3054 17.08C72.3054 17.8827 72.1514 18.592 71.8434 19.208C71.5447 19.8147 71.1341 20.286 70.6114 20.622C70.0887 20.9487 69.5054 21.112 68.8614 21.112C68.3107 21.112 67.8301 21.0047 67.4194 20.79C67.0087 20.566 66.6867 20.272 66.4534 19.908V21H64.0594V10.64H66.4534V14.294ZM69.8694 17.08C69.8694 16.4827 69.7014 16.016 69.3654 15.68C69.0387 15.3347 68.6327 15.162 68.1474 15.162C67.6714 15.162 67.2654 15.3347 66.9294 15.68C66.6027 16.0253 66.4394 16.4967 66.4394 17.094C66.4394 17.6913 66.6027 18.1627 66.9294 18.508C67.2654 18.8533 67.6714 19.026 68.1474 19.026C68.6234 19.026 69.0294 18.8533 69.3654 18.508C69.7014 18.1533 69.8694 17.6773 69.8694 17.08ZM78.3214 13.104C79.236 13.104 79.964 13.4027 80.5054 14C81.056 14.588 81.3314 15.4 81.3314 16.436V21H78.9514V16.758C78.9514 16.2353 78.816 15.8293 78.5454 15.54C78.2747 15.2507 77.9107 15.106 77.4534 15.106C76.996 15.106 76.632 15.2507 76.3614 15.54C76.0907 15.8293 75.9554 16.2353 75.9554 16.758V21H73.5614V13.188H75.9554V14.224C76.198 13.8787 76.5247 13.608 76.9354 13.412C77.346 13.2067 77.808 13.104 78.3214 13.104ZM85.389 14.294C85.613 13.93 85.935 13.636 86.355 13.412C86.775 13.188 87.2556 13.076 87.797 13.076C88.441 13.076 89.0243 13.2393 89.547 13.566C90.0696 13.8927 90.4803 14.3593 90.779 14.966C91.087 15.5727 91.241 16.2773 91.241 17.08C91.241 17.8827 91.087 18.592 90.779 19.208C90.4803 19.8147 90.0696 20.286 89.547 20.622C89.0243 20.9487 88.441 21.112 87.797 21.112C87.2463 21.112 86.7656 21.0047 86.355 20.79C85.9443 20.566 85.6223 20.272 85.389 19.908V21H82.995V10.64H85.389V14.294ZM88.805 17.08C88.805 16.4827 88.637 16.016 88.301 15.68C87.9743 15.3347 87.5683 15.162 87.083 15.162C86.607 15.162 86.201 15.3347 85.865 15.68C85.5383 16.0253 85.375 16.4967 85.375 17.094C85.375 17.6913 85.5383 18.1627 85.865 18.508C86.201 18.8533 86.607 19.026 87.083 19.026C87.559 19.026 87.965 18.8533 88.301 18.508C88.637 18.1533 88.805 17.6773 88.805 17.08Z" fill="#EB5757" fillOpacity="0.8" />
                <path d="M9.22724 7.5C10.3819 5.5 13.2687 5.5 14.4234 7.5L20.0526 17.25C21.2073 19.25 19.7639 21.75 17.4545 21.75H6.19615C3.88675 21.75 2.44338 19.25 3.59808 17.25L9.22724 7.5Z" fill="#EB5757" fillOpacity="0.8" />
            </svg>
            <div>
                <Button />
            </div>
            <AddGeusts />
            <Search />
        </header>
    )
}
export default Header
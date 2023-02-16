import { FC } from "react";

type IconProps = {
    className?: string;
};

export const ArrowBackIcon: FC<IconProps> = ({ className = "" }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8559 19.7699C14.6868 19.7705 14.5198 19.7345 14.367 19.6647C14.2143 19.5949 14.0797 19.4929 13.9732 19.3664L8.50743 12.8227C8.34099 12.6276 8.25 12.3828 8.25 12.1302C8.25 11.8776 8.34099 11.6328 8.50743 11.4377L14.1656 4.89399C14.3577 4.67126 14.6337 4.5312 14.9329 4.50461C15.2322 4.47803 15.5301 4.56709 15.7612 4.75221C15.9923 4.93733 16.1376 5.20334 16.1652 5.49172C16.1928 5.78011 16.1004 6.06725 15.9083 6.28997L10.8499 12.1356L15.7386 17.9813C15.8769 18.1414 15.9648 18.3363 15.9919 18.5431C16.0189 18.7498 15.9839 18.9597 15.891 19.1478C15.7982 19.336 15.6514 19.4946 15.4679 19.6048C15.2845 19.7151 15.0721 19.7724 14.8559 19.7699Z" />
        </svg>
    );
};

export const CartIcon: FC<IconProps> = ({ className = "" }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.37909 2.25C5.65948 2.25 4.17107 3.48066 3.84944 5.16978L3.14243 8.88185H2.32856C2.20656 8.88193 2.08608 8.90892 1.97572 8.96092C1.86535 9.01291 1.76783 9.08862 1.6901 9.18265C1.61236 9.27667 1.55633 9.38669 1.52601 9.50486C1.49569 9.62303 1.49183 9.74644 1.51468 9.86626L3.29678 19.2258C3.61904 20.9145 5.10683 22.1456 6.82643 22.1456H17.1736C18.8932 22.1456 20.3816 20.9149 20.7032 19.2258L22.4853 9.86626C22.5082 9.74644 22.5043 9.62303 22.474 9.50486C22.4436 9.38669 22.3877 9.27667 22.3099 9.18265C22.2322 9.08862 22.1347 9.01291 22.0243 8.96092C21.914 8.90892 21.7935 8.88193 21.6715 8.88185H20.8576L20.1506 5.16978C19.8289 3.48066 18.3405 2.25 16.621 2.25H7.37909ZM7.37909 3.90796H16.621C17.5552 3.90796 18.3471 4.56237 18.5218 5.47958C18.5218 5.47993 18.5218 5.4803 18.5218 5.48065L19.1694 8.88185H4.83061L5.47825 5.48065C5.47825 5.4803 5.47825 5.47993 5.47825 5.47958C5.6529 4.5624 6.44484 3.90796 7.37909 3.90796ZM3.33024 10.5398H3.69184C3.78083 10.5544 3.87162 10.5544 3.96061 10.5398H20.0416C20.1294 10.5541 20.2192 10.5541 20.3071 10.5398H20.6698L19.0744 18.916C18.8998 19.8331 18.1078 20.4876 17.1736 20.4876H6.82643C5.89251 20.4876 5.1011 19.8331 4.9256 18.916V18.9149L3.33024 10.5398ZM7.27977 12.186C7.16399 12.1889 7.05014 12.2161 6.94553 12.2659C6.84092 12.3156 6.7479 12.3867 6.67244 12.4745C6.59698 12.5624 6.54078 12.6651 6.50743 12.776C6.47409 12.8869 6.46436 13.0035 6.47886 13.1185L7.03151 18.0924C7.04043 18.203 7.07148 18.3108 7.12282 18.4092C7.17415 18.5077 7.24473 18.5948 7.33036 18.6654C7.41599 18.736 7.51493 18.7887 7.62132 18.8203C7.7277 18.8521 7.83937 18.862 7.94969 18.8497C8.06001 18.8375 8.16674 18.8031 8.26354 18.7488C8.36035 18.6945 8.44527 18.6213 8.51326 18.5335C8.58124 18.4459 8.63091 18.3453 8.65933 18.238C8.68775 18.1307 8.69433 18.0188 8.67869 17.9089L8.12603 12.935C8.10587 12.7262 8.00736 12.5329 7.85032 12.394C7.69329 12.2549 7.48942 12.1805 7.27977 12.186ZM10.6054 12.186C10.3857 12.1894 10.1765 12.2798 10.0234 12.4375C9.87041 12.5951 9.78624 12.8071 9.78939 13.0268V18.0006C9.78783 18.1105 9.80818 18.2196 9.84908 18.3215C9.89008 18.4234 9.95088 18.5162 10.028 18.5944C10.1052 18.6727 10.197 18.7348 10.2984 18.7772C10.3997 18.8196 10.5085 18.8415 10.6184 18.8415C10.7282 18.8415 10.837 18.8196 10.9384 18.7772C11.0397 18.7348 11.1316 18.6727 11.2087 18.5944C11.2859 18.5162 11.3467 18.4234 11.3877 18.3215C11.4286 18.2196 11.4489 18.1105 11.4474 18.0006V13.0268C11.4489 12.9158 11.4282 12.8057 11.3864 12.7029C11.3447 12.6 11.2828 12.5067 11.2042 12.4282C11.1257 12.3499 11.0323 12.288 10.9294 12.2464C10.8265 12.2047 10.7164 12.1842 10.6054 12.186ZM13.3687 12.186C13.149 12.1894 12.9397 12.2798 12.7867 12.4375C12.6337 12.5951 12.5495 12.8071 12.5527 13.0268V18.0006C12.5511 18.1105 12.5715 18.2196 12.6123 18.3215C12.6534 18.4234 12.7141 18.5162 12.7913 18.5944C12.8684 18.6727 12.9603 18.7348 13.0617 18.7772C13.163 18.8196 13.2718 18.8415 13.3816 18.8415C13.4915 18.8415 13.6003 18.8196 13.7016 18.7772C13.803 18.7348 13.8948 18.6727 13.972 18.5944C14.0491 18.5162 14.1099 18.4234 14.1509 18.3215C14.1918 18.2196 14.2122 18.1105 14.2106 18.0006V13.0268C14.2122 12.9158 14.1915 12.8057 14.1497 12.7029C14.1079 12.6 14.046 12.5067 13.9675 12.4282C13.889 12.3499 13.7956 12.288 13.6927 12.2464C13.5898 12.2047 13.4797 12.1842 13.3687 12.186ZM16.6954 12.186C16.49 12.1868 16.2923 12.264 16.1405 12.4024C15.9887 12.5408 15.8938 12.7305 15.874 12.935L15.3213 17.9089C15.3057 18.0188 15.3123 18.1307 15.3407 18.238C15.3691 18.3453 15.4187 18.4459 15.4868 18.5335C15.5548 18.6213 15.6397 18.6945 15.7365 18.7488C15.8333 18.8031 15.94 18.8375 16.0503 18.8497C16.1606 18.862 16.2724 18.8521 16.3787 18.8203C16.4851 18.7887 16.5841 18.736 16.6696 18.6654C16.7553 18.5948 16.8259 18.5077 16.8772 18.4092C16.9286 18.3108 16.9595 18.203 16.9685 18.0924L17.5211 13.1185C17.5358 13.0016 17.5254 12.8827 17.4906 12.7702C17.4559 12.6576 17.3974 12.5536 17.3193 12.4654C17.2412 12.3771 17.1451 12.3065 17.0375 12.2583C16.9299 12.2102 16.8133 12.1855 16.6954 12.186Z" />
        </svg>
    );
};

export const SearchIcon: FC<IconProps> = ({ className = "" }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2485 3C11.6185 2.99983 12.9605 3.38787 14.119 4.11915C15.2775 4.85043 16.2051 5.89502 16.7943 7.13188C17.3835 8.36873 17.6101 9.74722 17.448 11.1076C17.2858 12.468 16.7415 13.7546 15.8781 14.8183L20.7778 19.718C20.9124 19.8517 20.9913 20.0313 20.9987 20.2208C21.0061 20.4103 20.9414 20.5955 20.8177 20.7393C20.694 20.883 20.5204 20.9745 20.332 20.9954C20.1435 21.0163 19.9541 20.9651 19.8019 20.8519L19.7179 20.7789L14.8172 15.8792C13.9161 16.6103 12.8527 17.1144 11.7164 17.3492C10.5801 17.584 9.40396 17.5425 8.28695 17.2284C7.16994 16.9143 6.14465 16.3366 5.29725 15.544C4.44984 14.7513 3.80508 13.7668 3.41715 12.6733C3.02922 11.5797 2.90946 10.409 3.06792 9.25952C3.22639 8.11005 3.65845 7.01541 4.3278 6.06759C4.99715 5.11978 5.88424 4.34647 6.9145 3.81268C7.94477 3.27888 9.08812 3.00018 10.2485 3ZM10.2485 4.49991C9.4934 4.49991 8.74574 4.64863 8.04816 4.93758C7.35058 5.22652 6.71674 5.65004 6.18284 6.18395C5.64893 6.71785 5.22541 7.35169 4.93647 8.04927C4.64752 8.74685 4.4988 9.49451 4.4988 10.2496C4.4988 11.0046 4.64752 11.7523 4.93647 12.4499C5.22541 13.1474 5.64893 13.7813 6.18284 14.3152C6.71674 14.8491 7.35058 15.2726 8.04816 15.5616C8.74574 15.8505 9.4934 15.9992 10.2485 15.9992C11.7734 15.9992 13.2358 15.3935 14.3141 14.3152C15.3923 13.2369 15.9981 11.7745 15.9981 10.2496C15.9981 8.72466 15.3923 7.26222 14.3141 6.18395C13.2358 5.10568 11.7734 4.49991 10.2485 4.49991Z" />
        </svg>
    );
};

export const HomeIcon: FC<IconProps> = ({ className = '' }) => {
    return (
        <svg className={className} viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M19.3478 20.625H14.9054C14.2238 20.625 13.6715 20.0727 13.6715 19.391V14.9487C13.6715 14.4033 13.2297 13.9615 12.6843 13.9615H10.7099C10.1645 13.9615 9.72276 14.4033 9.72276 14.9487V19.391C9.72276 20.0727 9.17043 20.625 8.48878 20.625H4.04647C3.36483 20.625 2.8125 20.0727 2.8125 19.391V9.96988C2.8125 8.83512 3.33274 7.76304 4.22367 7.06115L11.2386 1.53344C11.5076 1.32219 11.8867 1.32219 12.1552 1.53344L19.171 7.06115C20.062 7.76304 20.5817 8.83462 20.5817 9.96889V19.391C20.5817 20.0727 20.0294 20.625 19.3478 20.625Z' />
        </svg>
    );
};

export const MemberIcon: FC<IconProps> = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.475 18.0583V18.7H6.75833V18.0583H5.475ZM15.7417 18.0583V18.7H17.025V18.0583H15.7417ZM6.75833 18.0583V17.4167H5.475V18.0583H6.75833ZM9.96667 14.2083H12.5333V12.925H9.96667V14.2083ZM15.7417 17.4167V18.0583H17.025V17.4167H15.7417ZM12.5333 14.2083C13.3842 14.2083 14.2003 14.5464 14.802 15.148C15.4036 15.7497 15.7417 16.5658 15.7417 17.4167H17.025C17.025 16.2254 16.5518 15.0829 15.7094 14.2406C14.8671 13.3982 13.7246 12.925 12.5333 12.925V14.2083ZM6.75833 17.4167C6.75833 16.5658 7.09635 15.7497 7.69803 15.148C8.29971 14.5464 9.11576 14.2083 9.96667 14.2083V12.925C8.7754 12.925 7.63293 13.3982 6.79058 14.2406C5.94823 15.0829 5.475 16.2254 5.475 17.4167H6.75833ZM11.25 5.225C10.3991 5.225 9.58305 5.56302 8.98137 6.1647C8.37969 6.76638 8.04167 7.58243 8.04167 8.43333H9.325C9.325 7.92279 9.52781 7.43316 9.88882 7.07215C10.2498 6.71114 10.7395 6.50833 11.25 6.50833V5.225ZM14.4583 8.43333C14.4583 7.58243 14.1203 6.76638 13.5186 6.1647C12.917 5.56302 12.1009 5.225 11.25 5.225V6.50833C11.7605 6.50833 12.2502 6.71114 12.6112 7.07215C12.9722 7.43316 13.175 7.92279 13.175 8.43333H14.4583ZM11.25 11.6417C12.1009 11.6417 12.917 11.3036 13.5186 10.702C14.1203 10.1003 14.4583 9.28424 14.4583 8.43333H13.175C13.175 8.94387 12.9722 9.43351 12.6112 9.79451C12.2502 10.1555 11.7605 10.3583 11.25 10.3583V11.6417ZM11.25 10.3583C10.7395 10.3583 10.2498 10.1555 9.88882 9.79451C9.52781 9.43351 9.325 8.94387 9.325 8.43333H8.04167C8.04167 9.28424 8.37969 10.1003 8.98137 10.702C9.58305 11.3036 10.3991 11.6417 11.25 11.6417V10.3583ZM11.25 19.3417C9.03765 19.3417 6.91592 18.4628 5.35155 16.8984C3.78718 15.3341 2.90833 13.2123 2.90833 11H1.625C1.625 13.5527 2.63906 16.0009 4.4441 17.8059C6.24914 19.6109 8.69729 20.625 11.25 20.625V19.3417ZM19.5917 11C19.5917 12.0954 19.3759 13.1802 18.9567 14.1922C18.5375 15.2043 17.923 16.1239 17.1484 16.8984C16.3739 17.673 15.4543 18.2875 14.4422 18.7067C13.4302 19.1259 12.3454 19.3417 11.25 19.3417V20.625C13.8027 20.625 16.2509 19.6109 18.0559 17.8059C19.8609 16.0009 20.875 13.5527 20.875 11H19.5917ZM11.25 2.65833C12.3454 2.65833 13.4302 2.8741 14.4422 3.2933C15.4543 3.71251 16.3739 4.32696 17.1484 5.10155C17.923 5.87615 18.5375 6.79572 18.9567 7.80778C19.3759 8.81984 19.5917 9.90456 19.5917 11H20.875C20.875 8.44729 19.8609 5.99914 18.0559 4.1941C16.2509 2.38906 13.8027 1.375 11.25 1.375V2.65833ZM11.25 1.375C8.69729 1.375 6.24914 2.38906 4.4441 4.1941C2.63906 5.99914 1.625 8.44729 1.625 11H2.90833C2.90833 8.78765 3.78718 6.66592 5.35155 5.10155C6.91592 3.53718 9.03765 2.65833 11.25 2.65833V1.375Z" />
    </svg>
  );
};

export const NoteIcon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0719 0.375C10.6206 0.374933 11.1489 0.583184 11.55 0.957668C11.9511 1.33215 12.1951 1.84494 12.2327 2.3924L12.2375 2.54062C12.2375 2.45881 12.2327 2.37892 12.224 2.3H13.9219C14.2063 2.3 14.4879 2.35602 14.7506 2.46485C15.0134 2.57368 15.2521 2.7332 15.4532 2.9343C15.6543 3.13539 15.8138 3.37413 15.9227 3.63688C16.0315 3.89962 16.0875 4.18123 16.0875 4.46562V17.4594C16.0875 17.7438 16.0315 18.0254 15.9227 18.2881C15.8138 18.5509 15.6543 18.7896 15.4532 18.9907C15.2521 19.1918 15.0134 19.3513 14.7506 19.4602C14.4879 19.569 14.2063 19.625 13.9219 19.625H2.85312C2.27877 19.625 1.72793 19.3968 1.3218 18.9907C0.915664 18.5846 0.6875 18.0337 0.6875 17.4594V4.46562C0.6875 3.89127 0.915664 3.34043 1.3218 2.9343C1.72793 2.52816 2.27877 2.3 2.85312 2.3H4.55097C4.54424 2.35582 4.54135 2.41261 4.53846 2.4694L4.5375 2.54062C4.5375 1.96627 4.76566 1.41543 5.1718 1.0093C5.57793 0.603163 6.12876 0.375 6.70312 0.375H10.0719ZM10.0719 4.70625H6.70312C6.34059 4.70635 5.98385 4.61536 5.66565 4.44163C5.34746 4.2679 5.07802 4.01701 4.88207 3.71199L4.90229 3.74375H2.85312C2.66167 3.74375 2.47806 3.8198 2.34268 3.95518C2.2073 4.09056 2.13125 4.27417 2.13125 4.46562V17.4594C2.13125 17.8578 2.45465 18.1812 2.85312 18.1812H13.9219C14.1133 18.1812 14.2969 18.1052 14.4323 17.9698C14.5677 17.8344 14.6437 17.6508 14.6437 17.4594V4.46562C14.6437 4.27417 14.5677 4.09056 14.4323 3.95518C14.2969 3.8198 14.1133 3.74375 13.9219 3.74375H11.8727L11.8929 3.71199C11.697 4.01701 11.4275 4.2679 11.1093 4.44163C10.7912 4.61536 10.4344 4.70635 10.0719 4.70625ZM10.0719 1.81875H6.70312C6.51167 1.81875 6.32806 1.8948 6.19268 2.03018C6.0573 2.16556 5.98125 2.34917 5.98125 2.54062C5.98125 2.73208 6.0573 2.91569 6.19268 3.05107C6.32806 3.18645 6.51167 3.2625 6.70312 3.2625H10.0719C10.2633 3.2625 10.4469 3.18645 10.5823 3.05107C10.7177 2.91569 10.7937 2.73208 10.7937 2.54062C10.7937 2.34917 10.7177 2.16556 10.5823 2.03018C10.4469 1.8948 10.2633 1.81875 10.0719 1.81875ZM4.5375 12.4062H8.3875C8.57895 12.4062 8.76256 12.3302 8.89794 12.1948C9.03332 12.0594 9.10937 11.8758 9.10937 11.6844C9.10937 11.4929 9.03332 11.3093 8.89794 11.1739C8.76256 11.0386 8.57895 10.9625 8.3875 10.9625H4.5375C4.34605 10.9625 4.16243 11.0386 4.02706 11.1739C3.89168 11.3093 3.81562 11.4929 3.81562 11.6844C3.81562 11.8758 3.89168 12.0594 4.02706 12.1948C4.16243 12.3302 4.34605 12.4062 4.5375 12.4062ZM4.5375 8.55625H12.2375C12.429 8.55625 12.6126 8.4802 12.7479 8.34482C12.8833 8.20944 12.9594 8.02583 12.9594 7.83437C12.9594 7.64292 12.8833 7.45931 12.7479 7.32393C12.6126 7.18855 12.429 7.1125 12.2375 7.1125H4.5375C4.34605 7.1125 4.16243 7.18855 4.02706 7.32393C3.89168 7.45931 3.81562 7.64292 3.81562 7.83437C3.81562 8.02583 3.89168 8.20944 4.02706 8.34482C4.16243 8.4802 4.34605 8.55625 4.5375 8.55625ZM4.5375 16.2562H10.3125C10.504 16.2562 10.6876 16.1802 10.8229 16.0448C10.9583 15.9094 11.0344 15.7258 11.0344 15.5344C11.0344 15.3429 10.9583 15.1593 10.8229 15.0239C10.6876 14.8886 10.504 14.8125 10.3125 14.8125H4.5375C4.34605 14.8125 4.16243 14.8886 4.02706 15.0239C3.89168 15.1593 3.81562 15.3429 3.81562 15.5344C3.81562 15.7258 3.89168 15.9094 4.02706 16.0448C4.16243 16.1802 4.34605 16.2562 4.5375 16.2562Z" />
    </svg>
  );
};

export const NotificationIcon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8733 15.9754L17.5998 14.7019V9.76603C17.5998 6.73538 15.9808 4.19833 13.1575 3.52705V2.85577C13.1575 2.03641 12.4961 1.375 11.6767 1.375C10.8574 1.375 10.1959 2.03641 10.1959 2.85577V3.52705C7.36274 4.19833 5.75364 6.72551 5.75364 9.76603V14.7019L4.48018 15.9754C3.85825 16.5973 4.29261 17.6635 5.1712 17.6635H18.1724C19.0608 17.6635 19.4952 16.5973 18.8733 15.9754ZM15.6254 15.6891H7.728V9.76603C7.728 7.31782 9.21864 5.32372 11.6767 5.32372C14.1348 5.32372 15.6254 7.31782 15.6254 9.76603V15.6891ZM11.6767 20.625C12.7626 20.625 13.6511 19.7365 13.6511 18.6506H9.70236C9.70236 19.1743 9.91037 19.6765 10.2806 20.0467C10.6509 20.417 11.1531 20.625 11.6767 20.625Z" />
    </svg>
  );
};

export const DropDownIcon: React.FC<IconProps> = ({ className = "" }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.29303 9.29308C5.48056 9.10561 5.73487 9.0003 6.00003 9.0003C6.26519 9.0003 6.5195 9.10561 6.70703 9.29308L12 14.5861L17.293 9.29308C17.3853 9.19757 17.4956 9.12139 17.6176 9.06898C17.7396 9.01657 17.8709 8.98898 18.0036 8.98783C18.1364 8.98668 18.2681 9.01198 18.391 9.06226C18.5139 9.11254 18.6255 9.18679 18.7194 9.28069C18.8133 9.37458 18.8876 9.48623 18.9379 9.60913C18.9881 9.73202 19.0134 9.8637 19.0123 9.99648C19.0111 10.1293 18.9835 10.2605 18.9311 10.3825C18.8787 10.5045 18.8025 10.6148 18.707 10.7071L12.707 16.7071C12.5195 16.8946 12.2652 16.9999 12 16.9999C11.7349 16.9999 11.4806 16.8946 11.293 16.7071L5.29303 10.7071C5.10556 10.5196 5.00024 10.2652 5.00024 10.0001C5.00024 9.73492 5.10556 9.48061 5.29303 9.29308Z" />
        </svg>
    );
};

export const CheckDisabledIcon: FC<IconProps> = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="#EDEDED" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#DDDDDD" />
    </svg>
  );
};

export const CheckRoundedIcon: FC<IconProps> = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path data-name="Rectangle 21900" fill="none" d="M0 0h36v36H0z" />
      <path data-name="Path 11033" d="m731.622 183.308-10.753-12.356a2.631 2.631 0 1 1 3.969-3.455l6.9 7.928 15.92-17.243a2.631 2.631 0 0 1 3.866 3.57z" transform="translate(-718.222 -152.337)" />
    </svg>
  );
};

export const CheckRoundedMinusIcon: FC<IconProps> = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.996948 1.75H12.9999C13.1989 1.75 13.3896 1.67098 13.5303 1.53033C13.6709 1.38968 13.7499 1.19891 13.7499 1C13.7499 0.801088 13.6709 0.610322 13.5303 0.46967C13.3896 0.329018 13.1989 0.25 12.9999 0.25H0.996948C0.798036 0.25 0.60727 0.329018 0.466618 0.46967C0.325966 0.610322 0.246948 0.801088 0.246948 1C0.246948 1.19891 0.325966 1.38968 0.466618 1.53033C0.60727 1.67098 0.798036 1.75 0.996948 1.75Z" />
    </svg>
  );
};
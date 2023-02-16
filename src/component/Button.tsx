import React from 'react';

// ทดสอบ whiteRed ใช้ได้ red, black, whiteBlack, green, grey ยังไม่ได้ทดสอบ
const BUTTON_STYLES = {
  red: 'bg-red text-white hover:bg-red-dark [&_svg]:hover:fill-red-dark disabled:bg-grey disabled:text-grey-light',
  black: 'bg-dark text-white hover:bg-black-super border disabled:bg-grey disabled:text-grey-light',
  hoverBlack: 'border border-grey-light text-white hover:bg-black hover:text-white',
  whiteRed: 'bg-white-soft border border-grey-light hover:border-red-light [&_svg]:hover:fill-red-light',
  whiteBlack: 'bg-white-soft text-dark-grey border hover:bg-white hover:text-black hover:border-black [&_svg]:hover:fill-black',
  green: 'bg-green-lime text-white',
  grey: 'bg-grey-light text-grey',
  whiteGrey: 'bg-white text-grey-dark border border-grey-light2 hover:bg-white hover:text-black hover:border-black [&_svg]:hover:fill-grey-light',
  error: 'bg-white text-grey-dark border border-red hover:bg-white hover:text-black hover:border-red [&_svg]:hover:fill-grey',  
}

type ExtractKeys<T> = keyof T;
export type BG_STYLE = ExtractKeys<typeof BUTTON_STYLES>;

type ButtonProps = {
  text?: string;
  title?: string;
  leftIcon?: any;
  centerIcon?: any;
  rightIcon?: any;
  disabled?: boolean;
  placeholder?: string;
  inputValue?: string;
  actived?: any;
  hover?: boolean;
  disabledBtn?: boolean;
  bgStyle: BG_STYLE;
  handleClick?: (e?: any) => void;
  handleChange?: (e?: any) => void;
};

const BTN =
  'w-full rounded-md flex items-center justify-center font-normal disabled:bg-grey-smoke disabled:text-grey-light cursor-pointer';

export const ButtonS: React.FC<ButtonProps> = ({
  title,
  leftIcon,
  rightIcon,
  disabled,
  bgStyle,
  handleClick,
}) => {
  const className = `h-9 py-2.5 text-md flex cursor-pointer ${BTN} ${BUTTON_STYLES[bgStyle]}`;
  const titleDetail = 'mx-1 text-xl font-medium';
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {leftIcon && leftIcon}
      <div className={titleDetail}>{title}</div>
      {rightIcon && rightIcon}
    </button>
  );
};

export const ButtonM: React.FC<ButtonProps> = ({
  title,
  leftIcon,
  rightIcon,
  disabled,
  bgStyle,
  handleClick,
}) => {
  const className = `h-[46px] py-2.5 text-lg cursor-pointer flex ${BTN} ${BUTTON_STYLES[bgStyle]}`;
  const titleDetail = `mx-1 text-base font-medium `;
  return (
    <>
      <button className={className} onClick={handleClick} disabled={disabled}>
        {leftIcon && leftIcon}
        <div className={titleDetail}>{title}</div>
        {rightIcon && rightIcon}
      </button>
    </>
  );
};

export const ButtonIconTop: React.FC<ButtonProps> = ({
  text,
  leftIcon,
  bgStyle,
  disabled,
  actived,
  handleClick,
}) => {
  const BtnActive = actived
    ? 'text-red border border-red bg-red-pink'
    : 'bg-white-soft border border-grey-light hover:border-red-light [&_svg]:hover:fill-red-light text-dark-grey';
  const className = `flex flex-col w-full h-auto p-3 rounded-md ${BtnActive} gap-y-1 cursor-pointer`;
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {leftIcon && leftIcon}
      <div className='text-sm font-normal leading-5 text-dark-grey text-start'>{text}</div>
    </button>
  );
};

export const ButttonCenterIcon: React.FC<ButtonProps> = ({
  title,
  actived,
  hover,
  centerIcon,
  bgStyle,
  disabled,
  handleClick,
}) => {
  const BtnActive = actived
    ? 'text-red border border-red'
    : 'text-dark-grey [&_svg]:fill-red border border-grey-light';
  const className = `flex flex-col w-full h-[100px] max-xs:w-[70px] w-[83px] py-3 px-2 bg-white rounded-md items-center ${
    hover && BUTTON_STYLES[bgStyle]
  }`;
  return (
    <button
      className={`${className} ${BtnActive} cursor-pointer`}
      onClick={handleClick}
      disabled={disabled}
    >
      <div className='h-10'>{centerIcon}</div>
      <div className='flex text-xs leading-4'>{title}</div>
    </button>
  );
};

export const ButtonSelect: React.FC<ButtonProps> = ({
  title,
  actived,
  hover,
  bgStyle,
  disabledBtn,
  handleClick,
}) => {
  const BtnActive = actived
    ? 'bg-red-pink text-black border border-red'
    : BUTTON_STYLES[bgStyle];
  const className = `w-full h-9 py-2.5 px-4 rounded-md flex items-center justify-center `;
  return (
    <button
      className={
        disabledBtn
          ? `${className} bg-grey-light text-grey`
          : `${className} ${BtnActive} cursor-pointer`
      }
      onClick={handleClick}
      disabled={disabledBtn}
    >
      <div className='flex flex-col gap-y-1 text-base font-medium leading-5'>
        {title}
      </div>
    </button>
  );
};

export const ButtonSuperS: React.FC<ButtonProps> = ({
  title,
  leftIcon,
  rightIcon,
  disabled,
  bgStyle,
  handleClick,
}) => {
  const className = `h-6 py-2.5 pr-2 text-md flex ${BTN} ${BUTTON_STYLES[bgStyle]} disabled:border-grey-light disabled:text-grey-light`;
  const titleDetail = 'mx-1 text-xs';
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {leftIcon && leftIcon}
      <div className={titleDetail}>{title}</div>
      {rightIcon && rightIcon}
    </button>
  );
};

export const ButtonCartS: React.FC<ButtonProps> = ({
  title,
  leftIcon,
  rightIcon,
  disabled,
  bgStyle,
  handleClick,
}) => {
  const className =`max-xxs:px-1 max-xxs:px-2 max-ss:px-2 h-9 w-full px-[18px] w-auto rounded-md ${BTN} ${BUTTON_STYLES[bgStyle]}`;
  const titleDetail = 'max-xxs:text-xs max-xxs:mx-0.5 xxs:text-xs xxs:mx-0.5 ss:mx-1 ss:text-base';
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {leftIcon && leftIcon}
      <div className={titleDetail}>{title}</div>
      {rightIcon && rightIcon}
    </button>
  );
};

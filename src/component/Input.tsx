import { FC } from 'react';
import { SearchIcon } from '../assets/icon';

const BUTTON_STYLES = {
    red: 'bg-red-light text-white hover:bg-red-dark [&_svg]:hover:fill-red-dark',
    black: 'bg-dark text-white hover:bg-black-super border',
    whiteRed: 'bg-white-soft border hover:border-red-light [&_svg]:hover:fill-red-light',
    whiteBlack: 'bg-white-soft text-dark-grey border hover:bg-white hover:text-black hover:border-black [&_svg]:hover:fill-black',
    green: 'bg-green-lime text-white',
    grey: 'bg-grey-light text-grey',
    hoverWhite: 'hover:white-soft',
    borderRed: 'hover:border-[#f29c9b]',
    HoverBgGrey: 'hover:bg-grey-light',
    greyLight2: 'bg-white border-grey-light2 ',
};

type ExtractKeys<T> = keyof T;
type BG_STYLE = ExtractKeys<typeof BUTTON_STYLES>;

type InputProps = {
    title?: string;
    disabled?: boolean;
    placeholder?: string;
    inputValue?: string;
    limitText?: number
    error?: boolean
    errorMessage?: string
    bgStyle: BG_STYLE;
    handleClick?: (e: any) => void;
    handleChange?: (e: any) => void;
    handleKeydown?: (e: any) => void;
};

export const InputSearch: FC<InputProps> = ({
    inputValue,
    placeholder,
    disabled,
    handleChange,
    handleClick,
    handleKeydown,
}) => {
    return (
        <div className='relative w-full'>
            <input
                className='w-full bg-white border border-grey-light2 rounded py-1.5 pl-4 pr-10 outline-none text-dark resize-none transition-colors duration-200 ease-in-out cursor-pointer'
                type='search'
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeydown}
                disabled={disabled}
            />
            <button className='absolute right-0 top-0 w-10 h-full flex items-center justify-center rounded-r' onClick={handleClick}>
                <SearchIcon className='w-6 fill-grey-light2' />
            </button>
        </div>
    )
}

export const Input: FC<InputProps> = ({
    title,
    inputValue,
    limitText,
    placeholder,
    disabled,
    error,
    errorMessage,
    handleChange,
}) => {
    const border = error ? 'border-red' : 'border-grey-light2'
    return (
        <div className='w-full flex flex-col justify-center items-start gap-1'>
            <label className='text-base font-medium text-dark'>{title}</label>
            <div className={`flex flex-wrap items-stretch w-full relative bg-white border ${border} focus:outline-0 rounded py-1.5 pl-4 pr-10 text-black-dark cursor-pointer`}>
                <input
                    className='flex-shrink flex-grow relative self-center outline-none text-black-dark cursor-pointer'
                    placeholder={placeholder}
                    maxLength={limitText}
                    value={inputValue}
                    onChange={handleChange}
                    disabled={disabled}
                />
                {error && (
                    <div className='absolute top-9 left-[-1px] text-red text-sm'>{errorMessage}</div>
                )}
            </div>
        </div>
    );
};

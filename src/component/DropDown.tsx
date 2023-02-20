import React, { useEffect, useRef, useState } from "react";
import { DropDownIcon } from "../assets/icon";

type optionProps = {
    id: number
    value: string
}

type DropdownsProps = {
    title?: string;
    options: optionProps[];
    value: any;
    rightIcon?: any;
    leftIcon?: any;
    placeholder: string;
    disebled?: boolean;
    error?: boolean
    errorMessage?: string
    handleChange: (e: any) => void;
};

export const Dropdown: React.FC<DropdownsProps> = ({
    title,
    options,
    value,
    rightIcon,
    leftIcon,
    placeholder,
    disebled,
    error,
    errorMessage,
    handleChange,
}) => {
    const [isOpen, setisOpen] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    const border = error ? 'border-red' : 'border-grey-light1'

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setisOpen(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isOpen]);
    return (
        <div className="w-full" ref={ref}>
            <div className="w-full flex flex-col justify-center items-start gap-1 pb-2">
                {title && <label className="text-base font-medium text-dark">{title}</label>}
                <button className={`${buttonCSS} ${border}`} onClick={() => setisOpen(!isOpen)} disabled={disebled}>
                    {value ?
                        options.filter(item => item.id === value).map(v => {
                            return (
                                <div key={v.id} className="text-dark-grey pl-2.5">{v.value}</div>
                            )
                        }) : (
                            <div className="text-grey pl-2.5">{placeholder}</div>
                        )}
                    <DropDownIcon className="w-6 fill-grey-light2" />
                    {error && (
                        <div className='absolute top-9 left-[-1px] text-red text-sm'>{errorMessage}</div>
                    )}
                </button>
            </div>

            <div className="relative">
                {isOpen && (
                    <div className={`${dropDownCSS}`}>
                        {options.map((items) => {
                            const fontActive = items.value === value && "text-red-dark hover:text-black";
                            const RightIcon = rightIcon && "justify-between";

                            return (
                                <div
                                    key={items.id}
                                    className="flex items-center justify-center"
                                    onClick={() => {
                                        handleChange(items.id);
                                        setisOpen(false);
                                    }}
                                >
                                    <div className={`${inDropDownCSS} ${RightIcon}`}>
                                        <div className="flex">
                                            {leftIcon && (
                                                <div className="mr-2 rounded">{leftIcon}</div>
                                            )}
                                            <div className={`${fontActive}`}>{items.value}</div>
                                        </div>
                                        {rightIcon && (
                                            <div className="ml-2 rounded">{rightIcon}</div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

const dropDownCSS = "absolute h-40 p-3 w-full z-[2] bg-white overflow-auto rounded border border-grey-light2";
const inDropDownCSS = "flex items-center p-2 w-full rounded-md bg-white cursor-pointer hover:bg-red-soft";
const buttonCSS = "group relative p-1.5 w-full rounded border border-grey-light2 bg-white cursor-pointer flex justify-between items-center disabled:text-grey disabled:bg-white-soft";
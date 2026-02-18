import clsx from "clsx"



 /**
 * @param {{
 * children: any,
 * className: string,
 * size: 'md' | 'lg',
 * variant: 'primary' | 'outline'
 * }} props
 */
export function UIButton({ children, className, size, variant }) {

    const buttonClassName = clsx(
        'text-center transition-colors',
        className,
        {
            md: "rounded px-6 py-2 text-sm leading-tight",
            lg: "rounded-lg px-5 py-2 text-2xl leading-tight"
        }[size],
        {
            primary: "text-white w-44 bg-teal-600 hover:bg-teal-500",
            outline: "border border-teal-600 text-teal-600 hover:bg-teal-50"
        }[variant]
    )

    return <div className={buttonClassName}>{children}</div>
}
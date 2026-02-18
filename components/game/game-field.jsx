import clsx from "clsx";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UIButton } from '../uikit/ui-button';


const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {
    return (
        <div className={
            clsx(className,
                'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7'
            )
        }>
            <div className="flex gap-3 items-center">
                <div className="mr-auto">
                    <div className="flex items-center gap-1 text-xl leading-tight">
                        Ход: <ZeroIcon className='w-5 h-5' />
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-xs leading-tight">
                        Следующий ход: <CrossIcon />
                    </div>
                </div>
                <UIButton size="md" variant="primary">Ничья</UIButton>
                <UIButton size="md" variant="outline">Сдаться</UIButton>
            </div>
            <div className="grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pt-px pl-px mt-3">
                {
                    cells.map((_, i) => <button className="border border-slate-200 -ml-px -mt-px flex items-center justify-center" key={i}></button>)
                }
            </div>
        </div>
    );
}
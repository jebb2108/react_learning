import {Profile} from '../profile/profile';
import {CrossIcon} from '../game/icons/cross-icon'
import clsx from 'clsx';

export function GameInfo({className}){
    return (
        <div className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 py-4 flex gap-3 justify-between')}>
            <div className='flex items-center gap-3'>
                <div className='relative'>
                    <Profile className={'w-44'}/>
                    <div className='w-5 h-5 rounded-full bg-white shadow absolute -top-1 -left-1 flex items-center justify-center'>
                       <CrossIcon/>
                    </div>
                </div>
                <div className='h-6 w-px bg-slate-200'></div>
                <div className='text-lg font-semibold'>1:08</div>
            </div>
            <div className='flex items-center gap-3'>
                <div className='text-orange-600 text-lg font-semibold'>0:08</div>
                <div className='h-6 w-px bg-slate-200'></div>
                <div className='relative'>
                    <Profile className={'w-44'}/>
                    <div className='w-5 h-5 rounded-full bg-white shadow absolute -top-1 -left-1 flex items-center justify-center'>
                       <CrossIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
}
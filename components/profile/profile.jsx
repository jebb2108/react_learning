import Image from 'next/image';
import Avatar from './ava_profile.png';
import clsx from 'clsx';

export function Profile({className}) {
    return (
        <div className={clsx('flex items-center gap-2 text-start text-teal-600', className)}>
            <Image src={Avatar} height={48} width={48} alt='profile' unoptimized />
            <div>
                <div className='text-lg leading-tight'>jebb_king24</div>
                <div className='text-slate-400 text-xs leading-tight'>Рейтинг: 1189</div>
            </div>
        </div>
    );
}
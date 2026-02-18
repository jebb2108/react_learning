import Image from 'next/image';
import Avatar from './ava_profile.png';

export function Profile() {
    return (
        <div className='flex items-center gap-2 text-start'>
            <Image src={Avatar} height={48} width={48} alt='profile' unoptimized />
            <div>
                <div className='text-teal-600 text-lg leading-tight'>jebb_king24</div>
                <div className='text-slate-400 text-xs leading-tight'>Рейтинг: 1189</div>
            </div>
        </div>
    );
}
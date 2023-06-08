'use client';
import loading from '../../../assets/gifs/load-3.gif';
import Image from 'next/image';

export default function Loading() {
    return (
        <Image className='loading-partial' src={loading} alt="my gif" height={200} width={200} />
    )
}

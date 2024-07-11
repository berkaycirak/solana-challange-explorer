import { timeToHumanRead, truncateString } from '@/utils';
import { ConfirmedSignatureInfo } from '@solana/web3.js';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const TransactionEvent = ({
	err,
	memo,
	signature,
	slot,
	blockTime,
	confirmationStatus,
}: ConfirmedSignatureInfo) => {
	return (
		<ul className='flex items-center [&_li]:flex-1 [&_li]:text-center [&_li]:cursor-pointer '>
			<Link
				href={`https://explorer.solana.com/tx/${signature}?cluster=devnet`}
				target='_blank'
				className='text-purple-500 flex gap-4  items-center justify-center group hover:underline flex-1 '>
				{truncateString(signature, 7, 7)}
				<ExternalLink
					size={16}
					className='invisible group-hover:visible'
				/>
			</Link>
			<li>{slot}</li>
			<li className='opacity-70'>
				{' '}
				{timeToHumanRead(blockTime as number)}
			</li>
			<li>
				<p className='px-2 py-1 bg-green-500 rounded-xl inline-block font-bold text-secondary-foreground'>
					{confirmationStatus}
				</p>
			</li>
		</ul>
	);
};

export default TransactionEvent;

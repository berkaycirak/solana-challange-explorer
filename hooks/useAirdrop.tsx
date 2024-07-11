import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { PublicKey } from '@solana/web3.js';
import { getAirdrop } from '@/actions/getAirdrop';
import { parseErrorMsg } from '@/utils';

const useAirdrop = () => {
	const [errorMessage, setErrorMessage] = useState<string | null>(
		null
	);
	const mutation = useMutation({
		mutationFn: getAirdrop,
		onError: (error) => {
			const errorMsg = parseErrorMsg(error);
			if (errorMsg) {
				setErrorMessage(errorMsg);
			}
		},
	});

	return { airdrop: mutation, errorMessage };
};

export default useAirdrop;

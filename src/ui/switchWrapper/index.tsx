'use client'

import dynamic from 'next/dynamic'

const Switch = dynamic(() => import('../switch'), {ssr: false})

export const SwitchWrapper = () => {
	return <Switch />
}

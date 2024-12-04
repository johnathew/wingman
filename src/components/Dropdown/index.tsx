import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Fragment } from 'react'
import { useState } from 'react'
import clsx from 'clsx'

function Dropdown({ onFilterChange }: { onFilterChange: (filter: string) => void }) {

    const [selected, setSelected] = useState('Featured')

    const options = [
        { label: 'Featured' },
        { label: 'Price: Low to High' },
        { label: 'Price: High to Low' },
        { label: 'Rating: Low to High' },
        { label: 'Rating: High to Low' },
    ]

    const handleChange = (filter: string) => {
        setSelected(filter)
        onFilterChange(filter)
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <MenuButton as={Fragment}>
                {({ active }) => <button className={clsx(active && 'bg-slate-200 border-2 p-2 m-2', !active && 'bg-slate-700 text-slate-200 border-2 p-2 m-2')}>
                    Sort by: {selected}
                </button>}
            </MenuButton>
            <MenuItems anchor="bottom" className='bg-slate-700 p-2 border-2 text-slate-200'>
                {options.map((option) => (
                    <MenuItem key={option.label} as={Fragment}>
                        {({ focus }) => (
                            <button className={clsx('block', focus && 'bg-blue-100 text-black ')} onClick={() => handleChange(option.label)}>
                                {option.label}
                            </button>
                        )}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>

    )
}

export default Dropdown;
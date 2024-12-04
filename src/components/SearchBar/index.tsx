interface SearchBarProps {
    onChange: (value: string) => void;
}

export default function SearchBar({ onChange }: SearchBarProps) {
    return (
        <input
            type='text'
            aria-label='Search'
            onChange={(e) => onChange(e.target.value)}
            placeholder='Search Products'
            className="p-2 m-2 border-2"
        />
    );
}
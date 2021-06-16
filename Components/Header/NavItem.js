import Link from 'next/link'

export default function NavItem({ children, ...props }) {
    if (props.href === undefined)
        props.href = "/";
    return (
        <Link href={props.href}>
            <li>
                {children}
            </li>
        </Link>
    );
}
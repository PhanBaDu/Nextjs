interface LayoutLoginProps {
    children: React.ReactNode;
}

export default function LayoutLogin({ children }: LayoutLoginProps) {
    return (
        <div>
            <header>Header</header>
            {children}
        </div>
    );
}

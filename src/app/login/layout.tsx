import Header from '@/components/header';

interface LayoutLoginProps {
    children: React.ReactNode;
}

export default function LayoutLogin({ children }: LayoutLoginProps) {
    return (
        <div>
            <Header data={'Components'} />
            {children}
        </div>
    );
}

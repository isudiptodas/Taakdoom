
interface EmailTemplateProps {
    name: string;
}

export function CompanyEmailTemplate({ name }: EmailTemplateProps) {
    return (
        <>
            <div>
                <h1>A new message just arrived from {name}</h1>
            </div>
        </>
    );
}
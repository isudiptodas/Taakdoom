
import {
    Body,
    Container,
    Heading,
    Html,
    Preview,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

interface EmailTemplateProps {
    name: string;
    company?: string;
    email: string;
    message: string;
}

export function CompanyEmailTemplate({
    name,
    company,
    email,
    message,
}: EmailTemplateProps) {
    return (
        <Html>
            <Preview>New enquiry received from {name}</Preview>

            <Tailwind>
                <Body className="bg-gray-100 py-10 font-sans">
                    <Container className="mx-auto max-w-[600px] rounded-xl bg-white px-8 py-10">

                        {/* Company Name */}
                        <Section className="text-center">
                            <Heading className="mt-5 text-2xl font-bold text-black">
                                Taakdoom
                            </Heading>

                            <Text className="mt-4 text-base leading-6 text-gray-600">
                                You have received a new enquiry through your
                                website.
                            </Text>
                        </Section>

                        {/* Divider */}
                        <Section className="my-6 border-t border-gray-200" />

                        {/* Details */}
                        <Section className={`px-6`}>
                            <Text className="m-0 text-sm font-semibold text-gray-500">
                                Name
                            </Text>

                            <Text className="mt-1 text-base text-gray-900">
                                {name}
                            </Text>

                            {company && (
                                <>
                                    <Text className="mt-5 mb-0 text-sm font-semibold text-gray-500">
                                        Company
                                    </Text>

                                    <Text className="mt-1 text-base text-gray-900">
                                        {company}
                                    </Text>
                                </>
                            )}

                            <Text className="mt-5 mb-0 text-sm font-semibold text-gray-500">
                                Email
                            </Text>

                            <Text className="mt-1 text-base text-gray-900">
                                {email}
                            </Text>

                            <Text className="mt-5 mb-0 text-sm font-semibold text-gray-500">
                                Message
                            </Text>

                            <Section className="mt-2 rounded-2xl bg-gray-50 px-5 py-4">
                                <Text className="m-0 text-base leading-6 text-gray-700">
                                    {message}
                                </Text>
                            </Section>
                        </Section>

                        {/* Footer */}
                        <Section className="mt-8 border-t border-gray-200 pt-6 text-center">
                            <Text className="m-0 py-5 text-sm text-gray-400">
                                This is an automated message from the Taakdoom website. Don't reply to this message.
                            </Text>
                        </Section>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}


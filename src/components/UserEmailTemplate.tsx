
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
}

export function UserEmailTemplate({ name }: EmailTemplateProps) {
    return (
        <Html>
            <Preview>We have received your message</Preview>

            <Tailwind>
                <Body className="bg-gray-100 py-10 font-sans">
                    <Container className="mx-auto max-w-[600px] rounded-xl bg-white px-8 py-10">

                        {/* Company Name */}
                        <Section className="text-center">
                            <Heading className="m-0 text-2xl font-bold text-black">
                                Taakdoom
                            </Heading>
                        </Section>

                        {/* Message */}
                        <Section className="mt-8">
                            <Heading className="text-xl font-semibold text-gray-900">
                                Hi {name},
                            </Heading>

                            <Text className="text-base leading-7 text-gray-600">
                                Thank you for reaching out to us.
                            </Text>

                            <Text className="text-base leading-7 text-gray-600">
                                We have successfully received your message.
                                Our team will look into it and get back to you
                                as soon as possible.
                            </Text>

                            <Text className="text-base leading-7 text-gray-600">
                                We appreciate you taking the time to get in
                                touch with us.
                            </Text>
                        </Section>

                        {/* Closing */}
                        <Section className="mt-8">
                            <Text className="m-0 text-base text-gray-700">
                                Regards,
                            </Text>

                            <Text className="mt-1 text-base font-semibold text-gray-900">
                                Team Taakdoom
                            </Text>
                        </Section>

                        {/* Footer */}
                        <Section className="mt-8 border-t border-gray-200 pt-6 text-center">
                            <Text className="m-0 text-sm text-gray-400">
                                This is an automated confirmation email from Taakdoom.
                            </Text>
                        </Section>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}


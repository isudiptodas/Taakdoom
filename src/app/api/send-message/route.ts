import { CompanyEmailTemplate } from "@/components/CompanyEmailTemplate";
import { connectDB } from "@/config/connectDB";
import { Message } from "@/models/message";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { data } = body;

    await connectDB();

    try {
        const newMessage = new Message(data);

        await newMessage.save();

        const { data: emailData, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['marketing@taakdoom.com'],
            subject: 'Taakdoom Enquiry Message',
            react: CompanyEmailTemplate({ name: data?.name }),
        });

        if (error) {
            console.log(error);
            return Response.json({ error }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            message: `Message sent`,
        }, { status: 200 })
    } catch (error) {
        console.log("ERROR -> ", error);
        return NextResponse.json({
            success: false,
            message: `SOMETHING WENT WRONG`,
        }, { status: 500 })
    }
}
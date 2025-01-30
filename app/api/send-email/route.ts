import EmailTemplate from "@/emails/template";
import { Resend } from "resend";

interface EmailParams {
  fullname: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  const { fullname, email, message }: EmailParams = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["sampomahdev@gmail.com"],
      subject: "Enquires",
      react: EmailTemplate({
        fullName: fullname,
        email: email,
        message: message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

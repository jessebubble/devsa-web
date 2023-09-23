import type { ActionArgs } from "@remix-run/node"
import { json, redirect } from "@remix-run/node"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export const loader = async ({ request }: ActionArgs) => {
    const body = new URLSearchParams(await request.text());
    const email = body.get("email");
    const name = body.get("name");
    const message = body.get("message");
    const phone = body.get("phone");
    const company = body.get("company");
    try {
        const data = await resend.emails.send({
            from: "devSA <hello@devsanantonio.com>",
            to: ["jesseovr@gmail.com"],
            subject: "Welcome to devSA",
            html: `
                <h1>Hey Jesse,</h1>
                <p>Someone has submitted a message on devSA</p>
                <p>Here's their info:</p>
                <p>Email: ${email}</p>
                <p>Name: ${name}</p>
                <p>Message: ${message}</p>
                <p>Phone: ${phone}</p>
                <p>Company: ${company}</p>
                <p>Let's build something together</p>
            `,
        });

        return json(data, 200 );

    } catch (error) {
        console.log(error);
        return json({ error: "Something went wrong" }, 400);
    }
}

export async function action({ request }: ActionArgs) {
    const body = new URLSearchParams(await request.text());
    const email = body.get("email") ?? "";
    const name = body.get("name") ?? "";
    const message = body.get("message") ?? "";
    const phone = body.get("phone") ?? "";
    const company = body.get("company") ?? "";

    if (!email) {
        return json({ error: "Email is required" }, 400);
    } 

    try {
        await resend.emails.send({ 
            from: "devSA <hello@devsanantonio.com>",
            to: [email],
            reply_to: ["jesseovr@gmail.com"],
            subject: "Thank you for supporting devSA!",
            html: `
                <h1>Hey ${name},</h1>
                <p>Thanks for reaching out to devSA</p>
                <p>Here's what you sent:</p>
                <p>Email: ${email}</p>
                <p>Name: ${name}</p>
                <p>Message: ${message}</p>
                <p>Company: ${company}</p>
                <p>Phone: ${phone}</p>
                <p>We'll be in touch soon</p>
                <br />
                <br />
                <br />
                <h1>Let's build something together</h1>
                <p> <a href="https://devsanantonio.com">www.devsanantonio.com</a></p>
            `,
        });

        return redirect("/" , {
            headers: {
                "Set-Cookie": `email=${email}; name=${name}; message=${message}; phone=${phone}; company=${company} Max-Age=31536000; Path=/; HttpOnly; SameSite=Lax`,
            },
        });
    }

    catch (error) {
        console.log(error);
        return json({ error: "Something went wrong" }, 400);
    }
}

/* export const loader = async () => {
    try {
      const data = await resend.emails.send({
        from: 'devSA <onboarding@resend.dev>',
        to: ['jesseovr@gmail.com'],
        subject: 'Hello world',
        html: '<strong>Thank you for subscribing!</strong>',
      });
  
      return json(data, 200);
    }
    catch (error) {
      return json({ error }, 400);
    }
  }; */
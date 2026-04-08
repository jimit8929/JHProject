import { NextResponse } from "next/server"
// import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      service,
      subject,
      message,
      budget,
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !service || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Format the email content
    const emailContent = `
New Enquiry from J & H Projects Website

CONTACT DETAILS
---------------
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company || "Not provided"}

ENQUIRY DETAILS
---------------
Service Required: ${service}
Subject: ${subject}
Estimated Budget: ${budget || "Not specified"}

PROJECT DETAILS
---------------
${message}

---
This enquiry was submitted through the J & H Projects website.
`

    // Temporarily disabled until RESEND_API_KEY is configured.
    // const { error } = await resend.emails.send({
    //   from: "J & H Projects Website <onboarding@resend.dev>",
    //   to: ["mahendrajp1971@gmail.com"],
    //   replyTo: email,
    //   subject: `New Enquiry: ${subject}`,
    //   text: emailContent,
    // })

    // if (error) {
    //   console.error("Resend error:", error)
    //   return NextResponse.json(
    //     { error: "Failed to send email" },
    //     { status: 500 }
    //   )
    // }

    return NextResponse.json({ success: true, emailSent: false })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

import { NextResponse } from 'next/server';
import { googleSheetsService } from '@/lib/googleSheetsService';
import { emailService } from '@/lib/emailService';
import { validateEmail } from '@/lib/validateEmail';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, businessName, email, phone, budget } = body;

        // Basic validation
        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, message: 'Name, email, and phone are required.' },
                { status: 400 }
            );
        }

        if (!validateEmail(email)) {
            return NextResponse.json(
                { success: false, message: 'Please provide a valid email address.' },
                { status: 400 }
            );
        }

        // Format submitted time in IST
        const submittedAt = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });

        const leadData = {
            name: name.trim(),
            businessName: (businessName || '').trim(),
            email: email.trim(),
            phone: phone.trim(),
            budget: budget || '₹5k - ₹10k',
        };

        // 1️⃣ Save to Google Sheets
        await googleSheetsService.addEcoLead(leadData);

        // 2️⃣ Send admin notification email (non-blocking — won't fail the request if email errors)
        emailService.sendEcoLeadNotification({
            ...leadData,
            submittedAt,
        }).catch((err) => {
            console.error('Admin email notification failed (non-fatal):', err);
        });

        return NextResponse.json(
            { success: true, message: 'Your consultation request has been received! We will contact you shortly.' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('ECO Lead submission error:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to submit your request. Please try again.' },
            { status: 500 }
        );
    }
}

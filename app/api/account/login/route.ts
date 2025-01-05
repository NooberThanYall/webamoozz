"use server";

import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/UserModel";
import connectDB from "@/lib/db/mongodb";

export async function POST(req: NextRequest) {
  await connectDB();
  const { email, password, name } = req.json();

  try {
    const user = await User.findOne({ email });

    if (!user) throw new Error("کاربری با این ایمیل یافت نشد!");

    if (user.password === password) {
      return NextResponse.json({
        success: true,
        user: { email, name },
      });
    }
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message });
  }
}

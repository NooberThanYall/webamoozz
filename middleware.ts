import { NextResponse } from "next/server";
import { updateSession } from "./lib/auth/jwt";

export function middleware(request) {
  const response = updateSession(request);
  return response || NextResponse.next();
}
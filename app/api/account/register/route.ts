import connectDB from "@/lib/db/mongodb";
import headers from "./../../../../utils/headersCORS";
import User from "@/app/models/UserModel";
import { InitialState } from "@/app/_actions/SignUpAction";

export async function POST(req) {
  await connectDB();
  const { name, email, password } = await req.json();

  const userAlrExist = await User.findOne({ email });

  if (userAlrExist)
    return Response.json(
      {success: false, errors: {email: 'ایمیل قبلا ثبت شده!'} },
      {
        headers: headers,
      }
    );

  const createdUser = await User.create({
    name,
    email,
    password,
  });

  return Response.json(
    { success: true, errors: {}},
    {
      headers: headers,
    }
  );
}

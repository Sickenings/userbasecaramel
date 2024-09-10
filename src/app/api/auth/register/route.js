import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const data = await request.json();

    const userFound = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFound) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }

    const usernameFound = await db.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (usernameFound) {
      return NextResponse.json(
        {
          message: "Username already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });

    // Option 1: Remove destructuring if you don't need the password property
    // const user = newUser;

    // Option 2: Use the _ variable to avoid the warning
    const user = newUser;

    return NextResponse.json(user, {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "An error occurred while creating the user",
      },
      {
        status: 500,
      }
    );
  }
}